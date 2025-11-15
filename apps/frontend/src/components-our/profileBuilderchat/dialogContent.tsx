"use client";

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import { Input } from "@/components/ui/input";

interface DialogContentProps {
  setFile: (file: File | null) => void;
  file: File | null;
  uploadResume: Function;
}

export const DailogContent: React.FC<DialogContentProps> = ({
  setFile,
  file,
  uploadResume,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload Resume</DialogTitle>
        <DialogDescription>
          Please ensure your resume is in PDF format.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <Input
          id="fileUpload"
          type="file"
          onChange={handleChange}
          className="border-white"
        />

        {file && (
          <button
            onClick={() => {
              uploadResume();
            }}
            className="cursor-pointer text-sm border-[#9997A0] flex items-center gap-2 border px-8 py-1 rounded-lg transition duration-200"
            disabled={!file}
          >
            Upload
          </button>
        )}
      </div>
    </DialogContent>
  );
};
