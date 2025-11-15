"use client";

import { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface Experience {
  id: string;
  company: string;
  duration: string;
  projectName: string;
  description: string;
  projectUrl?: string;
}

const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "Tech Solutions Ltd.",
      duration: "2020 - 2023",
      projectName: "E-commerce Platform",
      description:
        "Led development of a scalable e-commerce platform serving 100K+ users.",
      projectUrl: "https://example.com",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Experience, "id">>({
    company: "",
    duration: "",
    projectName: "",
    description: "",
    projectUrl: "",
  });

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      company: "",
      duration: "",
      projectName: "",
      description: "",
      projectUrl: "",
    });
    setModalOpen(true);
  };

  const handleEdit = (exp: Experience) => {
    setEditingId(exp.id);
    setFormData({
      company: exp.company,
      duration: exp.duration,
      projectName: exp.projectName,
      description: exp.description,
      projectUrl: exp.projectUrl || "",
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setExperiences(experiences.filter((e) => e.id !== id));
    toast.success("Experience deleted");
  };

  const handleSave = () => {
    if (!formData.company || !formData.projectName) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingId) {
      setExperiences(
        experiences.map((e) =>
          e.id === editingId ? { ...formData, id: editingId } : e
        )
      );
      toast.success("Experience updated");
    } else {
      setExperiences([
        ...experiences,
        { ...formData, id: Date.now().toString() },
      ]);
      toast.success("Experience added");
    }
    setModalOpen(false);
  };

  return (
    <>
      <section id="experience" className="bg-card rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Experience</h2>
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Experience
          </Button>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div key={exp.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.duration}
                  </p>
                  <p className="font-medium mt-2">{exp.projectName}</p>
                  <p className="text-sm text-foreground mt-1">
                    {exp.description}
                  </p>
                  {exp.projectUrl && (
                    <a
                      href={exp.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                    >
                      View Project
                    </a>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(exp)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(exp.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit" : "Add"} Experience</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Company Name *</Label>
              <Input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Company name"
              />
            </div>
            <div className="space-y-2">
              <Label>Duration</Label>
              <Input
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                placeholder="e.g., 2020 - 2023"
              />
            </div>
            <div className="space-y-2">
              <Label>Project Name *</Label>
              <Input
                value={formData.projectName}
                onChange={(e) =>
                  setFormData({ ...formData, projectName: e.target.value })
                }
                placeholder="Project name"
              />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Brief description of your role and achievements"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Project URL (Optional)</Label>
              <Input
                value={formData.projectUrl}
                onChange={(e) =>
                  setFormData({ ...formData, projectUrl: e.target.value })
                }
                placeholder="https://example.com"
              />
            </div>
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

export default ExperienceSection;
