"use client";

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ScoreMeter, StraightProgessbar } from "@/core";
import { useScoreOverviewQuery } from "@/redux/service/user";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ScoreOverview = () => {
  const { data, isLoading } = useScoreOverviewQuery();

  const [categories, setCategories] = useState<any[]>([]);
  const [totalScore, setTotalScore] = useState<number>(0);

  useEffect(() => {
    if (data?.data) {
      setCategories(data?.data.result);
      setTotalScore(data?.data.score);
    }
  }, [data]);

  const suggestion = [
    {
      name: "Promotion",
      items: [
        {
          name: "Request positive feedback from your previous employer to improve your score.",
          description:
            "Your score will increase based on positive feedback from your previous employer.",
        },
        {
          name: "Complete your profile to increase your score",
          description: "Completing your profile will increase your score.",
          points: 50,
        },
      ],
    },
  ];

  const getColor = () => {
    if (totalScore <= 200) return "#fe4e4c";
    if (totalScore <= 400) return "#ff9534";
    if (totalScore <= 600) return "#f8cf00";
    if (totalScore <= 800) return "#8ee326";
    if (totalScore <= 1000) return "#00bd53";
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-12 max-w-7xl mx-auto mt-2 poppins gap-4">
        {/* LEFT SKELETON (ScoreMeter + Legend) */}
        <div className="col-span-3 border rounded-3xl shadow-lg h-130 p-5 flex flex-col items-center bg-white">
          <Skeleton className="w-32 h-32 rounded-full mb-6" />
          <div className="space-y-3 w-full px-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex justify-between items-center">
                <Skeleton className="w-28 h-4 rounded" />
                <Skeleton className="w-10 h-4 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SKELETON (Summary + Suggestions) */}
        <div className="col-span-9 flex flex-col gap-4">
          {/* Score Summary Skeleton */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div className="space-y-2">
                <Skeleton className="w-32 h-5 rounded" />
                <Skeleton className="w-48 h-3 rounded" />
              </div>
              <div className="space-y-2 text-right">
                <Skeleton className="w-24 h-3 rounded ml-auto" />
                <Skeleton className="w-16 h-6 rounded ml-auto" />
              </div>
            </div>
            <Skeleton className="w-full h-3 rounded-full mb-6" />
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 mb-2 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="w-40 h-4 rounded" />
                    <Skeleton className="w-28 h-3 rounded" />
                  </div>
                </div>
                <Skeleton className="w-10 h-4 rounded" />
              </div>
            ))}
          </div>

          {/* Suggestion Skeleton */}
          <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <div className="space-y-2 mb-4">
              <Skeleton className="w-32 h-5 rounded" />
              <Skeleton className="w-64 h-3 rounded" />
            </div>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 mb-2 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <Skeleton className="w-8 h-8 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="w-40 h-4 rounded" />
                    <Skeleton className="w-28 h-3 rounded" />
                  </div>
                </div>
                <Skeleton className="w-10 h-4 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // === RENDER ACTUAL CONTENT ===
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto mt-2 poppins gap-4 mb-6">
      <div className="col-span-3 border rounded-3xl shadow-lg h-130 bg-white">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mt-5 pt-5">
            <ScoreMeter showStats={true} value={totalScore} />
          </div>
          <div className="col-span-12 mt-4 p-4 px-6">
            <div className="flex justify-between mb-2 text-[#fe4e4c]">
              <p className="text-sm mb-1 flex items-center gap-1">
                <FontAwesomeIcon className="w-4 h-4" icon={faStar} /> High Risk
              </p>
              <span className="text-sm">0-200</span>
            </div>
            <div className="flex justify-between mb-2 text-[#ff9534]">
              <p className="text-sm mb-1 flex items-center gap-1">
                <FontAwesomeIcon className="w-4 h-4" icon={faStar} /> Low
                Reliability
              </p>
              <span className="text-sm">200-400</span>
            </div>
            <div className="flex justify-between mb-2 text-[#f8cf00]">
              <p className="text-sm mb-1 flex items-center gap-1">
                <FontAwesomeIcon className="w-4 h-4" icon={faStar} /> M
                Reliability
              </p>
              <span className="text-sm">400-600</span>
            </div>
            <div className="flex justify-between mb-2 text-[#8ee326]">
              <p className="text-sm mb-1 flex items-center gap-1">
                <FontAwesomeIcon className="w-4 h-4" icon={faStar} /> Reliable
              </p>
              <span className="text-sm">600-800</span>
            </div>
            <div className="flex justify-between mb-2 text-[#00bd53]">
              <p className="text-sm mb-1 flex items-center gap-1">
                <FontAwesomeIcon className="w-4 h-4" icon={faStar} /> Highly
                Reliable
              </p>
              <span className="text-sm">800-1000</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-9">
        <div className="grid grid-cols-12">
          <div className="col-span-12 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">Score Summary</h2>
                <p className="text-gray-500 text-sm">
                  Your performance breakdown
                </p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-sm">Total Score</p>
                <p
                  className={`text-3xl font-extrabold`}
                  style={{ color: getColor() }}
                >
                  {totalScore}
                </p>
              </div>
            </div>

            <div className="w-full rounded-full mb-6">
              <StraightProgessbar value={totalScore} />
            </div>

            {/* === ACCORDION WITH CATEGORIES === */}
            <Accordion type="single" collapsible className="w-full">
              {categories.map((category) => {
                const categoryTotal = category.items.reduce(
                  (sum: number, item: any) => sum + item.points,
                  0
                );

                return (
                  <AccordionItem key={category.name} value={category.name}>
                    <AccordionTrigger className="text-lg font-semibold text-gray-700 hover:no-underline">
                      <div className="flex justify-between w-full pr-4">
                        <span>
                          {category.name
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, (str: string) => str.toUpperCase())}
                        </span>
                        <span
                          className={`font-medium ${
                            categoryTotal >= 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {categoryTotal >= 0
                            ? `+${categoryTotal}`
                            : categoryTotal}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
                      <div className="space-y-2">
                        {category.items.map((item: any, i: number) => (
                          <div
                            key={i}
                            className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                                  item.points >= 0
                                    ? "bg-green-100"
                                    : "bg-red-100"
                                }`}
                              >
                                {item.points >= 0 ? (
                                  <span className="text-green-600 font-bold">
                                    +
                                  </span>
                                ) : (
                                  <span className="text-red-600 font-bold">
                                    −
                                  </span>
                                )}
                              </div>
                              <div>
                                <p className="text-gray-800 font-medium">
                                  {item.name}
                                </p>
                                <p className="text-gray-400 text-xs">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                            <p
                              className={`font-medium ${
                                item.points >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {item.points >= 0
                                ? `+${item.points}`
                                : item.points}
                            </p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>

          <div className="col-span-12 mt-4 bg-white p-6 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold">Suggestion</h2>
                <p className="text-gray-500 text-sm">
                  The following points can help you improve your score.
                </p>
              </div>
            </div>

            {suggestion.map((category) => (
              <div key={category.name} className="mb-4">
                <div className="space-y-2">
                  {category.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 flex items-center justify-center rounded-full ${
                            (item?.points ?? 0 >= 0)
                              ? "bg-green-100"
                              : "bg-red-100"
                          }`}
                        >
                          {(item?.points ?? 0 >= 0) ? (
                            <span className="text-green-600 font-bold">+</span>
                          ) : (
                            <span className="text-red-600 font-bold">-</span>
                          )}
                        </div>
                        <div>
                          <p className="text-gray-800 font-medium">
                            {item.name}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <p
                        className={`font-medium ${
                          (item.points ?? 0 >= 0)
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {(item?.points ?? 0 >= 0)
                          ? `+${item?.points || "-"} `
                          : `${item?.points || "-"}`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
