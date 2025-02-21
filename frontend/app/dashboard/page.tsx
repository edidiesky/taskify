"use client"
import DashboardHomeTop from "@/components/dashboard/home/Header";
import TaskList from "@/components/dashboard/home/TaskList";
import { protectRoute } from "@/helpers/protectRoute";
import React from "react";

function page() {
  return (
    <div className="w-full p-8 lg:p-12 flex flex-col gap-12">
      <DashboardHomeTop/>
      <TaskList/>
    </div>
  );
}

export default protectRoute(page)