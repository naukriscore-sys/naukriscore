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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface Education {
  id: string;
  course: string;
  institution: string;
  startDate: string;
  endDate: string;
  courseType: string;
}

const EducationSection = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: "1",
      course: "B.Com (Bachelor of Commerce)",
      institution: "Delhi University",
      startDate: "2013",
      endDate: "2016",
      courseType: "Regular",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<Education, "id">>({
    course: "",
    institution: "",
    startDate: "",
    endDate: "",
    courseType: "Regular",
  });

  const handleAdd = () => {
    setEditingId(null);
    setFormData({
      course: "",
      institution: "",
      startDate: "",
      endDate: "",
      courseType: "Regular",
    });
    setModalOpen(true);
  };

  const handleEdit = (edu: Education) => {
    setEditingId(edu.id);
    setFormData({
      course: edu.course,
      institution: edu.institution,
      startDate: edu.startDate,
      endDate: edu.endDate,
      courseType: edu.courseType,
    });
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setEducations(educations.filter((e) => e.id !== id));
    toast.success("Education entry deleted");
  };

  const handleSave = () => {
    if (!formData.course || !formData.institution) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingId) {
      setEducations(
        educations.map((e) =>
          e.id === editingId ? { ...formData, id: editingId } : e
        )
      );
      toast.success("Education updated");
    } else {
      setEducations([
        ...educations,
        { ...formData, id: Date.now().toString() },
      ]);
      toast.success("Education added");
    }
    setModalOpen(false);
  };

  return (
    <>
      <section id="education" className="bg-card rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Education</h2>
          <Button onClick={handleAdd}>
            <Plus className="h-4 w-4 mr-2" />
            Add Education
          </Button>
        </div>

        <div className="space-y-4">
          {educations.map((edu) => (
            <div key={edu.id} className="border border-border rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{edu.course}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.startDate} - {edu.endDate} • {edu.courseType}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEdit(edu)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(edu.id)}
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
            <DialogTitle>{editingId ? "Edit" : "Add"} Education</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Course Name *</Label>
              <Input
                value={formData.course}
                onChange={(e) =>
                  setFormData({ ...formData, course: e.target.value })
                }
                placeholder="e.g., B.Com"
              />
            </div>
            <div className="space-y-2">
              <Label>Institution Name *</Label>
              <Input
                value={formData.institution}
                onChange={(e) =>
                  setFormData({ ...formData, institution: e.target.value })
                }
                placeholder="University or College name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Year</Label>
                <Input
                  value={formData.startDate}
                  onChange={(e) =>
                    setFormData({ ...formData, startDate: e.target.value })
                  }
                  placeholder="2020"
                />
              </div>
              <div className="space-y-2">
                <Label>End Year</Label>
                <Input
                  value={formData.endDate}
                  onChange={(e) =>
                    setFormData({ ...formData, endDate: e.target.value })
                  }
                  placeholder="2024"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Course Type</Label>
              <Select
                value={formData.courseType}
                onValueChange={(value) =>
                  setFormData({ ...formData, courseType: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Regular">Regular</SelectItem>
                  <SelectItem value="Correspondence">Correspondence</SelectItem>
                </SelectContent>
              </Select>
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

export default EducationSection;
