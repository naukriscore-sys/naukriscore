import { CoursesCard } from "@/components-our/employee-dashboard/new/CoursesCard";
import { DisputesCard } from "@/components-our/employee-dashboard/new/DisputesCard";
import { EventsCard } from "@/components-our/employee-dashboard/new/EventsCard";
import { FeedbacksCard } from "@/components-our/employee-dashboard/new/FeedbacksCard";
import { InfiniteCarousel } from "@/components-our/employee-dashboard/new/InfiniteCarousel";
import { OpportunitiesCard } from "@/components-our/employee-dashboard/new/OpportunitiesCard";
import { ProfileCard } from "@/components-our/employee-dashboard/new/ProfileCard";

export const EmployeeDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-2 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Column - Profile Section */}
            <div className="lg:col-span-1">
              <ProfileCard />
            </div>

            {/* Right Column - Main Dashboard Cards */}
            <div className="lg:col-span-3 space-y-6">
              <InfiniteCarousel />
              <FeedbacksCard />
              <DisputesCard />
              <OpportunitiesCard />
              <CoursesCard />
              <EventsCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
