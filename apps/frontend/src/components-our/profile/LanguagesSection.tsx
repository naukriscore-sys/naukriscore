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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const availableLanguages = [
  "Hindi",
  "English",
  "Bengali",
  "Telugu",
  "Marathi",
  "Tamil",
  "Urdu",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
];

const LanguagesSection = () => {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([
    "Hindi",
    "English",
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selectedLanguages);

  const handleToggle = (language: string) => {
    setTempSelected((prev) =>
      prev.includes(language)
        ? prev.filter((l) => l !== language)
        : [...prev, language]
    );
  };

  const handleSave = () => {
    setSelectedLanguages(tempSelected);
    setModalOpen(false);
    toast.success("Languages updated");
  };

  return (
    <>
      <section id="languages" className="bg-card rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Languages</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setTempSelected(selectedLanguages);
              setModalOpen(true);
            }}
          >
            <Edit className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {selectedLanguages.map((lang) => (
            <div
              key={lang}
              className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            >
              {lang}
            </div>
          ))}
        </div>
      </section>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Select Languages</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-4 max-h-[400px] overflow-y-auto">
            {availableLanguages.map((language) => (
              <div key={language} className="flex items-center space-x-2">
                <Checkbox
                  id={language}
                  checked={tempSelected.includes(language)}
                  onCheckedChange={() => handleToggle(language)}
                />
                <Label htmlFor={language} className="cursor-pointer">
                  {language}
                </Label>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LanguagesSection;
