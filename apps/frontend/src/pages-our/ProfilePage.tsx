"use client";

import ProfileCard from "@/components-our/profile/ProfileCard";
import QuickLinks from "@/components-our/profile/QuickLinks";
import EducationSection from "@/components-our/profile/EducationSection";
import ProfileSummary from "@/components-our/profile/ProfileSummary";
import LanguagesSection from "@/components-our/profile/LanguagesSection";
import ExperienceSection from "@/components-our/profile/ExperienceSection";
import ResumeSection from "@/components-our/profile/ResumeSection";
import { useGetProfileQuery } from "@/redux/service/user";
import { Skeleton } from "@/components/ui/skeleton";

const ProfilePage = () => {
  const { data, isError, isLoading } = useGetProfileQuery();

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Profile Section */}
        {isLoading ? (
          <div className="flex flex-col items-center gap-4 animate-pulse">
            <Skeleton className="w-32 h-32 rounded-full bg-gray-300/70" />
            <Skeleton className="w-48 h-6 rounded-md bg-gray-300/70" />
            <Skeleton className="w-64 h-4 rounded-md bg-gray-300/70" />
          </div>
        ) : (
          <ProfileCard data={data} isError={isError} isLoading={isLoading} />
        )}

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* View & Edit Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Quick Links */}
          <div className="lg:col-span-1">
            {isLoading ? (
              <div className="space-y-3 animate-pulse">
                <Skeleton className="w-full h-10 rounded-md bg-gray-300/70" />
                <Skeleton className="w-full h-10 rounded-md bg-gray-300/70" />
                <Skeleton className="w-full h-10 rounded-md bg-gray-300/70" />
              </div>
            ) : (
              <QuickLinks />
            )}
          </div>

          {/* Right Content - Profile Details */}
          <div className="lg:col-span-3 space-y-6">
            {isLoading ? (
              <div className="space-y-4 animate-pulse">
                <Skeleton className="w-full h-28 rounded-md bg-gray-300/70" />
                <Skeleton className="w-full h-24 rounded-md bg-gray-300/70" />
                <Skeleton className="w-full h-20 rounded-md bg-gray-300/70" />
                <Skeleton className="w-full h-24 rounded-md bg-gray-300/70" />
                <Skeleton className="w-full h-20 rounded-md bg-gray-300/70" />
              </div>
            ) : (
              <>
                <ProfileSummary />
                <EducationSection />
                <LanguagesSection />
                <ExperienceSection />
                <ResumeSection />
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
