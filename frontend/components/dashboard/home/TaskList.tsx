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
        onDeleteUser={function (a: string): void {
          throw new Error("Function not implemented.");
        }}
        deleteModal={{
          userId: "",
        }}
        type={""}
      />
    </div>
  );
}
