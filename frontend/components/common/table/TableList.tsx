import React from "react";
import moment from "moment";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { onTaskModal, onDeleteTaskModal } from "@/redux/slices/modalSlice";
import { useUpdateTaskMutation } from "@/redux/services/taskApi";
//  Functional component for the table list
export default function TableList({
  tableData,
}: {
  tableData: {
    title: string;
    due_date: string;
    id: string;
    status: string;
    description: string;
  };
}) {
  // console.log("tableData", tableData);
  const dispatch = useDispatch();

  const [updateTask] = useUpdateTaskMutation();

  const handleMarkeTaskCompleted = async (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    try {
      await updateTask({ ...tableData, status: "compeleted" }).unwrap();
      toast.success("Task Updated succesfully!!");
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };
  return (
    <>
      {/* animating the task management modal */}

      <tr
        className={`hover:bg-gray-100 bg-[#f2f2f2] cursor-pointer transition-colors`}
        onClick={() => {
          dispatch(onTaskModal(tableData?.id));
        }}
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
          {moment(tableData?.due_date)?.format("DD MMM YYYY")}
        </td>
        <td className="px-6 py-4 border-b whitespace-nowrap text-sm lg:text-base text-[#777]">
          <button
            className="transition-colors p-2 text-sm bg-[#f8f8f8] hover:bg-[#e8e8e3d0] rounded-full"
            aria-label="Edit tableData"
            onClick={handleMarkeTaskCompleted}
          >
            Mark as Completed
          </button>
        </td>
        <td
          className="px-6 py-4 whitespace-nowrap  border-b text-right text-sm lg:text-base"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-1">
            <button
              className="transition-colors p-3 hover:bg-[#e8e8e3d0] rounded-full"
              aria-label="Edit tableData"
              onClick={() => {
                dispatch(onTaskModal(tableData?.id));
              }}
            >
              <FiEdit2 className="w-4 h-4" />
            </button>
            <button
              className="text-red-600 hover:text-red-900 p-3 rounded-full hover:bg-red-50 transition-colors"
              onClick={() => {
                dispatch(onDeleteTaskModal(tableData?.id));
              }}
              aria-label="Delete tableData"
            >
              <FiTrash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
