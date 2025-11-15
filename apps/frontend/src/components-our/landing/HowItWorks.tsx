"use client";

import Image from "next/image";
import React, { ReactElement } from "react";
import { motion, Variants } from "motion/react";
import { FaCheckSquare, FaUserEdit, FaUserPlus } from "react-icons/fa";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";
import { IoMdLock } from "react-icons/io";
import { MdFeedback, MdOutlinePayment, MdOutlinePostAdd } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { VscFeedback, VscGraphLine } from "react-icons/vsc";
import Link from "next/link";
import { GiProgression } from "react-icons/gi";
import Flow from "./Flow";

export interface HowItWorksProps {
  title: string;
  icon: ReactElement;
  isEnd?: boolean;
}

export const howItWorksItemsForEmployees: HowItWorksProps[] = [
  {
    title: "Register with Aadhaar/PAN",
    icon: <FaUserPlus size={25} className="text-blue-800" />,
  },
  {
    title: "Build Profile (roles, education)",
    icon: <FaUserEdit size={25} className="text-blue-800" />,
  },
  {
    title: "Apply for Job + Give Consent",
    icon: <FaCheckSquare size={25} className="text-blue-800" />,
  },
  {
    title: "HR Feedback Collected",
    icon: <MdFeedback size={25} className="text-blue-800" />,
  },
  {
    title: "Get Your NaukriScore (100–1000)",
    icon: <VscGraphLine size={25} className="text-blue-800" />,
  },
  {
    title: "Improve Score & Apply Again",
    icon: <GiProgression size={25} className="text-blue-800" />,
    isEnd: true,
  },
];

export const howItWorksItemsForEmployers: HowItWorksProps[] = [
  {
    title: "Post Job or Invite Candidate",
    icon: <MdOutlinePostAdd size={25} className="text-blue-800" />,
  },
  {
    title: "Candidate Gives Consent",
    icon: <IoMdLock size={25} className="text-blue-800" />,
  },
  {
    title: "View Score + Behavior Report",
    icon: <RiVerifiedBadgeFill size={25} className="text-blue-800" />,
  },
  {
    title: "Shortlist with Confidence",
    icon: <FaCheckSquare size={25} className="text-blue-800" />,
  },
  {
    title: "Submit Exit Feedback (Post-hiring)",
    icon: <VscFeedback size={25} className="text-blue-800" />,
  },
  {
    title: "Pay for Report / Subscribe for Bulk",
    icon: <MdOutlinePayment size={25} className="text-blue-800" />,
    isEnd: true,
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

const HowItWorks = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="h-auto px-2 sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 bg-blue-50 w-full flex flex-col justify-start items-center"
    >
      <div className="w-full max-w-7xl mx-auto">
        <motion.section
          variants={containerVariants}
          className="flex lg:flex-row flex-col justify-center lg:gap-18 items-start w-full max-w-7xl mx-auto"
        >
          <motion.article
            variants={itemVariants}
            className="flex w-full flex-col justify-center gap-2 lg:w-[55%] lg:items-start items-center"
          >
            <h1 className="lg:text-[3.3rem] md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-2 w-full font-semibold lg:text-left text-center">
              How it Works ?
            </h1>
            <p className="text-neutral-600 text-[.8rem] lg:text-[.9rem] w-full lg:w-[80%] lg:text-left text-center">
              NaukriScore makes hiring and job searching simple and transparent.
              With Aadhaar-based verification and real work data, both employees
              and employers can trust every step of the process.
            </p>
            <Link
              href={"/register/employee"}
              className="border w-[16rem] mt-3 font-semibold bg-blue-600 text-white rounded-md border-blue-600 py-[.6rem] text-[.9rem] px-8 capitalize hover:bg-white hover:text-blue-600 cursor-pointer transition-all duration-300 text-center"
            >
              Check Out Now.
            </Link>
          </motion.article>
          <motion.article variants={itemVariants}>
            <Image
              height={100}
              width={300}
              alt="works"
              src={"/works.svg"}
              className="lg:block hidden"
            />
          </motion.article>
        </motion.section>

        <motion.section
          variants={containerVariants}
          className="grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-0 gap-10 w-full max-w-7xl mx-auto lg:mt-10 mt-5"
        >
          <motion.article
            variants={itemVariants}
            className="flex flex-col justify-start items-center w-full"
          >
            <h1 className="text-2xl font-semibold">Employees</h1>
            <section className="mt-8">
              {howItWorksItemsForEmployees.map((item) => (
                <Flow
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  isEnd={item.isEnd}
                />
              ))}
            </section>

            <Link
              href={"/register/employee"}
              className="border w-[16rem] mt-6 font-semibold bg-blue-600 text-white rounded-md border-blue-600 py-[.6rem] text-[.9rem] px-8 capitalize hover:bg-white hover:text-blue-600 cursor-pointer transition-all duration-300 text-center"
            >
              View Your Score
            </Link>
          </motion.article>

          <motion.section
            variants={itemVariants}
            className="hidden h-full w-full lg:flex justify-center items-center"
          >
            <article className="p-5 h-[15rem] flex justify-between items-center gap-5">
              <HiMiniArrowLongLeft size={40} />
              <div className="h-[10rem] rounded-md text-white w-[14rem] bg-gradient-to-r from-blue-600 to-purple-600 flex flex-col justify-center items-center gap-2">
                <Image src={"/star.svg"} height={100} width={80} alt="star" />
                <p className="text-xl font-semibold">NaukriScore Engine</p>
              </div>
              <HiMiniArrowLongRight size={40} />
            </article>
          </motion.section>

          <motion.section
            variants={itemVariants}
            className="flex flex-col justify-start items-center w-full"
          >
            <h1 className="text-2xl font-semibold">Employers</h1>
            <div className="mt-8">
              {howItWorksItemsForEmployers.map((item) => (
                <Flow
                  key={item.title}
                  title={item.title}
                  icon={item.icon}
                  isEnd={item.isEnd}
                />
              ))}
            </div>
            <Link
              href={"/register/employer"}
              className="border w-[16rem] mt-6 font-semibold bg-blue-600 text-white rounded-md border-blue-600 py-[.6rem] text-[.9rem] px-8 capitalize hover:bg-white hover:text-blue-600 cursor-pointer transition-all duration-300 text-center"
            >
              Start Hiring
            </Link>
          </motion.section>
        </motion.section>
      </div>
    </motion.main>
  );
};

export default HowItWorks;
