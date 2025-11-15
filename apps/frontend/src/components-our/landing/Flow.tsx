import React from "react";
import { FaArrowDownLong } from "react-icons/fa6";
import { HowItWorksProps } from "./HowItWorks";

const Flow = ({ title, icon, isEnd }: HowItWorksProps) => {
  return (
    <main className="flex w-[16rem] mb-2 flex-col justify-center items-center gap-2">
      <div className="h-[4rem] px-4 w-full border bg-white border-neutral-300 rounded-md hover:shadow-md transition-opacity duration-200 flex justify-center items-center gap-4">
        {icon}
        <h1 className="capitalize w-full text-[.8rem]">{title}</h1>
      </div>
      {!isEnd && (
        <FaArrowDownLong className="text-neutral-600" size={20} />
      )}{" "}
    </main>
  );
};

export default Flow;
