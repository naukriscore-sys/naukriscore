"use client";

import { useState } from "react";
import { Upload, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ResumeSection = () => {
  const [resume, setResume] = useState<{ name: string; url: string } | null>(
    null
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (
        file.type !== "application/pdf" &&
        !file.type.startsWith("application/vnd")
      ) {
        toast.error("Please upload a PDF or document file");
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        toast.error("File size should be less than 10MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setResume({ name: selectedFile.name, url });
      toast.success("Resume uploaded successfully");
      setModalOpen(false);
      setSelectedFile(null);
    }
  };

  return (
    <>
      <section id="resume" className="bg-card rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Resume</h2>
        </div>

        {resume ? (
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-medium">{resume.name}</p>
                  <a
                    href={resume.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    View Resume <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
              <Button onClick={() => setModalOpen(true)}>Update</Button>
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
            <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No resume uploaded yet</p>
            <Button onClick={() => setModalOpen(true)}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
          </div>
        )}
      </section>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{resume ? "Update" : "Upload"} Resume</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <label
              htmlFor="resume-upload"
              className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-primary transition-colors"
            >
              <Upload className="h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-sm text-muted-foreground mb-2">
                {selectedFile
                  ? selectedFile.name
                  : "Click to upload PDF or document"}
              </p>
              <p className="text-xs text-muted-foreground">Max size: 10MB</p>
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave} disabled={!selectedFile}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ResumeSection;
