"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const ScoreCard = ({ scoreGenerated }: { scoreGenerated: number }) => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    const redirectTimeout = setTimeout(() => {
      router.push("/score-overview");
    }, 15000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimeout);
    };
  }, [router]);

  return (
    <div className="bg-(--primary-cards-color) p-4 rounded-xl shadow-md w-full max-w-xs flex flex-col items-center justify-center text-white text-center space-y-3">
      <div>
        <p className="text-sm opacity-90 font-medium">Congratulations!</p>
        <h2 className="text-lg font-semibold tracking-wide mt-1">Your Score</h2>
      </div>

      <div className="bg-white text-(--primary-cards-color) rounded-full px-6 py-2 text-2xl font-bold shadow-inner">
        {scoreGenerated}
      </div>

      <p className="text-[11px] opacity-80">
        Redirecting to dashboard in{" "}
        <span className="font-semibold">{seconds}</span>s...
      </p>

      <button
        onClick={() => router.push("/score-overview")}
        className="mt-2 bg-white cursor-pointer text-(--primary-cards-color) font-medium px-4 py-2 rounded-full shadow-sm hover:bg-opacity-90 hover:scale-105 transition-transform duration-300 text-xs"
      >
        View Score Summary
      </button>
    </div>
  );
};
