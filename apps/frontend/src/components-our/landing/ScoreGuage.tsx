"use client";

import { useEffect, useState } from "react";

interface ScoreGuageProps {
  score: number;
  size?: number;
}

export const getScoreColor = (score: number): string => {
  if (score >= 801) return "#22C55E"; // Green
  if (score >= 701) return "#00C951"; // Light Green
  if (score >= 601) return "#F97316"; // Orange
  if (score >= 501) return "#EAB308"; // Yellow
  return "#EF4444"; // Red
};

const ScoreGuage = ({ score, size = 400 }: ScoreGuageProps) => {
  const [currentScore, setCurrentScore] = useState(300);
  const [activeSegment, setActiveSegment] = useState("POOR");

  const segments = [
    {
      label: "High Risk",
      range: [300, 579],
      color: "#FF4D4D", // Red
      startAngle: 0,
      endAngle: 36,
    },
    {
      label: "Low Reliability",
      range: [580, 669],
      color: "#FF9533", // Yellow
      startAngle: 36,
      endAngle: 72,
    },
    {
      label: "Moderately Reliability",
      range: [670, 739],
      color: "#FFD91A", // Orange
      startAngle: 72,
      endAngle: 108,
    },
    {
      label: "Reliable",
      range: [740, 799],
      color: "#9AE443", // Light Green
      startAngle: 108,
      endAngle: 144,
    },
    {
      label: "Highly Reliable",
      range: [800, 850],
      color: "#02BD53", // Green
      startAngle: 144,
      endAngle: 180,
    },
  ];

  const scoreToAngle = (scoreValue: number) =>
    ((scoreValue - 300) / (850 - 300)) * 180;

  const getCurrentSegment = (scoreValue: number) =>
    segments.find((s) => scoreValue >= s.range[0] && scoreValue <= s.range[1])
      ?.label || "POOR";

  useEffect(() => {
    setCurrentScore(300);
    setActiveSegment("POOR");

    const duration = 1500;
    const steps = 60;
    const increment = (score - 300) / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const newScore = 300 + increment * currentStep;

      setCurrentScore(newScore);
      setActiveSegment(getCurrentSegment(newScore));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCurrentScore(score);
        setActiveSegment(getCurrentSegment(score));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [score]);

  // Base dimensions for the SVG viewBox (default size)
  const baseViewBoxWidth = 400;
  const baseViewBoxHeight = 220;

  // Scale factor based on the size prop (default size is 400px)
  const scaleFactor = size / baseViewBoxWidth;

  // Scaled dimensions
  const viewBoxWidth = baseViewBoxWidth;
  const viewBoxHeight = baseViewBoxHeight;

  const centerX = viewBoxWidth / 2;
  const centerY = viewBoxHeight;
  const radius = viewBoxWidth * 0.4 * scaleFactor;
  const needleLength = radius * 0.8;

  // Create rectangular segment path with gaps and rounded corners
  const createRectangularSegmentPath = (
    startAngle: number,
    endAngle: number,
    innerRadius: number,
    outerRadius: number
  ) => {
    // Add gaps between segments (2 degrees on each side)
    const gapSize = 1.5;
    const adjustedStartAngle = startAngle + gapSize;
    const adjustedEndAngle = endAngle - gapSize;

    const startRad = (adjustedStartAngle * Math.PI) / 180;
    const endRad = (adjustedEndAngle * Math.PI) / 180;

    // Make segments thinner by adjusting the radius range
    const segmentThickness = (outerRadius - innerRadius) * 0.7; // Make 30% thinner
    const adjustedInnerRadius =
      innerRadius + (outerRadius - innerRadius - segmentThickness) / 2;
    const adjustedOuterRadius = adjustedInnerRadius + segmentThickness;

    // Calculate corner points for rectangular segments
    const innerStartX =
      centerX + adjustedInnerRadius * Math.cos(Math.PI - startRad);
    const innerStartY =
      centerY - adjustedInnerRadius * Math.sin(Math.PI - startRad);
    const outerStartX =
      centerX + adjustedOuterRadius * Math.cos(Math.PI - startRad);
    const outerStartY =
      centerY - adjustedOuterRadius * Math.sin(Math.PI - startRad);

    const innerEndX =
      centerX + adjustedInnerRadius * Math.cos(Math.PI - endRad);
    const innerEndY =
      centerY - adjustedInnerRadius * Math.sin(Math.PI - endRad);
    const outerEndX =
      centerX + adjustedOuterRadius * Math.cos(Math.PI - endRad);
    const outerEndY =
      centerY - adjustedOuterRadius * Math.sin(Math.PI - endRad);

    return `M ${innerStartX} ${innerStartY} 
            L ${outerStartX} ${outerStartY} 
            L ${outerEndX} ${outerEndY} 
            L ${innerEndX} ${innerEndY} 
            Z`;
  };

  return (
    <main className="flex flex-col items-center justify-start w-full max-w-[450px] mx-auto">
      <section className="w-full flex justify-start items-start scale-[.95] mt-[-14px]">
        <svg
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          className="h-[280px]"
        >
          {segments.map((segment) => (
            <path
              key={segment.label}
              d={createRectangularSegmentPath(
                segment.startAngle,
                segment.endAngle,
                radius * 0.7,
                radius
              )}
              fill={segment.color}
              stroke="white"
              strokeWidth="1"
              strokeLinejoin="round"
              strokeLinecap="round"
              className={`transition-all rounded-full duration-300 ${activeSegment === segment.label ? "drop-shadow-lg" : ""}`}
              style={{
                filter:
                  activeSegment === segment.label
                    ? `drop-shadow(0 6px 12px ${segment.color}80)`
                    : "none",
              }}
            />
          ))}
          {segments.map((segment) => {
            const mid = (segment.startAngle + segment.endAngle) / 2;
            const labelR = radius * 1.05; // Reduced gap - moved closer to segments
            const angle = Math.PI - (mid * Math.PI) / 180;
            const x = centerX + labelR * Math.cos(angle);
            const y = centerY - labelR * Math.sin(angle);
            return (
              <text
                key={segment.label}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-[9px] font-medium transition-all duration-300 ${
                  activeSegment === segment.label
                    ? "fill-gray-800"
                    : "fill-gray-400"
                }`}
                transform={`rotate(${mid - 90} ${x} ${y})`}
              >
                {segment.label}
              </text>
            );
          })}

          <g
            className="transition-transform duration-[20ms]"
            transform={`rotate(${scoreToAngle(currentScore)} ${centerX} ${centerY})`}
          >
            <line
              x1={centerX}
              y1={centerY}
              x2={centerX - needleLength}
              y2={centerY}
              stroke="#1E293B"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r="8"
              fill="#1E293B"
              stroke="white"
              strokeWidth="2"
            />
          </g>
        </svg>
      </section>

      <section className="text-center scale-[.8] mt-[-14px]">
        <article className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1">
          {Math.round(currentScore)}/{" "}
          <span className="text-neutral-700 text-xl">1000</span>
        </article>
        <article className="text-xs sm:text-sm md:text-base text-gray-600 uppercase mb-2 tracking-wider font-semibold">
          NAUKRI SCORE
        </article>
      </section>
    </main>
  );
};

export default ScoreGuage;
