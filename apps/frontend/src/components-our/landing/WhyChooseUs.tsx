"use client";

import React from "react";
import { motion, Variants } from "motion/react";
import { IoStar } from "react-icons/io5";
import { MdAccessTime, MdSecurity } from "react-icons/md";
import { IoEye } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import { HiUsers } from "react-icons/hi";
import { AiOutlineSolution } from "react-icons/ai";

interface ServicesProps {
  title: string;
  desc: string;
  icon: React.ReactElement;
  bg: string;
  color: string;
}

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

const WhyChooseUs = () => {
  const WhyChooseUsItems: ServicesProps[] = [
    {
      title: "Score calculation",
      desc: `Calculates real-time scores between 100–1000 using HR feedback, tenure, ethics, and behavior Employers get a data-backed trust score before hiring.`,
      icon: <VscGraphLine />,
      bg: "bg-green-200",
      color: "text-green-600",
    },
    {
      title: "Consent management",
      desc: `Access is 100% controlled by the employee. Employers can only view scores after Aadhaar-based, timestamped, and revocable consent.`,
      icon: <HiUsers />,
      bg: "bg-pink-200",
      color: "text-pink-600",
    },
    {
      title: "Lightning Fast",
      desc: `Reduce hiring time by up to 90% in high-volume or repeat roles thanks to instant score access, verified conduct history, and trusted candidate filtering.`,
      icon: <MdAccessTime />,
      bg: "bg-purple-200",
      color: "text-purple-600",
    },
    {
      title: "Dispute & Recovery System",
      desc: `Employees can contest biased feedback and recover scores through verified positive behavior — ensuring fairness and redemption.`,
      icon: <AiOutlineSolution />,
      bg: "bg-indigo-200",
      color: "text-indigo-600",
    },
    {
      title: "Verified Records",
      desc: "All employee records undergo rigorous verification through multiple trusted sources, ensuring complete authenticity in every profile.",
      icon: <MdSecurity />,
      bg: "bg-blue-200",
      color: "text-blue-600",
    },
    {
      title: "Full Transparency",
      desc: "Complete transparency throughout the hiring process with clear scoring criteria, detailed feedback, and open communication channels.",
      icon: <IoEye />,
      bg: "bg-orange-200",
      color: "text-orange-600",
    },
  ];

  return (
    <motion.main
      id="features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full px-2 sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 bg-green-50 h-auto flex flex-col justify-start items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5">
        <motion.p
          variants={itemVariants}
          className="flex justify-center items-center gap-2 lg:py-3 py-2 lg:px-6 px-4 rounded-full font-medium bg-green-100 w-6/10 mx-auto text-green-600 lg:text-[.8rem] text-[.7rem]"
        >
          <IoStar size={20} />
          <span className="inline-block">Why Choose NaukriScore</span>
        </motion.p>
        <motion.h1
          variants={itemVariants}
          className="lg:text-[3.3rem] md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-6 text-center w-full font-semibold"
        >
          Powerful Features for <br />
          <span className="text-green-600">Modern Recruitment</span>
        </motion.h1>
        <motion.section
          variants={containerVariants}
          className="w-full max-w-7xl mx-auto flex justify-center gap-10 items-center mt-10"
        >
          <article className="w-full grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
            {WhyChooseUsItems.map((item, index) => (
              <motion.section
                key={index}
                variants={itemVariants}
                className="flex bg-white border border-neutral-200 flex-col justify-start items-start w-full p-5 h-auto rounded-xl transition-all duration-300 hover:shadow-xl"
              >
                <p
                  className={`flex mb-2 lg:mb-4 text-[1.2rem] lg:text-[1.5rem] justify-center items-center h-12 w-12 rounded-full ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </p>
                <h1 className="text-[1.05rem] lg:text-[1.15rem] w-full mb-1 lg:mb-2 font-semibold">
                  {item.title}
                </h1>
                <p className="text-[.7rem] lg:text-[.84rem] w-full text-neutral-600">
                  {item.desc}
                </p>
              </motion.section>
            ))}
          </article>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default WhyChooseUs;
