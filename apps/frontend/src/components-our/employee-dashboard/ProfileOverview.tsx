import Link from "next/link";
import React from "react";
import { PercentageGuage } from "./ScoreBadge";
import { MdInfo, MdTrendingUp } from "react-icons/md";
import NaukriScoreCard from "./NaukriScoreCard";

const ProfileOverview = () => {
  const score = 690;

  return (
    <div className="w-full p-4 flex justify-between items-center bg-[#4A90E2] rounded-md">
      {/* Left Section */}
      <NaukriScoreCard score={score} />

      {/* Right Section (Untouched) */}
      <div className="flex flex-col justify-center items-center">
        <PercentageGuage score={score} />
        <div className="flex justify-center items-center gap-3 text-xs mt-2">
          <Link
            href="/overview"
            className="flex items-center gap-1 bg-white text-blue-600 font-semibold py-2 px-4 rounded-md hover:bg-blue-100"
          >
            <MdInfo size={16} /> Score Overview
          </Link>
          <Link
            href="#"
            className="flex items-center gap-1 bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600"
          >
            <MdTrendingUp size={16} /> Improve Your Score
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
