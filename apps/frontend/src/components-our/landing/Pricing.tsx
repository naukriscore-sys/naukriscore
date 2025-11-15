"use client";

import React, { useState } from "react";
import { motion, Variants } from "motion/react";
import Link from "next/link";

const prices = {
  startup: { monthly: 5000, yearly: 60000 },
  enterprise: { monthly: 15000, yearly: 180000 },
  corporate: { monthly: 50000, yearly: 600000 },
};

interface Plan {
  name: string;
  features: string[];
  priceKey: keyof typeof prices;
  popular?: boolean;
}

const Pricing = () => {
  const [isMonth, setIsMonth] = useState<boolean>(true);

  const [plans] = useState<Plan[]>([
    {
      name: "Startup",
      features: [
        "₹5,000/month for growing teams (1–100 employees)",
        "Up to 50 NaukriScore views/month",
        "3 Admins",
        "Score Summary Access",
        "Consent-Based Access Logs",
        "Dashboard + Candidate Filters",
        "₹20 per extra score check",
        "₹2,000 per detailed report",
        "Free feedback submission for all employers",
      ],
      priceKey: "startup",
    },
    {
      name: "Enterprise",
      features: [
        "₹15,000/month for scaling orgs (100–1000 employees)",
        "Up to 200 Score Views/month",
        "Full Score + Risk Flags + Exit History",
        "Hiring Pipeline Dashboard",
        "ATS & CRM API Access",
        "₹50 per extra score check",
        "₹2,000 per detailed report",
        "Free feedback submission for all employers",
      ],
      priceKey: "enterprise",
    },
    {
      name: "Corporate",
      features: [
        "₹50,000/month for large orgs (1000+ employees, 200+ hires/month)",
        "Unlimited Score Views",
        "Red Flag Alerts + Behavioral Intelligence",
        "Auto-Consent Workflow + Audit Trails",
        "Custom Roles, Compliance, Admin Controls",
        "₹200 per API-triggered score check",
        "₹2,000 per detailed report",
        "Free feedback submission for all employers",
      ],
      priceKey: "corporate",
      popular: true,
    },
  ]);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <motion.main
      id="pricing"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="h-auto px-2 sm:px-4 md:px-10 lg:px-20 py-10 bg-blue-50 w-full flex flex-col justify-start items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-5">
        <motion.h1
          variants={itemVariants}
          className="lg:text-[3.3rem] md:text-[3rem] text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-2 text-center w-full font-semibold pb-10"
        >
          Plans & Pricing
        </motion.h1>

        <motion.section
          variants={itemVariants}
          className="flex lg:flex-row flex-col w-full max-w-7xl mx-auto justify-center lg:gap-16 gap-8 mt-3 items-center"
        >
          <p className="text-neutral-600 max-w-xl lg:text-[.9rem] text-[.8rem] lg:text-left text-center">
            <span className="font-bold">
              Enjoy all features free for 12 months
            </span>{" "}
            — no commitment, no credit card required. After your free trial
            ends, simply choose a subscription plan that fits your needs.
          </p>
          <article className="flex bg-white lg:text-[.8rem] text-[.7rem] justify-center items-center w-[12rem] lg:w-[15rem] lg:h-[2.7rem] h-[2.4rem] rounded-full shadow-md">
            <button
              onClick={() => setIsMonth(true)}
              className={`${
                isMonth
                  ? "bg-[var(--primary-cards-color)] text-white"
                  : "bg-white text-black"
              } w-full h-full rounded-full`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setIsMonth(false)}
              className={`${
                !isMonth
                  ? "bg-[var(--primary-cards-color)] text-white"
                  : "bg-white text-black"
              } w-full h-full rounded-full`}
            >
              YEARLY
            </button>
          </article>
        </motion.section>

        <motion.section
          variants={containerVariants}
          className="grid w-full max-w-7xl mx-auto place-items-start lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="bg-white w-full rounded-xl overflow-hidden border border-neutral-300 shadow-xl h-full flex flex-col justify-between"
            >
              <section
                className={`p-5 h-full flex flex-col justify-between ${
                  plan.popular
                    ? "bg-[var(--primary-cards-color)] text-white"
                    : ""
                }`}
              >
                <div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold">
                      ₹
                      {isMonth
                        ? prices[plan.priceKey].monthly
                        : prices[plan.priceKey].yearly}
                      <span
                        className={` text-[.9rem] ${
                          plan.popular ? "text-neutral-200" : "text-neutral-500"
                        }`}
                      >
                        /{isMonth ? "month" : "year"}
                      </span>
                    </h3>
                    {plan.popular && (
                      <span className="inline-block whitespace-nowrap bg-orange-500 text-white text-[.7rem] font-semibold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <h4 className="text-[.9rem] font-semibold mt-2">
                    {plan.name}
                  </h4>
                  <ul
                    className={`mt-4 space-y-2 ${
                      plan.popular ? "text-white" : "text-gray-600"
                    }`}
                  >
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-[.78rem] font-medium">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={"#"}
                  className={`mt-6 w-full ${
                    plan.popular
                      ? "bg-white text-[var(--primary-cards-color)]"
                      : "bg-blue-100 text-[var(--primary-cards-color)]"
                  } py-2 rounded-full text-[.9rem] text-center font-medium`}
                >
                  Choose plan
                </Link>
              </section>
            </motion.article>
          ))}
        </motion.section>
      </div>
    </motion.main>
  );
};

export default Pricing;
