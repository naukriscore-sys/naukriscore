import Image from "next/image";
import { FaRegClock } from "react-icons/fa6";

interface CourseCardProps {
  title: string;
  duration: string;
  points: number;
  imgSrc: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  duration,
  points,
  imgSrc,
}) => {
  return (
    <div className="flex flex-col items-center justify-between p-3 bg-white rounded-lg shadow-md w-full border border-neutral-300">
      <div className="relative w-full h-[120px] rounded-md overflow-hidden">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-sm text-left w-full font-semibold mt-2 text-gray-800">
        {title}
      </h3>
      <div className="w-full flex justify-between items-center mt-4 font-medium">
        <div className="flex items-center text-xs text-gray-600">
          <span className="mr-1">
            <FaRegClock size={15} />
          </span>{" "}
          {duration}
        </div>
        <div className="text-xs text-green-600">+{points} pts</div>
      </div>
    </div>
  );
};

export default CourseCard;
