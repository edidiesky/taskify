import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function TableList({
  tableData,
  type,
}: {
  tableData: any;
  type: string;
}) {
  if (type === "tasks") {
    return (
      <tr
        key={tableData?.id}
        className={`hover:bg-gray-100 bg-[#f2f2f2] cursor-pointer transition-colors`}
        // onClick={() => onUserClick(tableData)} // Add click handler here
      >
        <td className="px-6 py-4 border-b bg-[#f1f1f1] whitespace-nowrap text-sm text-dark">
          {tableData?.name}
        </td>

        <td className="px-6 py-4 border-b bg-[#f1f1f1] whitespace-nowrap text-sm text-dark">
          ${tableData?.price}
        </td>
        <td className="px-6 py-4 border-b bg-[#f1f1f1] whitespace-nowrap text-sm text-dark">
          {tableData?.category}
        </td>
        <td className="px-6 py-4 border-b bg-[#f1f1f1] whitespace-nowrap text-sm text-dark">
          {/* {tableData?.size} */}
          <div className="w-full flex gap-1 items-center">
            {tableData.size?.map(
              (data: { value: any; name: string }, index: React.Key) => {
                return (
                  <div
                    key={index}
                    className="flex text-dark items-center gap-4"
                  >
                    <div
                      className="w-6 text-dark h-6 rounded-full"
                    >
                      {data?.value},
                    </div>{" "}
                  </div>
                );
              }
            )}
          </div>
        </td>
        <td className="px-6  py-4 border-b bg-[#f1f1f1] whitespace-nowrap text-sm text-dark">
          <div className="w-full flex gap-1 items-center">
            {tableData.colors?.map(
              (data: { value: any; name: string }, index: React.Key) => {
                return (
                  <div
                    key={index}
                    className="flex text-dark items-center gap-4"
                  >
                    <div
                      style={{
                        backgroundColor: `${data?.value}`,
                      }}
                      className="w-6 h-6 rounded-full"
                    ></div>{" "}
                    {/* {data?.name} */}
                  </div>
                );
              }
            )}
          </div>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap  border-b bg-[#f1f1f1] text-right text-sm"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-1">
            <button
              className="transition-colors p-3 hover:bg-[#e8e8e3d0] rounded-full"
              // onClick={(e) => {
              //   e.stopPropagation();
              //   setEditingUserId(tableData?.id);
              //   setIsModalOpen(true);
              //   onUserClick(tableData);
              //   // toast.success("Edit functionality coming soon!");
              // }}
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
  return (
    <tr
      key={tableData?.id}
      className={`hover:bg-gray-100 py-4 border-b px-3 bg-[#e8e8e3a8] cursor-pointer transition-colors`}
      // onClick={() => onUserClick(tableData)} // Add click handler here
    >
      <td className="px-6 py-4 whitespace-nowrap text-sm text-dark">
        {tableData?.phone_number}
      </td>
      {/* <td
        className="px-6 py-4 whitespace-nowrap text-right text-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setEditingUserId(tableData?.id);
            setIsModalOpen(true);
            onUserClick(tableData);
            // toast.success("Edit functionality coming soon!");
          }}
          aria-label="Edit tableData"
        >
          <FiEdit2 className="w-4 h-4" />
        </button>
        <button
          className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
          onClick={(e) => {
            setDeleteModal({
              isOpen: true,
              userId: tableData?.id,
              userName: tableData?.name,
            });
          }}
          aria-label="Delete tableData"
        >
          <FiTrash2 className="w-4 h-4" />
        </button>
      </td> */}
    </tr>
  );
}
