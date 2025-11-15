"use client";

import { useEffect, useRef } from "react";

interface ScoreMeterProps {
  score: number;
}

const ScoreMeter = ({ score }: ScoreMeterProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getScoreColor = (score: number) => {
    if (score < 200) return "#ef4444"; // High Risk - Red
    if (score < 400) return "#f97316"; // Low Reliability - Orange
    if (score < 600) return "#eab308"; // Moderate Reliability - Yellow
    if (score < 800) return "#22c55e"; // Reliable - Light Green
    return "#16a34a"; // Highly Reliable - Green
  };

  const getScoreLabel = (score: number) => {
    if (score < 200) return "High Risk";
    if (score < 400) return "Low Reliability";
    if (score < 600) return "Moderate Reliability";
    if (score < 800) return "Reliable";
    return "Highly Reliable";
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height - 20;
    const radius = Math.min(width, height) - 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw background arc
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI, false);
    ctx.strokeStyle = "#e5e7eb";
    ctx.lineWidth = 20;
    ctx.stroke();

    // Draw colored segments
    const segments = [
      { start: 0, end: 0.2, color: "#ef4444" },
      { start: 0.2, end: 0.4, color: "#f97316" },
      { start: 0.4, end: 0.6, color: "#eab308" },
      { start: 0.6, end: 0.8, color: "#22c55e" },
      { start: 0.8, end: 1, color: "#16a34a" },
    ];

    segments.forEach((segment) => {
      const startAngle = Math.PI + segment.start * Math.PI;
      const endAngle = Math.PI + segment.end * Math.PI;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
      ctx.strokeStyle = segment.color;
      ctx.lineWidth = 20;
      ctx.stroke();
    });

    // Draw needle
    const normalizedScore = Math.min(Math.max(score, 0), 1000) / 1000;
    const needleAngle = Math.PI + normalizedScore * Math.PI;

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(needleAngle);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(radius - 15, 0);
    ctx.strokeStyle = "#1f2937";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#1f2937";
    ctx.fill();

    ctx.restore();
  }, [score]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={300}
          height={200}
          className="w-full max-w-[300px]"
        />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div className="text-4xl font-bold text-foreground">{score}</div>
          <div
            className="text-sm font-medium"
            style={{ color: getScoreColor(score) }}
          >
            {getScoreLabel(score)}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs w-full max-w-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-score-high-risk" />
          <span>0-200: High Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-score-low-reliability" />
          <span>200-400: Low</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-score-moderate" />
          <span>400-600: Moderate</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-score-reliable" />
          <span>600-800: Reliable</span>
        </div>
        <div className="flex items-center gap-2 col-span-2 justify-center">
          <div className="w-3 h-3 rounded-full bg-score-highly-reliable" />
          <span>800-1000: Highly Reliable</span>
        </div>
      </div>
    </div>
  );
};

export default ScoreMeter;
