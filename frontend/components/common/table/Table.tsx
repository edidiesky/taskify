"use client";
import { useState } from "react";
import TableList from "./TableList";

const DEFAULT_HEADERS = ["ID", "Title", "Status", "Description", "Actions"];

type UserTableType = {
  headers?: string[];
  data: {
    title: string;
    price: number;
    id: string;
    category: string;
    size: string;
    color: string;
  }[];
  type: string;
  last_page?: any;
  current_page?: any;
};

export const Table = ({
  headers = DEFAULT_HEADERS,
  data = [],
  type,
  current_page,
  last_page,
}: UserTableType) => {
  const [page, setPage] = useState(1);
  return (
    <div className="w-full min-h-[250px] items-center justify-center p-4 border py-8 bg-[#fff] rounded-lg flex flex-col">
      <div className="overflow-auto w-full flex flex-col gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for your tasks!"
            className="w-32 lg:w-56 px-4 h-[40px] bg-[#f1f1f1] border rounded-xl font-work_font font-normal text-sm"
          />
        </div>
        <table className="w-full divide-y overflow-auto divide-gray-200">
          {/* bg-[#E8E8E3] */}
          <thead className="w-full">
            <tr>
              {headers.map((header, index) => {
                return (
                  <th
                    key={index}
                    scope="col"
                    className="px-4  py-4 text-left text-sm  font-normal text-[#777] capitalize tracking-wider cursor-pointer"
                  >
                    <div className="flex items-center">{header}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((tableData: any, rowIndex) => (
                <TableList key={rowIndex} tableData={tableData} />
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length + 1}
                  className="px-6 py-6 text-center text-base"
                >
                  <div className="w-full font-selleasy_regular">
                    {type === "tasks" ? "No Tasks created" : ""}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="p-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Showing {data.length} Tasks
            </span>
            <div className="flex space-x-1">
              <button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1}
                className="px-3 py-1 border rounded text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setPage((prev) => (prev < last_page ? prev + 1 : prev))
                }
                disabled={page === last_page}
                className="px-3 py-1 border rounded text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
