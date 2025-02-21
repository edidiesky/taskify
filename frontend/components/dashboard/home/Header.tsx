"use client"
import React from "react";

export default function DashboardHomeTop() {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className="text-4xl">
        Task Management
        <span className="block text-[#777] text-xl">
          Here is my list of task being created
        </span>
      </h2>
      <div className="flex justify-end items-center">
        <button
          onClick={() => {
            console.log("Hello World");
          }}
          className="btn"
        >
          Create a New Task
        </button>
      </div>
    </div>
  );
}
