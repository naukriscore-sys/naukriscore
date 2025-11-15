"use client";

import {
  MdVerifiedUser,
  MdError,
  MdWarning,
  MdCheckCircle,
} from "react-icons/md";
import dynamic from "next/dynamic";
const GaugeComponent = dynamic(() => import("react-gauge-component"));

const segments = [
  { label: "High Risk", range: [300, 579], color: "#FF4D4D", icon: MdError },
  {
    label: "Low Reliability",
    range: [580, 669],
    color: "#FF9533",
    icon: MdWarning,
  },
  {
    label: "Moderately Reliable",
    range: [670, 739],
    color: "#FFD91A",
    icon: MdWarning,
  },
  {
    label: "Reliable",
    range: [740, 799],
    color: "#9AE443",
    icon: MdVerifiedUser,
  },
  {
    label: "Highly Reliable",
    range: [800, 850],
    color: "#02BD53",
    icon: MdCheckCircle,
  },
];

const ScoreBadge = ({ score }: { score: number | undefined }) => {
  if (score === undefined) return null;

  const segment = segments.find(
    (s) => score >= s.range[0] && score <= s.range[1]
  );

  if (!segment) return null;

  const IconComponent = segment.icon;

  return (
    <div
      className={`flex text-white justify-center items-center gap-1 font-semibold text-[.75rem] rounded-md mt-2`}
      // style={{
      //   // backgroundColor: `${segment.color}20`, // light background
      //   color: segment.color, // text/icon color
      // }}
    >
      <IconComponent size={18} />
      <p>{segment.label}</p>
    </div>
  );
};

const PercentageGuage = ({ score }: { score: number | undefined }) => {
  // Convert score to percentage
  const toPercentage = (score: number) =>
    Math.round(((score - 100) / (1000 - 100)) * 100);

  // Map segments to subArcs
  const subArcs = segments.map((segment) => ({
    limit: toPercentage(segment.range[1]), // upper bound of segment
    color: segment.color,
    // showTick: true,
  }));
  return (
    <GaugeComponent
      className="random"
      style={{}}
      arc={{ subArcs }}
      value={score ? toPercentage(score) : 0}
    />
  );
};

export { ScoreBadge, PercentageGuage };
