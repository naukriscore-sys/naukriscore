import Link from "next/link";
import React from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

const forms = [
  {
    id: "F101",
    title: "Senior Frontend Developer",
    employer: {
      companyName: "TechVision Inc",
    },
    description:
      "We are looking for an experienced frontend developer skilled in React and Next.js to join our dynamic team. Responsibilities include building responsive UIs, optimizing performance, and collaborating with backend developers.",
  },
  {
    id: "F102",
    title: "UX/UI Designer",
    employer: {
      companyName: "Creative Minds Studio",
    },
    description:
      "Join our design team to create intuitive user experiences for web and mobile applications. Proficiency in Figma, Adobe XD, and a strong portfolio are required.",
  },
  {
    id: "F103",
    title: "Backend Engineer (Node.js)",
    employer: {
      companyName: "DataFlow Systems",
    },
    description:
      "Develop scalable backend services using Node.js and Express. Experience with databases like MongoDB and PostgreSQL is essential. Work on API integrations and microservices architecture.",
  },
  {
    id: "F104",
    title: "Digital Marketing Specialist",
    employer: {
      companyName: "GrowthHack Agency",
    },
    description:
      "Manage social media campaigns, SEO, and content strategy to drive user acquisition. Analytical skills with tools like Google Analytics and prior experience in B2B marketing preferred.",
  },
  {
    id: "F105",
    title: "Full Stack Developer",
    employer: {
      companyName: "Innovate Solutions",
    },
    description:
      "Build end-to-end web applications using MERN stack. Handle everything from database design to frontend deployment. Remote position with flexible hours.",
  },
];

const RecommendedOpportunities = ({
  isDashboard,
}: {
  isDashboard?: boolean;
}) => {
  return (
    <div
      className={`flex p-3 ${!isDashboard && "mt-5"} flex-col justify-center items-center w-full bg-white rounded-md`}
    >
      {isDashboard && (
        <div className="w-full flex justify-between items-center">
          <h2 className="text-base font-semibold">Recent Opportunities</h2>
          <Link
            href={"/jobs"}
            className="text-[#2563EB] text-[.7rem] font-semibold hover:opacity-95 hover:underline"
          >
            View All
          </Link>
        </div>
      )}
      <div
        className={`w-full grid ${
          isDashboard && forms && forms.length > 0
            ? "grid-cols-3 gap-4 mt-3"
            : "gap-5"
        }`}
      >
        {forms && forms.length !== 0 ? (
          forms.map((form) => (
            <div
              key={form.id}
              className="w-full border border-neutral-300 rounded-md p-3 flex flex-col justify-between hover:shadow-sm transition"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-col">
                  <p className="text-sm capitalize font-medium text-gray-800">
                    {form.title}
                  </p>
                  <p className="text-xs text-neutral-500">
                    {form.employer.companyName}
                  </p>
                </div>
                <FaRegBookmark size={16} className="text-neutral-500" />
              </div>

              {/* Description */}
              <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                {form.description}
              </p>

              {/* Actions */}
              <div className="flex gap-2 mt-3">
                <Link
                  target="_blank"
                  href={`/form/${form.id}`}
                  className="flex-1 text-center text-[11px] bg-blue-600 text-white py-1.5 rounded-md font-medium hover:bg-blue-700 transition"
                >
                  Apply
                </Link>
                <Link
                  target="_blank"
                  href={`/form/${form.id}`}
                  className="flex-1 text-[11px] border border-neutral-400 py-1.5 rounded-md flex justify-center items-center gap-1 text-gray-700 font-medium hover:bg-neutral-100 transition"
                >
                  <MdOpenInNew size={14} />
                  View
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full mt-4 py-10 text-sm font-medium rounded-md bg-neutral-100 text-neutral-600 flex justify-center items-center">
            <p>No jobs right now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendedOpportunities;
