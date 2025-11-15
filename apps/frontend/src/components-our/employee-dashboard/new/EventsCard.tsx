import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Event {
  eventId: string;
  title: string;
  date: string;
  location: string;
  description: string;
}

export const EventsCard = () => {
  const events: Event[] = [
    {
      eventId: "E101",
      title: "Annual Career Fair 2025",
      date: "2025-12-12",
      location: "Bangalore, India",
      description:
        "Meet top employers and recruiters to explore new job opportunities.",
    },
    {
      eventId: "E102",
      title: "Tech Conference 2025",
      date: "2025-11-20",
      location: "Mumbai, India",
      description:
        "Learn about the latest trends in technology and network with industry leaders.",
    },
    {
      eventId: "E103",
      title: "Startup Networking Event",
      date: "2025-11-05",
      location: "Delhi, India",
      description:
        "Connect with innovative startups and explore exciting career possibilities.",
    },
    {
      eventId: "E104",
      title: "Developer Meetup",
      date: "2025-10-28",
      location: "Pune, India",
      description:
        "Join fellow developers for technical discussions and knowledge sharing.",
    },
  ];

  return (
    <Card className="p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
      </div>

      {/* Horizontal Scroll List */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
        {events.map((event) => (
          <div
            key={event.eventId}
            className="flex-shrink-0 w-72 p-3 rounded-xl border border-gray-200 hover:border-blue-400/50 hover:shadow-md transition-all duration-200 bg-gray-50 cursor-pointer"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
              {event.title}
            </h3>

            <div className="space-y-1 mb-2">
              <p className="text-xs text-blue-600">
                {new Date(event.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-xs text-gray-500">{event.location}</p>
            </div>

            <p className="text-sm text-gray-700 line-clamp-3">
              {event.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
};
