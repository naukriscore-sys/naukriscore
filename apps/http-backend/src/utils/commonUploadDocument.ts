import fs from "fs";
import path from "path";
import Tesseract from "tesseract.js";
import { exec } from "child_process";
import { fileURLToPath } from "url";
import prisma from "@repo/db/db";
import type { employeeDocumentType } from "../zod/employeeDocumentSchema";
import { aiDocumentResponse } from "./aiDocumentResponse";
import { fileTypeFromBuffer } from "file-type"; // install this: npm i file-type

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Run a shell command
const runCommand = (cmd: string) =>
  new Promise<void>((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr || err);
      else resolve();
    });
  });

export const commonUploadDocument = async (
  fileBuffer: Buffer,
  documentId: string,
  documentType: employeeDocumentType,
  userId: string
) => {
  try {
    console.log("process starts");

    // 🔍 Step 1: Detect file type (works even if file has no extension)
    const detectedType = await fileTypeFromBuffer(fileBuffer);
    const mime = detectedType?.mime || "application/pdf"; // fallback

    // Paths
    const tempDir = path.join(__dirname, "output");
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);

    const tempInputPath = path.join(tempDir, `temp_${Date.now()}`);
    const outputImagePath = `${tempInputPath}_output.png`;

    let imagePath = "";

    // 🧩 Step 2: Convert to image if PDF
    if (mime === "application/pdf") {
      const pdfPath = `${tempInputPath}.pdf`;
      fs.writeFileSync(pdfPath, fileBuffer);

      await runCommand(
        `pdftoppm -png -f 1 -singlefile "${pdfPath}" "${tempInputPath}_output"`
      );

      imagePath = outputImagePath;

      fs.unlinkSync(pdfPath); // cleanup
    } else if (mime.startsWith("image/")) {
      // 🧩 Step 3: If it's an image, write it directly
      const ext = mime.split("/")[1];
      imagePath = `${tempInputPath}.${ext}`;
      fs.writeFileSync(imagePath, fileBuffer);
    } else {
      console.log("❌ Unsupported file type:", mime);
      await prisma.documents.update({
        where: { id: documentId },
        data: { status: "failed", remarks: `Unsupported file type: ${mime}` },
      });
      return;
    }

    // 🧠 Step 4: OCR extraction
    const {
      data: { text: ocrText },
    } = await Tesseract.recognize(imagePath, "eng");

    fs.unlinkSync(imagePath); // cleanup temp image

    if (!ocrText || ocrText.trim().length < 10) {
      console.log("No readable text found via OCR.");
      await prisma.documents.update({
        where: { id: documentId },
        data: { status: "failed", remarks: "No readable text extracted." },
      });
      return;
    }

    console.log("this is the ocr text that we got ");
    console.log(ocrText);

    // 🤖 Step 5: Send to AI for structured parsing
    const ai = await aiDocumentResponse({
      text: ocrText,
      document_type: documentType,
    });

    console.log("this is the ai response =>", ai);

    const { parsed_data, remarks } = ai;

    await prisma.documents.update({
      where: {
        id: documentId,
        employeeId: userId,
      },
      data: {
        data: parsed_data ?? "",
        updatedAt: new Date(),
        remarks: remarks ?? "",
        type: documentType.documentType,
        status: "success",
      },
    });

    console.log(`✅ ${mime} document processed successfully.`);
  } catch (error) {
    console.error("Error processing document:", error);
    await prisma.documents.update({
      where: { id: documentId },
      data: { status: "failed", remarks: "Processing error" },
    });
  }
};
