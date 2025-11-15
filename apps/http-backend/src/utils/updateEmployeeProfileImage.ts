import prisma from "@repo/db/db";
import { uploadToImageKit } from "./uploadThings";

export const updateProfileImage = async (
  userId: string,
  file: Express.Multer.File,
  role: "employee" | "employer"
) => {
  try {
    if (role === "employee") {
      const profileImg = await uploadToImageKit(file, "employee-profile-img");
      if (profileImg) {
        await prisma.employee.update({
          where: {
            id: userId,
          },
          data: {
            profileImg,
          },
        });
      }
    } else if (role === "employer") {
      const profileImg = await uploadToImageKit(file, "employer-profile-img");
      if (profileImg) {
        await prisma.employer.update({
          where: {
            id: userId,
          },
          data: {
            profileImg,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};
