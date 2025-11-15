import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Opportunity {
  id: string;
  title: string;
  company: string;
  description: string;
}

export const OpportunitiesCard = () => {
  const opportunities: Opportunity[] = [
    {
      id: "O001",
      title: "Senior Frontend Developer",
      company: "Tech Innovations Ltd.",
      description:
        "Looking for an experienced React developer with 3+ years of experience in building scalable web applications.",
    },
    {
      id: "O002",
      title: "Full Stack Engineer",
      company: "Digital Solutions Inc.",
      description:
        "Join our growing team to work on cutting-edge projects using modern tech stack including React, Node.js, and AWS.",
    },
    {
      id: "O003",
      title: "UI/UX Developer",
      company: "Creative Designs Co.",
      description:
        "We're seeking a creative developer who can bridge the gap between design and implementation.",
    },
    {
      id: "O004",
      title: "Backend Developer",
      company: "Cloud Systems Ltd.",
      description:
        "Build robust APIs and microservices using Python and modern cloud infrastructure.",
    },
  ];

  return (
    <Card className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Opportunities
        </h2>
      </div>

      {/* Horizontal Scroll List */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="flex-shrink-0 w-72 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-semibold text-gray-900 mb-1">
              {opportunity.title}
            </h3>
            <p className="text-sm text-blue-600 mb-2 font-medium">
              {opportunity.company}
            </p>
            <p className="text-sm text-gray-600 line-clamp-2">
              {opportunity.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
