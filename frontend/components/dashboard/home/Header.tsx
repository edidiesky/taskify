"use client";
import { onTaskModal } from "@/redux/slices/modalSlice";
import React from "react";
import { useDispatch } from "react-redux";

export default function DashboardHomeTop() {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex items-center gap-4 justify-between">
      <h2 className="text-3xl lg:text-4xl flex-1">
        Task Management
        <span className="block text-[#777] text-base lg:text-xl">
          Here is my list of task being created
        </span>
      </h2>
      <div className="flex justify-end items-center">
        <button
          onClick={() => dispatch(onTaskModal(""))}
          className="btn text-sm lg:text-base"
        >
          Create a New Task
        </button>
      </div>
    </div>
  );
}
