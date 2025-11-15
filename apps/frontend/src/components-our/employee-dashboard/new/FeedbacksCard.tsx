import { MessageSquare, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Feedback {
  id: string;
  employerName: string;
  company: string;
  date: string;
  score: number;
  status: "positive" | "negative";
  messages: string[];
  rating: number;
}

export const FeedbacksCard = () => {
  const feedbacks: Feedback[] = [
    {
      id: "F001",
      employerName: "Rajesh Kumar",
      company: "Tech Solutions Inc.",
      date: "2025-10-20",
      score: 450,
      status: "positive",
      messages: [
        "Excellent communication skills",
        "Delivered project ahead of schedule",
        "Great team player",
      ],
      rating: 5,
    },
    {
      id: "F002",
      employerName: "Priya Sharma",
      company: "Digital Innovations",
      date: "2025-10-18",
      score: 380,
      status: "positive",
      messages: ["Strong technical abilities", "Quick learner"],
      rating: 4,
    },
    {
      id: "F003",
      employerName: "Amit Patel",
      company: "Software Systems Ltd.",
      date: "2025-10-15",
      score: 200,
      status: "negative",
      messages: [
        "Needs improvement in time management",
        "Communication could be better",
      ],
      rating: 2,
    },
  ];

  return (
    <Card className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2">
        <MessageSquare className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Feedbacks
        </h2>
      </div>

      {/* Scrollable Feedbacks */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="flex-shrink-0 w-80 p-4 rounded-xl border border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-white transition-all duration-300"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {feedback.employerName}
                </h3>
                <p className="text-sm text-gray-500">{feedback.company}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(feedback.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
              <Badge
                className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  feedback.status === "positive"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {feedback.score}
              </Badge>
            </div>

            {/* Messages */}
            <div className="space-y-2 mb-3">
              {feedback.messages.map((message, idx) => (
                <p
                  key={idx}
                  className="text-sm text-gray-700 pl-3 border-l-2 border-gray-300"
                >
                  {message}
                </p>
              ))}
            </div>

            {/* Rating & Action */}
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className={`h-4 w-4 ${
                      idx < feedback.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {feedback.status === "negative" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                >
                  Raise Dispute
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
