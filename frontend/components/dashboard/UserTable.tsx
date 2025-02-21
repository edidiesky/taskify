"use client";
import { AnimatePresence } from "framer-motion";

import { useState } from "react";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { DeleteConfirmationModal } from "./DeleteConfirmationModal";

const DEFAULT_HEADERS = ["User Info", "Location", "Phone", "Status", "Actions"];

export const UserTable = ({
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
}) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  // console.log(deleteModal);
  const getStatusStyle = (isActive) => {
    return isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  const handleDeleteClick = () => {
    if (deleteModal.userId) {
      onDeleteUser(deleteModal.userId);
    }
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    onSort?.(key, direction);
  };

  return (
    <div className="w-full">
      <div className="overflow-auto w-full flex flex-col gap-8">
        <table className="w-full divide-y overflow-auto divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-sm text-[#777] capitalize tracking-wider"
              >
                <input
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                />
              </th>
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-nueuthin text-[#777] capitalize tracking-wider cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase())}
                >
                  <div className="flex items-center">
                    {header}
                    {index < headers.length - 1 && (
                      <span className="ml-1 flex flex-col">
                        <IoIosArrowUp
                          className={`h-3 w-3 ${
                            sortConfig.key === header.toLowerCase() &&
                            sortConfig.direction === "asc"
                              ? "text-indigo-600"
                              : "text-gray-400"
                          }`}
                        />
                        <IoIosArrowDown
                          className={`h-3 w-3 -mt-1 ${
                            sortConfig.key === header.toLowerCase() &&
                            sortConfig.direction === "desc"
                              ? "text-indigo-600"
                              : "text-gray-400"
                          }`}
                        />
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white text-sm divide-y divide-gray-200">
            {data.length > 0 ? (
              data.map((user, rowIndex) => (
                <tr
                  key={user?.id}
                  className={`${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100 cursor-pointer transition-colors`}
                  onClick={() => onUserClick(user)} // Add click handler here
                >
                  <td
                    className="px-6 py-4 whitespace-nowrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 relative">
                        <Image
                          className="h-10 w-10 rounded-full object-cover"
                          src={user?.photo_url || "/default-avatar.png"}
                          alt={`${user?.name}'s avatar`}
                          width={40}
                          height={40}
                          priority
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm">{user?.name}</div>
                        <div className="text-sm text-gray-500">
                          {user?.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{user?.country_of_residence}</div>
                    <div className="text-sm text-gray-500">
                      {user?.city_of_residence}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user?.phone_number}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 rounded-full ${getStatusStyle(
                        user?.isActive
                      )}`}
                    >
                      {user?.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-right text-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="text-indigo-600 hover:text-indigo-900 mr-2 p-1 rounded-full hover:bg-indigo-50 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingUserId(user?.id);
                        setIsModalOpen(true);
                        onUserClick(user);
                        // toast.success("Edit functionality coming soon!");
                      }}
                      aria-label="Edit user"
                    >
                      <FiEdit2 className="w-4 h-4" />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors"
                      onClick={(e) => {
                        setDeleteModal({
                          isOpen: true,
                          userId: user?.id,
                          userName: user?.name,
                        });
                      }}
                      aria-label="Delete user"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length + 1}
                  className="px-6 py-12 text-center text-lg font-nueubig"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="p-6 bg-white border-t">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Showing {data.length} Customers
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
      <AnimatePresence mode="wait">
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
      </AnimatePresence>
    </div>
  );
};

export default UserTable;
