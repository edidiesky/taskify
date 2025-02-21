"use client";
import Table from "@/components/common/table/Table";
import { useGetAllTaskQuery } from "@/redux/services/taskApi";
import React from "react";

export default function TaskList() {
  const { data, isLoading } = useGetAllTaskQuery("");
  // console.log("task data", data);
  return (
    <div>
      <Table
        data={data}
        type={""}
      />
    </div>
  );
}
