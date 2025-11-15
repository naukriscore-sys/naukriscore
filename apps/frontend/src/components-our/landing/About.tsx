"use client";

import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { motion, Variants } from "motion/react";
import Counter from "./Counter";

interface AboutUsProps {
  label: string;
  desc: string;
  icon: React.ReactElement;
  color: string;
  bg: string;
}

const aboutUsItems: AboutUsProps[] = [
  {
    label: "Verified Employment History",
    desc: "100% verified work records, tenure, and HR feedback — sourced from trusted employers via consent.",
    icon: <MdAccessTime size={25} />,
    color: "text-green-600",
    bg: "bg-green-200",
  },
  {
    label: "Transparent Scoring System",
    desc: `Real-time scores based on ethics, performance, and professionalism — designed to reward consistency and trustworthiness.`,
    icon: <IoNewspaperOutline size={25} />,
    color: "text-[var(--primary-cards-color)]",
    bg: "bg-blue-200",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <motion.main
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="h-auto px-2 sm:px-4 md:px-10 lg:px-20 flex flex-col justify-center items-center lg:py-16 py-10 w-full max-w-7xl mx-auto"
    >
      <motion.p
        variants={itemVariants}
        className="flex justify-center items-center gap-2 lg:py-3 py-2 lg:px-6 px-4 rounded-full font-medium bg-blue-100 text-[var(--primary-cards-color)] lg:text-[.8rem] text-[.7rem]"
      >
        <HiLightBulb size={20} />
        <span className="inline-block">About NaukriScore</span>
      </motion.p>

      <motion.h1
        variants={itemVariants}
        className="lg:text-[3.3rem] md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-6 text-center font-semibold w-full"
      >
        Transforming The Way <br />
        <span className="text-[var(--primary-cards-color)]">India Hires and Get Hired</span>
      </motion.h1>

      <section className="grid w-full max-w-7xl mx-auto lg:grid-cols-2 grid-cols-1 md:place-items-center place-content-start mt-8 lg:mt-16 gap-10">
        <motion.article
          variants={itemVariants}
          className="flex flex-col justify-center items-start"
        >
          <h4 className="lg:text-xl text-[1.2rem] font-semibold">
            Bridging the Gap Between Talent and Opportunity
          </h4>
          <p className="text-neutral-600 mt-2 lg:text-[.9rem] text-[.8rem] lg:w-[80%] w-full">
            NaukriScore is redefining recruitment with India’s first
            Aadhaar-based employment scoring system. <br /> We bring unmatched
            transparency to the hiring process by blending verified HR feedback
            with real-time behavioral scoring — creating a trusted, data-driven
            ecosystem for both employers and professionals.
          </p>
          <motion.article
            variants={containerVariants}
            className="mt-8 flex flex-col justify-center items-start w-full gap-5"
          >
            {aboutUsItems.map((item) => (
              <motion.article
                key={item.label}
                variants={itemVariants}
                className="flex justify-center items-start gap-4 w-full"
              >
                <p
                  className={`p-2 rounded-md ${item.color} ${item.bg} flex justify-start items-center`}
                >
                  {item.icon}
                </p>
                <section className="flex w-full flex-col justify-center items-start">
                  <h5 className="lg:text-[1.15rem] text-[.9rem] font-semibold">
                    {item.label}
                  </h5>
                  <p className="text-neutral-600 lg:text-[.85rem] text-[.7rem] lg:w-[80%] w-full mt-1">
                    {item.desc}
                  </p>
                </section>
              </motion.article>
            ))}
          </motion.article>
        </motion.article>

        <motion.article
          variants={itemVariants}
          className="flex flex-col justify-center items-center gap-4"
        >
          <motion.div className="h-[16rem] lg:w-[26rem] w-full px-4 rounded-xl transition-all bg-gradient-to-r from-[var(--primary-cards-color)] to-purple-600 flex flex-col justify-center items-center text-white gap-10">
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="lg:text-5xl text-3xl font-semibold">
                <Counter endValue="95%" />
              </p>
              <p className="capitalize font-semibold lg:text-[1rem] text-[.9rem]">
                better hiring accuracy
              </p>
            </div>
            <div className="flex justify-between capitalize gap-5 w-full items-center">
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="lg:text-3xl text-2xl font-semibold">
                  <Counter endValue="50k+" />
                </p>
                <p className="capitalize lg:text-[1rem] text-[.9rem] whitespace-nowrap font-semibold text-center">
                  verified profiles
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <p className="lg:text-3xl text-2xl font-semibold">
                  <Counter endValue="1000+" />
                </p>
                <p className="capitalize lg:text-[1rem] text-[.9rem] whitespace-nowrap font-semibold text-center">
                  partner companies
                </p>
              </div>
            </div>
          </motion.div>
          <h5 className="text-[1.4rem] text-neutral-600 text-center font-semibold mt-2">
            Bringing Trust to Every Hiring Decision
          </h5>
        </motion.article>
      </section>
    </motion.main>
  );
};

export default About;
