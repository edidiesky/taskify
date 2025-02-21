import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function TableList({
  tableData,
  type,
}: {
  tableData: any;
  type: string;
}) {
  console.log("tableData", tableData);
  return (
    <tr
      className={`hover:bg-gray-100 bg-[#f2f2f2] cursor-pointer transition-colors`}
      // onClick={() => onUserClick(tableData)} // Add click handler here
    >
      <td className="px-6 py-4 border-b whitespace-nowrap text-sm lg:text-base text-[#777]">
        {tableData?.id}
      </td>

      <td className="px-6 py-4 border-b whitespace-nowrap text-sm lg:text-base text-[#777]">
        {tableData?.title}
      </td>
      <td className="px-6 py-4 border-b whitespace-nowrap text-sm lg:text-base text-[#777]">
        {tableData?.status}
      </td>
      <td className="px-6 py-4 border-b whitespace-nowrap text-sm lg:text-base text-[#777]">
        {tableData?.description?.slice(0, 30)}...
      </td>
      <td
        className="px-6 py-4 whitespace-nowrap  border-b text-right text-sm lg:text-base"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-1">
          <button
            className="transition-colors p-3 hover:bg-[#e8e8e3d0] rounded-full"
            aria-label="Edit tableData"
          >
            <FiEdit2 className="w-4 h-4" />
          </button>
          <button
            className="text-red-600 hover:text-red-900 p-3 rounded-full hover:bg-red-50 transition-colors"
            // onClick={(e) => {
            //   setDeleteModal({
            //     isOpen: true,
            //     userId: tableData?.id,
            //     userName: tableData?.name,
            //   });
            // }}
            aria-label="Delete tableData"
          >
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}
