"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "motion/react";

const Faq = () => {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const faqs = [
    {
      question: "What is NaukriScore and how does it work?",
      answer:
        "NaukriScore is India’s first employment behavior scoring system — like a CIBIL score for jobs. It calculates a candidate's trustworthiness based on verified employment history, HR feedback, behavior ethics, and exit conduct. Scores range from 100 to 1000, helping employers make informed hiring decisions and employees build a portable reputation.",
    },
    {
      question: "Why should employers use NaukriScore in hiring?",
      answer:
        "NaukriScore helps prevent hiring mistakes like ghosting, resume fraud, and poor culture fit. By accessing a candidate’s trust score and behavioral insights, companies can reduce hiring risk, cut time-to-hire, and improve employee retention.",
    },
    {
      question: "Is NaukriScore compliant with India’s data privacy laws?",
      answer:
        "Yes. NaukriScore is fully compliant with the DPDP Act (2023). We follow a consent-first model, where employees must provide explicit, timestamped, and revocable permission before their score is shared with any employer.",
    },
    {
      question: "How is a NaukriScore calculated?",
      answer:
        "NaukriScore is generated using a proprietary algorithm that analyzes 8+ parameters including employment history, HR feedback, exit behavior, punctuality, hiring reliability, and red flags (misconduct, ghosting, fraud). Each factor is weighted and scored dynamically for real-time accuracy.",
    },
    {
      question: "Can employees improve their NaukriScore?",
      answer:
        "Yes. NaukriScore includes a recovery scoring model. Ethical behavior, long-term tenure, upskilling, dispute resolution, and positive feedback over time help employees repair or improve their score.",
    },
    {
      question: "What happens if an employee disputes a low score?",
      answer:
        "Employees can raise a dispute through the Dispute Resolution Dashboard. A neutral review process ensures transparency, and if found valid, the score is updated with full version history and audit logs.",
    },
    {
      question: "How much does NaukriScore cost for employers?",
      answer:
        "Plans start at ₹5,000/month for startups. Each score check is priced based on company size, starting from ₹20. Employers can also download detailed behavior reports for ₹2,000.",
    },
    {
      question: "Is it free for employers to give feedback?",
      answer:
        "Yes, feedback submission is 100% free for all employers. This helps build a fair and transparent trust ecosystem for all job seekers.",
    },
    {
      question: "Does NaukriScore work for freshers or freelancers?",
      answer:
        "Yes. Freshers are assigned a neutral base score which evolves as they receive feedback. For freelancers and gig workers, we’re building integrations with platforms like Upwork and GitHub to reflect credibility over time.",
    },
    {
      question:
        "How is NaukriScore different from background verification companies?",
      answer:
        "Traditional BGV checks verify documents. NaukriScore goes deeper — it captures behavioral trustworthiness using verified HR feedback and real-world ethics, making it a continuous, living profile — not a one-time check.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const questionVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.main
      id="faqs"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="w-full px-2 sm:px-4 md:px-10 lg:px-20 lg:py-16 py-10 h-auto flex flex-col gap-10 max-w-7xl mx-auto justify-center items-center"
    >
      <div className="flex flex-col justify-center w-full max-w-7xl mx-auto items-center">
        <motion.h4
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:text-[3.3rem] md:text-[3rem] pb-10 text-[1.8rem] lg:leading-[3.6rem] md:leading-[3.5rem] leading-[2.2rem] mt-2 text-center w-full font-semibold"
        >
          FAQs
        </motion.h4>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="text-neutral-600 mt-2 lg:text-[.9rem] text-[.8rem] text-center max-w-md"
        >
          Clear answers to help you understand how NaukriScore builds trust,
          protects reputations, and stays legally compliant.
        </motion.p>
      </div>
      <section className="w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="mb-4 w-full"
            variants={questionVariants}
          >
            <button
              onClick={() =>
                setActiveQuestion(
                  activeQuestion === faq.question ? null : faq.question
                )
              }
              className="w-full text-left lg:text-[.9rem] text-[.8rem] p-4 bg-gray-100 rounded-t-lg focus:outline-none flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span
                className={`transition-transform duration-300 ${activeQuestion === faq.question ? "rotate-45" : "rotate-0"
                  }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {activeQuestion === faq.question && (
                <motion.article
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden lg:text-[.85rem] text-[.8rem] bg-white rounded-b-lg border border-t-0"
                >
                  <p className="p-4">{faq.answer}</p>
                </motion.article>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </motion.main>
  );
};

export default Faq;
