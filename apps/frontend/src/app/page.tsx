import About from "@/components-our/landing/About";
import Delivers from "@/components-our/landing/Deliver";
import Faq from "@/components-our/landing/Faq";
import Hero from "@/components-our/landing/Hero";
import Hiring from "@/components-our/landing/Hiring";
import HowItWorks from "@/components-our/landing/HowItWorks";
import Pricing from "@/components-our/landing/Pricing";
import ScoreComposition from "@/components-our/landing/ScoreComp";
import Testimonials from "@/components-our/landing/Testimonials";
import WhyChooseUs from "@/components-our/landing/WhyChooseUs";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      <Hiring />
      <HowItWorks />
      <ScoreComposition />
      <Delivers />
      <Testimonials />
      <Pricing />
      <Faq />
    </>
  );
};

export default Page;
