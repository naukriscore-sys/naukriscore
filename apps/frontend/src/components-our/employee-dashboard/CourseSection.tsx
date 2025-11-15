import Link from "next/link";
import CourseCard from "./CourseCard";
const courses = [
  {
    title: "Python for Data Science",
    duration: "8 hours",
    points: 30,
    imgSrc:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
  {
    title: "Cloud Computing",
    duration: "10 hours",
    points: 35,
    imgSrc:
      "https://images.pexels.com/photos/29327961/pexels-photo-29327961.jpeg",
  },
  {
    title: "Python for Data Science",
    duration: "8 hours",
    points: 30,
    imgSrc:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
  },
  {
    title: "Cloud Computing",
    duration: "10 hours",
    points: 35,
    imgSrc:
      "https://images.pexels.com/photos/29327961/pexels-photo-29327961.jpeg",
  },
];

const CourseSection = () => {
  return (
    <div className="bg-white p-3 rounded-lg w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-base font-semibold">Recommended Courses</h2>
        <Link
          href={"#"}
          className="text-[#2563EB] text-[.7rem] font-semibold hover:opacity-95 hover:underline"
        >
          View All
        </Link>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            duration={course.duration}
            points={course.points}
            imgSrc={course.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
