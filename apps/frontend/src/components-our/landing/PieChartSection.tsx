"use client";

import { ScorePieChart } from "./ScorePieChart";

export interface ScoreData {
  name: string;
  value: number;
  color: string;
}

const scoreData: ScoreData[] = [
  { name: "Employment History", value: 15, color: "#60A5FA" },
  { name: "HR Feedback", value: 20, color: "#3B82F6" },
  { name: "Exit Behavior", value: 15, color: "#93C5FD" },
  { name: "Red Flags & Misconduct", value: 15, color: "#1E40AF" },
  { name: "Hiring Reliability", value: 10, color: "#DBEAFE" },
  { name: "Punctuality & Discipline", value: 5, color: "#2563EB" },
  { name: "Soft Skills (Team Behavior)", value: 10, color: "#60A5FA" },
  { name: "Industry Ethics Alignment", value: 10, color: "#3B82F6" },
];

interface PieChartSectionProps {
  setHoveredSegment: (segment: string | null) => void;
  hoveredSegment: string | null;
}

export const PieChartSection = ({
  setHoveredSegment,
  hoveredSegment,
}: PieChartSectionProps) => {
  return (
    <main className="relative w-80 h-80">
      <ScorePieChart
        data={scoreData}
        onHover={setHoveredSegment}
        hoveredSegment={hoveredSegment}
      />
    </main>
  );
};
