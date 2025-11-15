import { Scale } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Dispute {
  id: string;
  employerName: string;
  company: string;
  date: string;
  message: string;
  status: "pending" | "resolved" | "rejected";
}

export const DisputesCard = () => {
  const disputes: Dispute[] = [
    {
      id: "D001",
      employerName: "Amit Patel",
      company: "Software Systems Ltd.",
      date: "2025-10-16",
      message:
        "The feedback regarding time management was unfair. I completed all tasks within the agreed timeline and even delivered two features ahead of schedule.",
      status: "pending",
    },
    {
      id: "D002",
      employerName: "Neha Gupta",
      company: "Web Developers Co.",
      date: "2025-10-10",
      message:
        "The project requirements were changed multiple times without proper documentation. This affected the delivery timeline.",
      status: "resolved",
    },
    {
      id: "D003",
      employerName: "Vikram Singh",
      company: "Mobile Apps Inc.",
      date: "2025-10-05",
      message:
        "The negative rating was based on incomplete information and does not reflect my actual performance.",
      status: "rejected",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "resolved":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <Card className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Scale className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Recent Disputes</h2>
      </div>

      {/* Scrollable Disputes */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
        {disputes.map((dispute) => (
          <div
            key={dispute.id}
            className="flex-shrink-0 w-80 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-white transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {dispute.employerName}
                </h3>
                <p className="text-sm text-gray-500">{dispute.company}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(dispute.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>

              <Badge
                className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                  dispute.status
                )}`}
              >
                {dispute.status.charAt(0).toUpperCase() +
                  dispute.status.slice(1)}
              </Badge>
            </div>

            <p className="text-sm text-gray-700 line-clamp-3">
              {dispute.message}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
