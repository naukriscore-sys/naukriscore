"use client";

import Image from "next/image";
import React from "react";
import { IoStar } from "react-icons/io5";
import { motion, Variants } from "motion/react";

interface TestimonialsProps {
  img: string;
  name: string;
  about: string;
  ratings: number;
  msg: string;
}

const testimonialsItems: TestimonialsProps[] = [
  {
    name: "Aditi Sharma",
    about: "HRBP, Codent Technologies",
    ratings: 5,
    msg: "We reduced bad hires by 40% in 3 months using NaukriScore. It's become our first filter before even looking at a resume.",
    img: "https://images.pexels.com/photos/32887281/pexels-photo-32887281.jpeg",
  },
  {
    name: "Akshay Ghadge",
    about: "Founder & CEO - ThingsUp",
    ratings: 5,
    msg: "Ghosting and offer dropouts were killing our hiring speed. With NaukriScore, we’ve built a 100% joiner pipeline in the last 2 quarters.",
    img: "https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg",
  },
  {
    name: "Riya Shah",
    about: "Founder & CEO - EasyPuja",
    ratings: 4,
    msg: "My last employer left unfair feedback, but NaukriScore helped me raise a dispute and recover my score. Today I’ve got 3 offers and regained confidence.",
    img: "https://images.pexels.com/photos/2965095/pexels-photo-2965095.jpeg",
  },
  {
    name: "Ojasvi Chauhan",
    about: "Founder - Innovante",
    ratings: 5,
    msg: "We now mandate a NaukriScore report for all lateral hires. It's the CIBIL for HR, and we’re already seeing better cultural fit and retention.",
    img: "https://images.pexels.com/photos/7580990/pexels-photo-7580990.jpeg",
  },
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

const Testimonials = () => {
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="h-auto px-2 sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 flex flex-col justify-start items-center w-full"
    >
      <div className="w-full max-w-7xl mx-auto px-5">
        <motion.section
          variants={itemVariants}
          className="flex flex-col justify-center w-full max-w-7xl mx-auto items-center"
        >
          <h1 className="lg:text-[3.3rem] pb-10 md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] text-center w-full font-semibold">
            Success Stories
          </h1>
          <p className="text-neutral-600 mt-1 text-center max-w-md lg:text-[1rem] text-[.8rem]">
            Success isn’t a story — until someone lives it.Explore how they
            turned chances into change.
          </p>
        </motion.section>

        <motion.section
          variants={containerVariants}
          className="grid xl:grid-cols-4 lg:grid-cols-2 w-full max-w-7xl mx-auto mt-14 gap-6"
        >
          {testimonialsItems.map((item) => (
            <motion.section
              key={item.name}
              variants={itemVariants}
              className="w-full bg-neutral-100 border border-neutral-300 shadow-md text-black h-auto rounded-md flex flex-col justify-start gap-6 items-start py-2 px-4"
            >
              <article className="flex items-center">
                <Image
                  src={item.img}
                  alt="Profile"
                  height={100}
                  width={100}
                  className="w-12 h-12 rounded-full mr-4 object-cover object-top"
                />
                <section>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-[.75rem] text-neutral-600">{item.about}</p>
                </section>
              </article>
              <article className="flex flex-col justify-center items-start gap-2">
                <section className="flex lg:text-[1rem] text-[.8rem]">
                  {[...Array(item.ratings)].map((_, i) => (
                    <span key={i} className="text-yellow-400 mr-1">
                      <IoStar />
                    </span>
                  ))}
                </section>
                <p className="text-[.75rem]">{item.msg}</p>
              </article>
            </motion.section>
          ))}
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Testimonials;
