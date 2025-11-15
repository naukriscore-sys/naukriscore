"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUploadDocumentMutation } from "@/redux/service/profileBuilderchat";
import { toast } from "sonner";

export const InputBoxCard = ({
  documentType,
  uploadFileLabel,
  setTakeInput,
  setUploadCompleted,
  addUploadMessage,
}: any) => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadDocument] = useUploadDocumentMutation();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
      if (selectedFile.type.startsWith("image/")) {
        setPreviewUrl(URL.createObjectURL(selectedFile));
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error("Please select a file before proceeding.");
      return;
    }

    console.log("this is a file = ", file);

    try {
      setLoading(true);
      const res = await uploadDocument({ documentType, file }).unwrap();
      console.log("this is a response = ", res);
      toast.success(res?.message || "File Uploaded Successfully");
      setTakeInput(false);
      addUploadMessage(res?.message || "File Uploaded Successfully");
    } catch (err: any) {
      console.log("something went wrong = ", err);
      toast.error(
        err?.data?.message || "Something went wrong please try again"
      );
      addUploadMessage("File not Uploaded, i want to try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-(--primary-cards-color) p-5 rounded-xl shadow-md w-full max-w-xs flex flex-col items-center justify-center text-white text-center space-y-4">
      <div>
        <h2 className="text-lg font-semibold tracking-wide mt-1">
          {uploadFileLabel}
        </h2>
      </div>

      <label className="bg-white text-(--primary-cards-color) font-medium px-4 py-2 rounded-full cursor-pointer shadow-sm hover:bg-opacity-90 hover:scale-105 transition-transform duration-300 text-xs">
        Choose File
        <input type="file" onChange={handleFileChange} className="hidden" />
      </label>

      {file && (
        <div className="text-xs mt-1">
          <p className="truncate max-w-[200px]">{file.name}</p>
        </div>
      )}

      {previewUrl && (
        <div className="w-24 h-24 rounded-lg overflow-hidden shadow-inner border border-white/20 mt-2">
          <img
            src={previewUrl}
            alt="Preview"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {error && <p className="text-[11px] text-red-300">{error}</p>}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-2 bg-white cursor-pointer text-[var(--primary-cards-color)] font-medium px-4 py-2 rounded-full shadow-sm hover:bg-opacity-90 hover:scale-105 transition-transform duration-300 text-xs"
      >
        {loading ? "Uploading..." : "Upload & Continue"}
      </button>

      <p className="text-[10px] opacity-70 italic">
        Only image or document files are supported.
      </p>
    </div>
  );
};
