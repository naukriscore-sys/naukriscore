import type { Request, Response } from "express";
import { responsePlate } from "../utils";
import { uploadToImageKit } from "../utils/uploadThings";
import prisma from "@repo/db/db";
import { commonUploadDocument } from "../utils/commonUploadDocument";
import { employeeDocumentSchema } from "../zod/employeeDocumentSchema";

export const commonDocumentUploads = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const verifiedUser = req.user;

    const { data, success, error } = employeeDocumentSchema.safeParse(
      req.params
    );

    if (!success) {
      return responsePlate(res, {
        message: "invalid arguments",
        data: error.issues.map((er) => `${er.path.join(".")}: ${er.message}`),
        success: false,
        status: 400,
      });
    }
    console.log("hello this is running");
    console.log(req.file);
    console.log(req.files);

    const { documentType } = data;

    const files = req.files as Express.Multer.File[];

    if (!files || files.length === 0) {
      return responsePlate(res, {
        message: "file not found",
        status: 400,
        success: false,
      });
    }

    const uploadedUrls = await Promise.all(
      files.map((file) => uploadToImageKit(file, documentType))
    );

    const documentUrl = uploadedUrls[0];
    if (!documentUrl) {
      return responsePlate(res, {
        message: `failed: ${documentType} upload failed`,
        status: 400,
        success: false,
      });
    }

    const documents = await prisma.documents.create({
      data: {
        employeeId: verifiedUser.userId,
        role: verifiedUser.role,
        type: documentType,
        url: documentUrl,
        status: "pending",
      },
    });

    // if (documentType !== "profilePhoto") {
    //   commonUploadDocument(
    //     files[0]?.buffer!,
    //     documents.id,
    //     { documentType },
    //     verifiedUser.userId
    //   );
    // }

    return responsePlate(res, {
      message: `${documentType} uploaded successfully`,
      success: true,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return responsePlate(res, {
      message: "Internal server error",
      status: 500,
      success: false,
    });
  }
};
