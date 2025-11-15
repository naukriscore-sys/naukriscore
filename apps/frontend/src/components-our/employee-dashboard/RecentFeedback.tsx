import Link from "next/link";
import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa6";

const employee = {
  feedback: [
    {
      feedbackId: "11",
      employerName: "John Doe",
      employerCompany: "Acme Corp",
      createdAt: "2023-10-15",
      score: 50,
      status: "positive",
      message: [
        "Great communication skills and delivered the project ahead of schedule.",
        "Highly professional and easy to work with.",
      ],
      rating: 5,
    },
    {
      feedbackId: "12",
      employerName: "Jane Smith",
      employerCompany: "Tech Innovations Ltd",
      createdAt: "2023-09-20",
      score: 30,
      status: "positive",
      message: [
        "Solid performance on the task assigned.",
        "Would recommend for similar roles.",
      ],
      rating: 4,
    },
    {
      feedbackId: "13",
      employerName: "Mike Johnson",
      employerCompany: "Global Solutions",
      createdAt: "2023-08-05",
      score: 20,
      status: "negative",
      message: [
        "Missed a few deadlines which caused delays.",
        "Needs improvement in time management.",
      ],
      rating: 2,
    },
    {
      feedbackId: "14",
      employerName: "Emily Davis",
      employerCompany: "Creative Agency",
      createdAt: "2023-07-12",
      score: 40,
      status: "positive",
      message: [
        "Excellent creativity and attention to detail.",
        "Exceeded expectations on design deliverables.",
      ],
      rating: 5,
    },
    {
      feedbackId: "15",
      employerName: "Robert Brown",
      employerCompany: "Finance Hub",
      createdAt: "2023-06-18",
      score: 10,
      status: "negative",
      message: [
        "Some errors in the financial reports submitted.",
        "Requires more thorough checking.",
      ],
      rating: 3,
    },
  ],
};

const RecentFeedback = ({ isDashboard }: { isDashboard?: boolean }) => {
  const renderStars = (rating: number) => (
    <div className="flex items-center gap-1 text-[.9rem]">
      {Array.from({ length: 5 }).map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="text-yellow-400" />
        ) : (
          <FaRegStar key={index} className="text-gray-300" />
        )
      )}
    </div>
  );

  const renderScore = (score: number, status: string) => (
    <span
      className={`text-[12px] font-medium px-2 py-1 rounded-full ${
        status === "positive"
          ? "text-green-700 bg-green-100"
          : "text-red-700 bg-red-100"
      }`}
    >
      {status === "positive" ? `+ ${score} points` : `- ${score} points`}
    </span>
  );

  const formatDate = (dateInput: Date | string): string => {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
      throw new Error("Invalid date");
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isDashboard) {
    return (
      <div className="w-full flex flex-col justify-center items-center bg-white p-3 rounded-md">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-base font-semibold">Recent Feedback</h2>
          <Link
            href={"/feedbacks"}
            className="text-[#2563EB] text-[.7rem] font-semibold hover:opacity-95 hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 h-auto mt-3">
          {employee?.feedback.length !== 0 ? (
            employee?.feedback.slice(0, 4).map((feedback) => (
              <div
                key={feedback?.feedbackId}
                className="rounded-lg p-4 shadow-md flex flex-col justify-between bg-[#F9FAFB]"
              >
                {/* Employer Info + Score */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-semibold">
                      {feedback?.employerName?.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-[14px] capitalize text-neutral-600">
                        {feedback?.employerName}
                      </p>
                      <div className="flex justify-center items-center gap-4">
                        <p className="font-semibold text-[12px] capitalize">
                          {feedback?.employerCompany}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {formatDate(feedback?.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {renderScore(feedback?.score, feedback?.status)}
                </div>

                {/* Messages */}
                <ul className="list-none text-[12px] leading-[14px] text-gray-600 mb-2  space-y-1">
                  {feedback?.message.map((msg, idx) => (
                    <li key={idx}>{msg}</li>
                  ))}
                </ul>

                {/* Rating */}
                <div className="w-full flex justify-between items-center">
                  <div>{renderStars(feedback?.rating)}</div>
                  {feedback?.status === "negative" && (
                    <Link
                      href={`/create-dispute/${feedback.feedbackId}`}
                      className="text-red-700 bg-red-100 rounded-md py-1 px-4 font-medium text-[.7rem]"
                    >
                      Not Satisfied With The Feedback? Raise Dispute.
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="w-full py-10 text-sm font-medium rounded-md bg-neutral-200 text-neutral-600 text flex justify-center items-center">
              <p>No feedbacks right now !</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 h-auto mt-8">
      {employee?.feedback?.length !== 0 ? (
        employee?.feedback?.map((feedback) => (
          <div
            key={feedback?.feedbackId}
            className="border border-neutral-300 rounded-lg p-4 shadow-md flex flex-col justify-between bg-[#F9FAFB]"
          >
            {/* Employer Info + Score */}
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {feedback?.employerName?.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-[14px] capitalize text-neutral-600">
                    {feedback?.employerName}
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    <p className="font-semibold text-[12px] capitalize">
                      {feedback?.employerCompany}
                    </p>
                    <p className="text-[10px] text-gray-600">
                      {formatDate(feedback?.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              {renderScore(feedback?.score, feedback?.status)}
            </div>

            {/* Messages */}
            <ul className="list-none text-[12px] leading-[14px] text-gray-600 mb-2  space-y-1">
              {feedback?.message.map((msg, idx) => (
                <li key={idx}>{msg}</li>
              ))}
            </ul>

            {/* Rating */}
            <div className="w-full flex justify-between items-center">
              <div>{renderStars(feedback?.rating)}</div>
              {feedback?.status === "negative" && (
                <Link
                  href={`/create-dispute/${feedback.feedbackId}`}
                  className="text-red-700 bg-red-100 rounded-md py-1 px-4 font-medium text-[.7rem]"
                >
                  Raise Dispute
                </Link>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="w-full py-10 text-sm font-medium rounded-md bg-neutral-200 text-neutral-600 text flex justify-center items-center">
          <p>No feedbacks right now !</p>
        </div>
      )}
    </div>
  );
};

export default RecentFeedback;
