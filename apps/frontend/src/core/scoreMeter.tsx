"use client";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const ScoreMeter = ({
  value,
  showStats,
}: {
  value: number;
  showStats: boolean;
}) => {
  const max = 1000;

  const getColor = (v: number) => {
    if (v <= 200) return "#fe4e4c";
    if (v <= 400) return "#ff9534";
    if (v <= 600) return "#f8cf00";
    if (v <= 800) return "#8ee326";
    if (v <= 1000) return "#00bd53";
  };

  return (
    <div className="h-full mx-auto flex flex-col justify-center items-center">
      <div className="w-36 h-36">
        <CircularProgressbarWithChildren
          value={value}
          maxValue={max}
          strokeWidth={6}
          styles={buildStyles({
            pathColor: getColor(value),
            trailColor: "#f1f5f9",
            strokeLinecap: "round",
          })}
        >
          <div className="flex flex-col items-center mt-1">
            <p className="text-2xl font-semibold text-gray-800">{value} pts</p>
            <p className="text-xs text-gray-400">0 - {max}</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {showStats && (
        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm tracking-wide">Your Score</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
      )}
    </div>
  );
};
