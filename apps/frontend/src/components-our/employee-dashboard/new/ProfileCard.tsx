"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

interface ScoreUpdate {
  reason: string;
  change: number;
  isPositive: boolean;
}

export const ProfileCard = () => {
  const profileCompletion = 82;
  const lastUpdated = "2h ago";
  const userData = useAppSelector((state) => state.userData);

  const scoreUpdates: ScoreUpdate[] = [
    { reason: "Completed skill assessment", change: 230, isPositive: true },
    { reason: "Received positive feedback", change: 150, isPositive: true },
    { reason: "Missed deadline on project", change: 50, isPositive: false },
  ];

  return (
    <Card className="p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 animate-fade-up">
      {/* Profile Header with Circular Progress */}
      <div className="flex flex-col items-center text-center mb-4">
        <div className="relative w-28 h-28 mb-3">
          {/* Circular Progress Ring */}
          <svg
            className="absolute inset-0 transform -rotate-90 w-full h-full"
            viewBox="0 0 100 100"
          >
            {/* Background Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e5e7eb" // light gray
              strokeWidth="5"
              fill="transparent"
            />
            {/* Progress Circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#2563eb" // blue-600
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={
                2 * Math.PI * 45 * (1 - profileCompletion / 100)
              }
              className="transition-all duration-1000"
              strokeLinecap="round"
            />
          </svg>

          {/* Profile Avatar */}
          <div className="absolute inset-2 rounded-full overflow-hidden border border-white z-10 flex justify-center items-center shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
              alt="Employee"
              className="object-cover w-[95%] h-[95%] rounded-full"
            />
          </div>

          {/* Percentage Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-2 py-[2px] rounded-full text-[10px] font-semibold shadow-sm">
            {profileCompletion}%
          </div>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-[2px]">
          {userData?.name || "N/A"}
        </h2>
        <p className="text-xs text-gray-600 mb-[1px]">
          B.Tech Computer Science
        </p>
        <p className="text-xs text-gray-600">IIT Delhi</p>
        <p className="text-[10px] text-gray-500 mt-1">
          Last updated {lastUpdated}
        </p>

        <Link
          href={"/score-overview"}
          className={`w-full mt-3 p-2 text-xs font-medium rounded-md bg-[var(--primary-cards-color)] text-white hover:opacity-90`}
        >
          Score Overview
        </Link>
      </div>

      {/* Score Updates */}
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-gray-800 mb-2">
          Your Latest Score Updates
        </h3>
        <div className="space-y-2">
          {scoreUpdates.map((update, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center gap-1.5 flex-1">
                {update.isPositive ? (
                  <TrendingUp className="h-3.5 w-3.5 text-green-600 flex-shrink-0" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-red-500 flex-shrink-0" />
                )}
                <span className="text-xs text-gray-800 leading-tight">
                  {update.reason}
                </span>
              </div>
              <span
                className={`text-xs font-semibold ml-2 flex-shrink-0 ${
                  update.isPositive ? "text-green-600" : "text-red-500"
                }`}
              >
                {update.isPositive ? "+" : "-"}
                {update.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
