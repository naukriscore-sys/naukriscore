import CourseSection from "./employee-dashboard/CourseSection";
import ProfileOverview from "./employee-dashboard/ProfileOverview";
import RecentDisputes from "./employee-dashboard/RecentDisputes";
import RecentFeedback from "./employee-dashboard/RecentFeedback";
import RecommendedOpportunities from "./employee-dashboard/RecommendedOpportunities";

export const Dashboard = () => {
  return (
    <div className="min-h-screen rounded-md flex flex-col items-start justify-start gap-6 w-full max-w-7xl mx-auto mt-5">
      {/* ProfileOverview */}
      <ProfileOverview />

      {/* // recent feedback and recent Disputes */}
      <div className="w-full grid grid-cols-2 gap-3">
        <RecentFeedback isDashboard />
        <RecentDisputes isDashboard />
      </div>
      {/* RecommendedOpportunities */}
      <RecommendedOpportunities isDashboard />
      <CourseSection />
    </div>
  );
};
