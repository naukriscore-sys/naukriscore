"use client";

import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";
import { motion } from "motion/react";
import { ScoreData } from "./PieChartSection";

interface ScorePieChartProps {
  data: ScoreData[];
  onHover: (segment: string | null) => void;
  hoveredSegment: string | null;
}

export const ScorePieChart = ({
  data,
  onHover,
  hoveredSegment,
}: ScorePieChartProps) => {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <main className="relative w-80 h-80 mx-auto">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data as any}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={2}
            dataKey="value"
            onMouseEnter={(_, index) => onHover(data[index].name)}
            onMouseLeave={() => onHover(null)}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                onMouseEnter={() => onHover(entry.name)}
                onMouseLeave={() => onHover(null)}
                stroke={hoveredSegment === entry.name ? "#222" : undefined}
                strokeWidth={hoveredSegment === entry.name ? 3 : 1}
                style={{
                  filter:
                    hoveredSegment === entry.name ? "brightness(1.2)" : "none",
                  transition: "filter 0.3s, stroke-width 0.3s",
                }}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <section className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="text-3xl font-bold text-gray-800">{totalValue}%</div>
          <div className="text-sm text-gray-600">Score</div>
        </motion.div>
      </section>
    </main>
  );
};
