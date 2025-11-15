"use client";

import { useState } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";

interface ProfileImageUploadProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  currentImage: string | null;
  onSave: (imageUrl: string) => void;
}

const ProfileImageUpload = ({
  open,
  onOpenChange,
  currentImage,
  onSave,
}: ProfileImageUploadProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(currentImage);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select a valid image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (previewImage) {
      onSave(previewImage);
      toast.success("Profile image updated successfully");
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    setPreviewImage(currentImage);
    setSelectedFile(null);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Profile Image</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex flex-col items-center gap-4">
            {previewImage ? (
              <div className="relative">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-48 h-48 rounded-full object-cover border-4 border-secondary"
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-0 right-0 rounded-full"
                  onClick={() => {
                    setPreviewImage(null);
                    setSelectedFile(null);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="w-48 h-48 rounded-full border-4 border-dashed border-border flex items-center justify-center bg-secondary/30">
                <Upload className="h-12 w-12 text-muted-foreground" />
              </div>
            )}

            <label htmlFor="image-upload" className="cursor-pointer">
              <Button variant="outline" asChild>
                <span>Choose Image</span>
              </Button>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!previewImage}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImageUpload;
