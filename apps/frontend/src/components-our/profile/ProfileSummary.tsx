"use client";

import { useState } from "react";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ProfileSummary = () => {
  const [summary, setSummary] = useState(
    "Experienced professional with a strong background in commerce and business management. Passionate about data analysis and strategic planning."
  );
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [tempSummary, setTempSummary] = useState(summary);

  const handleSave = () => {
    if (tempSummary.length > 1000) {
      toast.error("Summary must be under 1000 characters");
      return;
    }
    setSummary(tempSummary);
    setEditModalOpen(false);
    toast.success("Profile summary updated");
  };

  return (
    <>
      <section id="summary" className="bg-card rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Profile Summary</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setEditModalOpen(true)}
          >
            <Edit className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-foreground leading-relaxed">
          {summary || "No summary added yet."}
        </p>
      </section>

      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Profile Summary</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <Textarea
              value={tempSummary}
              onChange={(e) => setTempSummary(e.target.value)}
              placeholder="Write a brief summary about yourself..."
              rows={8}
              maxLength={1000}
            />
            <p className="text-sm text-muted-foreground mt-2">
              {tempSummary.length}/1000 characters
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileSummary;
