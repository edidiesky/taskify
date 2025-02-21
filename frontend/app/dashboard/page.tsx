"use client"
import DashboardHomeTop from "@/components/dashboard/home/Header";
import TaskList from "@/components/dashboard/home/TaskList";
import React from "react";

export default function page() {
  return (
    <div className="w-full p-12 flex flex-col gap-12">
      <DashboardHomeTop/>
      <TaskList/>
    </div>
  );
}
