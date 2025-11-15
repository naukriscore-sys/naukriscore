"use client";

import { useAppSelector } from "@/redux/hooks";

export const ProfileProgressbar = () => {
  const progressStatus = useAppSelector(
    (state) => state.progress.progressStatus
  );

  return (
    <div className="col-span-3 bg-blue-100 rounded-4xl">
      <div className="flex-1 overflow-y-auto p-4 space-y-3 flex flex-col items-center">
        <h2 className="text-xl border-b-1 w-full pb-1 border-white">
          Progress{" "}
        </h2>
        {/* <div className={`p-3 px-5 rounded-3xl ${progressStatus === "accountCreated" ? "shadow-lg bg-white" : ""}`}>
          <h3 className="text-sm">Account Created</h3>
          <p className="text-[#9997A0] text-xs mt-1">This Section Include the Basic Information About you to Build the profile </p>
        </div> */}
        <div
          className={`p-3 px-5 rounded-3xl ${progressStatus === "other" ? "shadow-lg bg-white" : ""}`}
        >
          <h3 className="text-sm">Initialized Chat</h3>
          <p className="text-[#9997A0] text-xs mt-1">
            This Section Include the Basic Information About you to Build the
            profile{" "}
          </p>
        </div>
        <div
          className={`p-3 px-5 rounded-3xl ${progressStatus === "basicInfo" ? "shadow-lg bg-white" : ""}`}
        >
          <h3 className="text-sm">Basic Information</h3>
          <p className="text-[#9997A0] text-xs mt-1">
            This Section Include the Basic Information About you to Build the
            profile{" "}
          </p>
        </div>
        <div
          className={`p-3 px-5 rounded-3xl ${progressStatus === "experience" ? "shadow-lg bg-white" : ""}`}
        >
          <h3 className="text-sm">Experience</h3>
          <p className="text-[#9997A0] text-xs mt-1">
            This Section Include the Basic Information About you to Build the
            profile{" "}
          </p>
        </div>
        <div
          className={`p-3 px-5 rounded-3xl ${progressStatus === "promotion" ? "shadow-lg bg-white" : ""}`}
        >
          <h3 className="text-sm">Promotions</h3>
          <p className="text-[#9997A0] text-xs mt-1">
            This Section Include the Basic Information About you to Build the
            profile{" "}
          </p>
        </div>
        <div
          className={`p-3 px-5 rounded-3xl ${progressStatus === "exitRelated" ? "shadow-lg bg-white" : ""}`}
        >
          <h3 className="text-sm">Exit Information</h3>
          <p className="text-[#9997A0] text-xs mt-1">
            This Section Include the Basic Information About you to Build the
            profile{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

// {
//   /* Chat messages area */
// }
// <div className="flex-1 overflow-y-auto p-4 space-y-3">
//   {/* Example messages */}
//   <div className="bg-white rounded-xl p-3 max-w-xs">Hello! How are you?</div>
//   <div className="bg-blue-500 text-white rounded-xl p-3 max-w-xs ml-auto">
//     I’m good, thanks! What about you?
//   </div>
// </div>;
