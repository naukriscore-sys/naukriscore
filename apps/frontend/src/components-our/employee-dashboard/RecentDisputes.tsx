import Link from "next/link";
import React from "react";

const employee = {
  dispute: [
    {
      disputeId: "D101",
      employerName: "Mike Johnson",
      employerCompany: "Global Solutions",
      createdAt: "2023-08-10",
      status: "pending",
      message:
        "I disagree with the negative feedback regarding missed deadlines. The delays were due to unclear initial requirements provided by the employer.",
    },
    {
      disputeId: "D102",
      employerName: "Robert Brown",
      employerCompany: "Finance Hub",
      createdAt: "2023-06-20",
      status: "resolved",
      message:
        "The errors mentioned were minor and already corrected in the revised submission. Requesting reevaluation of the score.",
    },
    {
      disputeId: "D103",
      employerName: "Sarah Lee",
      employerCompany: "Data Analytics Inc",
      createdAt: "2023-05-15",
      status: "under review",
      message:
        "The feedback seems unfair as the project scope changed midway without additional compensation or time extension.",
    },
  ],
};

const RecentDisputes = ({ isDashboard }: { isDashboard?: boolean }) => {
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
      <div className="w-full bg-white p-3 rounded-lg h-auto">
        <div className="flex justify-between items-center">
          <h2 className="text-base font-semibold">Recent Disputes</h2>
          <Link
            href={"/disputes"}
            className="text-[#2563EB] text-[.7rem] font-semibold hover:opacity-95 hover:underline"
          >
            View All
          </Link>
        </div>
        <div className="grid mt-3 gap-4">
          {employee?.dispute.length !== 0 ? (
            employee?.dispute.map((dispute) => (
              <div
                key={dispute.disputeId}
                className="rounded-lg p-4 shadow-md bg-[#F9FAFB]"
              >
                {/* Employer Info + Status */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-semibold">
                      {dispute?.employerName?.charAt(0)}
                    </span>
                    <div>
                      <p className="font-semibold text-[14px] capitalize text-neutral-600">
                        {dispute?.employerName}
                      </p>
                      <div className="flex justify-center items-center gap-4">
                        <p className="font-semibold text-[12px] capitalize">
                          {dispute?.employerCompany}
                        </p>
                        <p className="text-[10px] text-gray-600">
                          {formatDate(dispute?.createdAt)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-[11px] font-medium">
                    <span className="ml-1 text-gray-500">{dispute.status}</span>
                  </span>{" "}
                </div>
                <p className="text-[12px] text-gray-600 mb-2">
                  {dispute.message}
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>ID: {dispute.disputeId}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full py-10 text-sm font-medium rounded-md bg-neutral-200 text-neutral-600 flex justify-center items-center">
              <p>No disputes right now !</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 w-full mt-8">
      {employee?.dispute.length !== 0 ? (
        employee?.dispute.map((dispute) => (
          <div
            key={dispute.disputeId}
            className="border border-neutral-300 rounded-lg p-4 shadow-md bg-[#F9FAFB]"
          >
            {/* Employer Info + Status */}
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {dispute?.employerName?.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-[14px] capitalize text-neutral-600">
                    {dispute?.employerName}
                  </p>
                  <div className="flex justify-center items-center gap-4">
                    <p className="font-semibold text-[12px] capitalize">
                      {dispute?.employerCompany}
                    </p>
                    <p className="text-[10px] text-gray-600">
                      {formatDate(dispute?.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
              <span className="flex items-center text-blue-600 bg-blue-50 px-2 py-1 rounded-full text-[13px] font-medium">
                <span className="ml-1 text-gray-500">({dispute.status})</span>
              </span>{" "}
            </div>
            <p className="text-[12px] text-gray-600 mb-2">{dispute.message}</p>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Submitted: {formatDate(dispute.createdAt)}</span>
              <span>ID: {dispute.disputeId}</span>
            </div>
            {/* <div className="bg-blue-50 p-2 rounded-md">
            <p className="text-[12px] text-blue-600 font-medium">
              Admin Response
            </p>
            <p className="text-xs text-gray-600">{dispute.adminResponse}</p>
          </div> */}
          </div>
        ))
      ) : (
        <div className="w-full py-10 text-sm font-medium rounded-md bg-neutral-200 text-neutral-600 text flex justify-center items-center">
          <p>No disputes right now !</p>
        </div>
      )}
    </div>
  );
};

export default RecentDisputes;
