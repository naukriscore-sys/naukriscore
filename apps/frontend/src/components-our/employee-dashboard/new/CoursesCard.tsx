import { BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Course {
  id: string;
  title: string;
  duration: string;
  points: number;
  thumbnail: string;
}

export const CoursesCard = () => {
  const courses: Course[] = [
    {
      id: "C001",
      title: "Advanced React Patterns",
      duration: "6 weeks",
      points: 30,
      thumbnail: "https://azagatti.dev/img/react-advanced-patterns.jpeg",
    },
    {
      id: "C002",
      title: "System Design Fundamentals",
      duration: "8 weeks",
      points: 50,
      thumbnail:
        "https://cdn.hashnode.com/res/hashnode/image/upload/v1721918626724/720abc1b-4573-4264-b2c0-ef79b1ca3d8e.png",
    },
    {
      id: "C003",
      title: "TypeScript Masterclass",
      duration: "4 weeks",
      points: 25,
      thumbnail:
        "https://uploads.teachablecdn.com/attachments/wT9rGwpQw2letGg9oJvy_next-13-masterclass-cover-with-strip.png",
    },
    {
      id: "C004",
      title: "Cloud Architecture with AWS",
      duration: "10 weeks",
      points: 60,
      thumbnail:
        "https://docs.aws.amazon.com/images/solutions/latest/data-transfer-hub/images/guidance-arch.png",
    },
  ];

  return (
    <Card className="p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-semibold text-gray-800">
          Recommended Courses
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex-shrink-0 w-80 flex gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-500/50 hover:shadow-md transition-all duration-200 bg-gray-50 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-lg bg-blue-100 flex-shrink-0 overflow-hidden">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm mb-1 truncate">
                {course.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{course.duration}</p>
              <Badge
                variant="secondary"
                className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-200"
              >
                +{course.points} points
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
