"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { PieChartSection } from "./PieChartSection";

interface ScoreItem {
  label: string;
  percent: string;
  desc: string;
  width: string;
}

const scoreItems: ScoreItem[] = [
  {
    label: "Employment History",
    percent: "15%",
    desc: "Verifies past roles, tenure, consistency",
    width: "15%",
  },
  {
    label: "HR Feedback",
    percent: "20%",
    desc: "Structured ratings from past employers – core trust input",
    width: "20%",
  },
  {
    label: "Exit Behavior",
    percent: "15%",
    desc: "Captures notice served, smooth handover, no absconding",
    width: "15%",
  },
  {
    label: "Red Flags & Misconduct",
    percent: "15%",
    desc: "Heavy penalty for ghosting, PoSH, fraud, or ethics breach",
    width: "15%",
  },
  {
    label: "Hiring Reliability",
    percent: "10%",
    desc: "Tracks offer acceptance, joining behavior",
    width: "10%",
  },
  {
    label: "Punctuality & Discipline",
    percent: "5%",
    desc: "Measures timeliness, consistency in deliverables",
    width: "5%",
  },
  {
    label: "Soft Skills (Team Behavior)",
    percent: "10%",
    desc: "Peer collaboration, adaptability, communication",
    width: "10%",
  },
  {
    label: "Industry Ethics Alignment",
    percent: "10%",
    desc: "Integrity, compliance with workplace norms",
    width: "10%",
  },
];

const ScoreComposition = () => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  const leftColumnItems = scoreItems.slice(0, 4);
  const rightColumnItems = scoreItems.slice(4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-auto px-2 max-w-7xl mx-auto sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 bg-gray-50"
    >
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto items-center">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:text-[3.3rem] md:text-[3rem] pb-10 text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-2 text-center w-full font-semibold"
        >
          NaukriScore Composition
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-neutral-600 mt-2 lg:text-[.9rem] text-[.8rem] text-center max-w-md"
        >
          Your NaukriScore (100–1000) is composed using employment history, HR
          feedback, behavior, and ethical alignment.
        </motion.p>
      </div>
      <div className="w-full max-w-7xl mt-5 mx-auto p-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {/* Left column */}
          <motion.div
            className="space-y-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {leftColumnItems.map((item) => (
              <motion.div
                key={item.label}
                className="bg-white w-full p-4 rounded-lg h-[8.5rem] flex flex-col justify-center gap-4 items-start shadow"
                data-segment={item.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                animate={{
                  backgroundColor:
                    hoveredSegment === item.label ? "#e6f3ff" : "#ffffff",
                  scale: hoveredSegment === item.label ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredSegment(item.label)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <div className="flex justify-between w-full items-center">
                  <span className="font-semibold text-[.8rem] lg:text-[1rem] text-gray-900">
                    {item.label}
                  </span>
                  <span className="lg:text-2xl text-xl font-bold text-blue-600">
                    {item.percent}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <p className="lg:text-sm text-[.7rem] text-gray-600">
                    {item.desc}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            className="flex justify-center items-center"
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5 }}
          >
            <PieChartSection
              setHoveredSegment={setHoveredSegment}
              hoveredSegment={hoveredSegment}
            />
          </motion.div>

          {/* Right column */}
          <motion.div
            className="space-y-4"
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {rightColumnItems.map((item) => (
              <motion.div
                key={item.label}
                className="bg-white w-full p-4 rounded-lg h-[8.5rem] flex flex-col justify-center gap-4 items-start shadow"
                data-segment={item.label}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                animate={{
                  backgroundColor:
                    hoveredSegment === item.label ? "#e6f3ff" : "#ffffff",
                  scale: hoveredSegment === item.label ? 1.05 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onMouseEnter={() => setHoveredSegment(item.label)}
                onMouseLeave={() => setHoveredSegment(null)}
              >
                <div className="flex justify-between w-full items-center">
                  <span className="font-semibold text-[.8rem] lg:text-[1rem] text-gray-900">
                    {item.label}
                  </span>
                  <span className="lg:text-2xl text-xl font-bold text-blue-600">
                    {item.percent}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center gap-3">
                  <p className="lg:text-sm text-[.7rem] text-gray-600">
                    {item.desc}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScoreComposition;
