"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import Link from "next/link";
import ScoreGuage from "./ScoreGuage";
import Counter from "./Counter";

interface bannerItemsProps {
  percentage: string;
  label: string;
}

const bannerItems: bannerItemsProps[] = [
  {
    percentage: "50k+",
    label: "verified profiles",
  },
  {
    percentage: "1000+",
    label: "Partner Companies",
  },
  {
    percentage: "95%",
    label: "Hiring Accuracy",
  },
  {
    percentage: "70%",
    label: "Time saved",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Hero = () => {
  return (
    <motion.main
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gray-50 px-2 sm:px-4 md:px-10 lg:px-20 h-auto flex flex-col items-center justify-start lg:gap-14 gap-8 w-full pt-7 pb-14"
    >
      <section className="w-full px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.article
          className="flex flex-col justify-center lg:items-start items-center w-full"
          variants={itemVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="text-black lg:text-[3.2rem] lg:leading-[3.8rem] md:text-5xl md:leading-[3.3rem] text-4xl leading-[2.55rem] font-medium lg:text-left text-center"
          >
            The Future of
            <br />
            <span className="text-[var(--primary-cards-color)] font-semibold">HR TRANSPARENCY</span>
            <br />& Employee Records
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-neutral-600 mt-3 lg:w-full md:w-1/2 w-full lg:text-[.85rem] text-[.75rem] lg:text-left text-center"
          >
            Revolutionizing recruitment with transparent employee scoring,
            verified work history, and data-driven hiring decisions that benefit
            both employers and job seekers
          </motion.p>

          <motion.article
            variants={itemVariants}
            className="flex lg:justify-start justify-center mt-6 items-center w-full gap-4 lg:text-[.85rem] text-[.75rem]"
          >
            <Link
              href={"/register/employer"}
              className="border font-medium rounded-md border-[var(--primary-cards-color)] py-[.7rem] lg:px-8 px-4 capitalize text-[var(--primary-cards-color)] whitespace-nowrap hover:bg-[var(--primary-cards-color)] hover:text-white cursor-pointer transition-all duration-300"
            >
              I’m an Employer
            </Link>
            <Link
              href={"/register/employee"}
              className="border font-medium rounded-md border-green-500 py-[.7rem] lg:px-8 px-4 capitalize hover:text-green-500 whitespace-nowrap hover:bg-white bg-green-500 text-white cursor-pointer transition-all duration-300"
            >
              I’m an Employee
            </Link>
          </motion.article>
        </motion.article>

        <motion.article
          variants={itemVariants}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full hidden justify-center items-center lg:flex"
        >
          <ScoreGuage score={800} />
          {/* working on the below one */}
          {/* <NaukriScoreGauge /> */}

          {/* <ScoreMeter />
          <AnimatedScoreGauge />
          <NaukriMeter /> */}
        </motion.article>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full md:p-5 p-3 border-2 border-[var(--primary-cards-color)] shadow-md rounded-md flex justify-evenly items-center gap-4 md:gap-0"
      >
        {bannerItems.map((item) => (
          <motion.article
            key={item.label}
            variants={itemVariants}
            className="flex flex-col justify-center items-center text-[var(--primary-cards-color)]"
          >
            <p className="font-semibold md:text-xl text-[1rem]">
              <Counter endValue={item.percentage} />
            </p>
            <p className="capitalize md:text-[.9rem] text-[.7rem] text-center">
              {item.label}
            </p>
          </motion.article>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default Hero;
