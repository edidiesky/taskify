"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";

import {
  useDeleteTaskMutation,
  useGetSingleTaskQuery,
} from "@/redux/services/taskApi";
import { slide } from "@/constants/framer";
import { offDeleteTaskModal } from "@/redux/slices/modalSlice";

export const DeleteConfirmationModal = () => {
  const dispatch = useDispatch();
  const { isdeleteTaskmodal, taskId } = useSelector(
    (state: { modal: { isdeleteTaskmodal: boolean; taskId: number } }) =>
      state.modal
  );
  const { data: taskDetail } = useGetSingleTaskQuery(taskId, {
    skip: !taskId,
  });

  const [deleteTask, { isLoading: deleteTaskIsLoading }] =
    useDeleteTaskMutation();

  // Handler for deleting a Task
  const handleDeleteTask = async () => {
    try {
      await deleteTask(taskDetail?.id).unwrap();
      toast.success("Task Deleted succesfully!!");
      dispatch(offDeleteTaskModal(""));
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,.3)] flex items-center justify-center z-[150] p-4">
      <motion.div
        variants={slide}
        initial="initial"
        animate={isdeleteTaskmodal ? "enter" : "exit"}
        exit={"exit"}
        className="bg-[#fff] w-full rounded-xl border relative p-4 flex flex-col gap-8 lg:w-[450px]"
      >
        <div className="py-2 px-4">
          <h3 className="text-xl">
            Are you sure you want to delete &rdquo;{taskDetail?.title}&rdquo; ?
          </h3>
          <p className="text-base text-gray-500 mt-1">
            This action cannot be undone.
          </p>
        </div>
        <div className="flex px-6 pt-4 text-sm border-t w-full justify-end space-x-3">
          <button
            onClick={() => dispatch(offDeleteTaskModal(""))}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            disabled={deleteTaskIsLoading}
            onClick={handleDeleteTask}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            {deleteTaskIsLoading ? "Deleting in progress..." : "Delete"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
