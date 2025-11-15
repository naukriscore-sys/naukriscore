import { MdInfo } from "react-icons/md";

interface ScoreProps {
  score: number;
}

const NaukriScoreCard = ({ score }: ScoreProps) => {
  // Logic for fields
  const getResumeStrength = () => {
    if (score < 200) return "Weak";
    if (score < 400) return "Moderate";
    if (score < 700) return "Strong";
    return "Excellent";
  };

  const getIndustryRank = () => {
    if (score < 200) return "Below Average";
    if (score < 400) return "Average";
    if (score < 700) return "Above Average";
    return "Top 10%";
  };

  const getConsistency = () => {
    if (score < 200) return "Unstable";
    if (score < 400) return "Developing";
    if (score < 700) return "Stable";
    return "Highly Consistent";
  };

  const getProfileCompletion = () => {
    if (score < 200) return "Incomplete";
    if (score < 400) return "Partially Complete";
    if (score < 700) return "Mostly Complete";
    return "Well Completed";
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <h3 className="text-lg font-semibold text-white">
        Your Current NaukriScore
      </h3>
      <p className="text-xs text-neutral-200">
        Your employment behavior scoring overview
      </p>

      {/* Score */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <p className="text-3xl font-bold text-white">{score}</p>
        <div className="relative group">
          <MdInfo size={16} className="text-white/70 cursor-pointer" />
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-[11px] rounded px-2 py-1 whitespace-nowrap z-10">
            Your score is out of 1000 and reflects your profile strength.
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-white w-full max-w-xs">
        <div className="bg-white/20 p-2 rounded-md">
          <p className="font-semibold">Profile</p>
          <p className="text-[11px] text-neutral-200">
            {getProfileCompletion()}
          </p>
        </div>

        <div className="bg-white/20 p-2 rounded-md">
          <p className="font-semibold">Resume</p>
          <p className="text-[11px] text-neutral-200">{getResumeStrength()}</p>
        </div>

        <div className="bg-white/20 p-2 rounded-md">
          <p className="font-semibold">Industry Rank</p>
          <p className="text-[11px] text-neutral-200">{getIndustryRank()}</p>
        </div>

        <div className="bg-white/20 p-2 rounded-md">
          <p className="font-semibold">Consistency</p>
          <p className="text-[11px] text-neutral-200">{getConsistency()}</p>
        </div>
      </div>
    </div>
  );
};

export default NaukriScoreCard;
