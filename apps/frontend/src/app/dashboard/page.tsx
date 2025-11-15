import { MainDashboardPage } from "@/pages-our/MainDashboardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Page",
  description: "Your personalized NaukriScore dashboard page",
};

const Page = async () => {
  return <MainDashboardPage />;
};

export default Page;
