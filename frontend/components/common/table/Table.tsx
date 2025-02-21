"use client";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import TableList from "./TableList";

const DEFAULT_HEADERS = ["User Info", "Location", "Phone", "Status", "Actions"];

type UserTableType = {
  headers: string[];
  data: {
    title: string;
    price: number;
    id: string;
    category: string;
    size: string;
    color: string;
  }[];
  onDeleteUser: (a: string) => void;
  onSort?: (a: string, b: any) => void;
  hasMore?: boolean;
  setDeleteModal?: () => void;
  setIsModalOpen?: () => void;
  onUserClick?: () => void;
  deleteModal: { userId: string };
  deleteisloading?: boolean;
  fetchNextPage?: () => void;
  fetchPrevPage?: () => void;
  currentPage?: Number;
  type: string;
};

export const Table = ({
  headers = DEFAULT_HEADERS,
  data = [],
  onDeleteUser,
  onSort,
  setDeleteModal,
  deleteModal,
  onUserClick,
  deleteisloading,
  setIsModalOpen,
  fetchNextPage,
  fetchPrevPage,
  hasMore,
  currentPage,
  type,
}: UserTableType) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  // console.log(deleteModal);
  const getStatusStyle = (isActive: boolean) => {
    return isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const handleDeleteClick = () => {
    if (deleteModal.userId) {
      onDeleteUser(deleteModal?.userId);
    }
  };

  const handleSort = (key: any) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort?.(key, direction);
  };

  return (
    <div className="w-full min-h-[250px] items-center justify-center p-4 border py-8 bg-[#fff] rounded-lg flex flex-col">
      <div className="overflow-auto w-full flex flex-col gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search on your store!"
            className="w-32 lg:w-56 px-4 h-[40px] bg-[#f1f1f1] border rounded-xl font-work_font font-normal text-sm"
          />
        </div>
        <table className="w-full divide-y overflow-auto divide-gray-200">
          {/* bg-[#E8E8E3] */}
          <thead className=" ">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-4  py-4 text-left text-sm font-work_font font-normal text-[#777] capitalize tracking-wider cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase())}
                >
                  <div className="flex items-center">{header}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((tableData: any, rowIndex) => (
                <TableList key={rowIndex} type={type} tableData={tableData} />
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
                onClick={fetchPrevPage}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={fetchNextPage}
                disabled={hasMore}
                className="px-3 py-1 border rounded text-sm text-gray-500 hover:bg-gray-50 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <AnimatePresence mode="wait">
        {deleteModal?.isOpen && (
          <DeleteConfirmationModal
            isOpen={deleteModal?.isOpen}
            deleteisloading={deleteisloading}
            onClose={() =>
              setDeleteModal({ isOpen: false, userId: null, userName: "" })
            }
            onConfirm={handleDeleteClick}
            userName={deleteModal?.userName}
          />
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default Table;
