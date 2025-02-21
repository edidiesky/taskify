import Table from "@/components/common/table/Table";
import React from "react";

export default function TaskList() {
  return (
    <div>
      <Table
        headers={[]}
        data={[]}
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
