"use client";

import Image from "next/image";
import React from "react";
import { HiLightBulb } from "react-icons/hi";
import { MdChevronRight } from "react-icons/md";
import { motion, Variants } from "motion/react";
import Link from "next/link";

interface HiringItemsProps {
  title: string;
  desc: string;
  imgurl: string[];
}

const hiringItems: HiringItemsProps[] = [
  {
    title: "MNCs",
    desc: "2.1k+ are actively hiring",
    imgurl: [
      "https://img.naukimg.com/logo_images/groups/v1/3565150.gif",
      "https://img.naukimg.com/logo_images/groups/v1/1340708.gif",
      "https://img.naukimg.com/logo_images/groups/v1/1614372.gif",
      "https://img.naukimg.com/logo_images/groups/v1/454860.gif",
    ],
  },
  {
    title: "FinTech",
    desc: "124 are actively hiring",
    imgurl: [
      "https://img.naukimg.com/logo_images/groups/v1/6896717.gif",
      "https://img.naukimg.com/logo_images/groups/v1/4681101.gif",
      "https://img.naukimg.com/logo_images/groups/v1/4591845.gif",
      "https://img.naukimg.com/logo_images/groups/v1/5240540.gif",
    ],
  },
  {
    title: "FMCG & Retail",
    desc: "160 are actively hiring",
    imgurl: [
      "https://img.naukimg.com/logo_images/groups/v1/15416.gif",
      "https://img.naukimg.com/logo_images/groups/v1/2792480.gif",
      "https://img.naukimg.com/logo_images/groups/v1/870182.gif",
      "https://img.naukimg.com/logo_images/groups/v1/4656755.gif",
    ],
  },
  {
    title: "Startups",
    desc: "642 are actively hiring",
    imgurl: [
      "https://img.naukimg.com/logo_images/groups/v1/9876382.gif",
      "https://img.naukimg.com/logo_images/groups/v1/3926812.gif",
      "https://img.naukimg.com/logo_images/groups/v1/84282.gif",
      "https://img.naukimg.com/logo_images/groups/v1/6771885.gif",
    ],
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

const Hiring = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="h-auto px-2 sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 w-full flex flex-col justify-start items-center max-w-7xl mx-auto"
    >
      <motion.article
        variants={itemVariants}
        className="flex flex-col justify-center items-center w-full"
      >
        <p className="flex justify-center items-center gap-2 lg:py-3 py-2 lg:px-6 px-4 rounded-full font-medium bg-blue-100 text-[var(--primary-cards-color)] lg:text-[.8rem] text-[.7rem]">
          <HiLightBulb size={20} />
          <span className="inline-block capitalize">hiring</span>
        </p>
        <h1 className="lg:text-[3.3rem] md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-2 w-full font-semibold text-center">
          Top Companies Hiring{" "}
          <span className="text-[var(--primary-cards-color)] capitalize">Now</span>
        </h1>
        <Link
          href={"/register/employee"}
          className="border mt-3 lg:mt-5 font-semibold bg-[var(--primary-cards-color)] text-white rounded-md border-[var(--primary-cards-color)] py-[.5rem] lg:py-[.6rem] lg:px-8 px-4 capitalize hover:bg-white hover:text-[var(--primary-cards-color)] cursor-pointer text-[.7rem] lg:text-[.8rem] transition-all duration-300"
        >
          Start Getting Hired
        </Link>
      </motion.article>
      <motion.section
        variants={containerVariants}
        className="grid lg:grid-cols-4 sm:grid-cols-2 mt-10 lg:mt-18 gap-5 w-full max-w-7xl mx-auto"
      >
        {hiringItems.map((item) => (
          <motion.div
            key={item.title}
            variants={itemVariants}
            className="w-full p-4 border border-neutral-200 h-[10.5rem] rounded-md hover:shadow-xl transition-opacity duration-300 flex flex-col justify-center sm:items-center items-start"
          >
            <div className="flex flex-col items-start">
              <p className="text-[1.08rem] lg:text-[1.15rem] font-semibold flex justify-center items-center">
                {item.title}
                <MdChevronRight size={20} className="ml-2 text-neutral-500" />
              </p>
              <p className="text-neutral-600 text-[.8rem] lg:text-[.9rem]">
                {item.desc}
              </p>
              <div className="grid grid-cols-4 mt-4 gap-4">
                {item.imgurl.map((url) => (
                  <Image
                    key={url}
                    width={55}
                    height={55}
                    className="rounded-full lg:w-20 w-10"
                    src={url}
                    alt={item.title}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </motion.main>
  );
};

export default Hiring;
