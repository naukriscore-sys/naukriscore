import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: "public_SsE5cL/lvAkiOiNxANbYTlGfHoU=",
  privateKey: "private_8bjQ9EbytJ5J+q2oS5r07nJEqMI=",
  urlEndpoint: "https://ik.imagekit.io/d1l8thbvky",
});

export const uploadToImageKit = async (
  file: Express.Multer.File,
  folder: string
): Promise<string | null> => {
  const uploadOptions = {
    file: file.buffer.toString("base64"),
    fileName: file.originalname,
    folder: folder,
  };

  try {
    const response = await imagekit.upload(uploadOptions);
    console.log("Upload successful:", response);
    return response.url ?? null; // Return the uploaded url
  } catch (error) {
    console.error("ImageKit upload error:", error);
    return null;
  }
};
