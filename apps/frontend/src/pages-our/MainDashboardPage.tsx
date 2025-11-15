"use client";

import React from "react";
import { EmployeeDashboard } from "./NewEmployeeDashboard";

export const MainDashboardPage = () => {
  // here we can add conditional rendering on the basis of the role (employee or employer)
  return <EmployeeDashboard />;
};
