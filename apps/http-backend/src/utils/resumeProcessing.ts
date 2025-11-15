import fs from "fs";
import path from "path";
import Tesseract from "tesseract.js";
import { exec } from "child_process";
import { aiResponse } from "../utils/aiResponse";
import prisma from "@repo/db/db";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to run shell commands
const runCommand = (cmd: string) =>
  new Promise<void>((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr || err);
      else resolve();
    });
  });

export const resumeProcessing = async (
  fileBuffer: Buffer,
  resumeJobId: string,
  userId: string
) => {
  try {
    console.log("process starts");
    // 2. If no text → fallback to OCR
    const tempPdfPath = path.join(__dirname, "temp.pdf");
    const outputPrefix = path.join(__dirname, "output", "page");

    if (!fs.existsSync(path.join(__dirname, "output"))) {
      fs.mkdirSync(path.join(__dirname, "output"));
    }

    // Write PDF temporarily
    fs.writeFileSync(tempPdfPath, fileBuffer);

    // Convert first page of PDF to PNG using pdftoppm (from Poppler)
    await runCommand(
      `pdftoppm -png -f 1 -singlefile "${tempPdfPath}" "${outputPrefix}"`
    );

    const imagePath = `${outputPrefix}.png`;

    // OCR with Tesseract
    const {
      data: { text: ocrText },
    } = await Tesseract.recognize(imagePath, "eng");

    // Cleanup
    fs.unlinkSync(tempPdfPath);
    if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);

    if (!ocrText || ocrText.trim().length < 10) {
      return;
    }

    // Send extracted text to AI
    try {
      const ai = await aiResponse(ocrText, "resume");

      // personal_details from ai data
      const { name, email, phone } = ai?.data?.personal_details;

      // designation from the ai response
      const designation = ai?.data?.designation;

      // education from ai response
      const education = ai?.data?.education;

      // experience from ai response
      const experiences = ai?.data?.experience;

      // skills from ai response
      const skills = ai?.data?.skills;

      // projects from ai response
      const projects = ai?.data?.projects;

      // socialLinks from ai response
      const socialLinks = ai?.data?.social_links;

      await prisma.resumeDetails.update({
        where: {
          id: resumeJobId,
        },
        data: {
          status: "success",
          designation: designation ?? "N/A",
          personalInfo: {
            create: {
              email: email ?? "N/A",
              fullName: name ?? "N/A",
              phone: phone ?? "N/A",
            },
          },
          educations: {
            createMany: {
              data: education ?? [],
            },
          },
          experiences: {
            createMany: {
              data: experiences ?? [],
            },
          },
          skills: {
            createMany: {
              data: (skills ?? []).map((sk: string) => ({ name: sk })),
            },
          },
          projects: {
            createMany: {
              data: projects ?? [],
            },
          },
          socialLinks: {
            createMany: {
              data: socialLinks ?? [],
            },
          },
          employeeId: userId,
        },
      });

      return;
    } catch (error) {
      console.log(error);
      await prisma.resumeDetails.update({
        where: {
          id: resumeJobId,
        },
        data: {
          status: "failed",
        },
      });
      return;
    }
  } catch (error) {
    console.error("Error uploading resume:", error);
    return;
  }
};
