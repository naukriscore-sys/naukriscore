"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "motion/react";

const forEmployees: string[] = [
  "Build a verifiable professional reputation that grows with your career.",
  "Control who sees your employment history with consent-first access.",
  "Protect your integrity with dispute resolution and score recovery.",
  "Get recognized for ethical behavior, punctuality, and commitment.",
  "Improve your score with certifications and verified performance.",
  "Stand out with a portable trust profile beyond resumes.",
];

const forEmployers: string[] = [
  "Hire with confidence using verified employment scores (100–1000).",
  "Detect red flags early, including ghosting and misconduct.",
  "Reduce hiring cycles and improve candidate quality and retention.",
  "Access standardized behavioral data across industries and roles.",
  "Build an accountable, ethical, and professional workforce.",
  "Integrate seamlessly via API or dashboard for all business sizes.",
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Delivers = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="h-auto px-2 sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 bg-blue-50 flex justify-start lg:gap-14 gap-4 items-center flex-col w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-5">
        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="lg:text-[3.3rem] md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-2 text-center w-full font-semibold mb-10"
        >
          What NaukriScore Delivers
        </motion.h1>

        {/* Content */}
        <motion.section
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto flex lg:flex-row flex-col justify-center items-center lg:gap-36 gap-10"
        >
          {/* For Employees */}
          <motion.article
            variants={itemVariants}
            className="flex flex-col justify-start gap-5"
          >
            <Image
              src={"/employee.svg"}
              height={100}
              width={350}
              alt="employee"
              className="self-center"
            />
            <h4 className="lg:text-[1.6rem] text-[1.3rem] font-medium text-gray-900 mt-2">
              For Employees
            </h4>
            <ul className="list-disc pl-5">
              {forEmployees.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="pb-1 lg:text-[.9rem] text-neutral-700 text-[.8rem]"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.article>

          {/* For Employers */}
          <motion.article
            variants={itemVariants}
            className="flex flex-col justify-center gap-5"
          >
            <Image
              src={"/employer.svg"}
              height={100}
              width={300}
              alt="employer"
              className="self-center"
            />
            <h4 className="lg:text-[1.6rem] text-[1.3rem] font-medium text-gray-900 mt-2">
              For Employers
            </h4>
            <ul className="list-disc pl-5">
              {forEmployers.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="pb-1 lg:text-[.9rem] text-[.8rem] text-neutral-700"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.article>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Delivers;
