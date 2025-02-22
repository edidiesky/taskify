"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideRight } from "@/constants/framer";
import { offTaskModal } from "@/redux/slices/modalSlice";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { TaskFormData } from "@/constants";
import {
  useCreateTaskMutation,
  useGetSingleTaskQuery,
  useUpdateTaskMutation,
} from "@/redux/services/taskApi";
const TaskManagementModal = () => {
  const dispatch = useDispatch();

  const [formvalue, setFormValue] = useState({
    description: "",
    title: "",
    status: "",
    due_date: new Date(),
  });
  const { isTaskModalOpen, taskId } = useSelector(
    (state: { modal: { isTaskModalOpen: boolean; taskId?: number } }) =>
      state.modal
  );

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const onSelectChange = (value: string) => {
    setFormValue((prev) => ({ ...prev, status: value }));
  };

  const { data: taskDetail, isLoading } = useGetSingleTaskQuery(taskId, {
    skip: !taskId,
  });
  const [createTask] = useCreateTaskMutation();

  const [updateTask, { isLoading: updateTaskIsLoading }] =
    useUpdateTaskMutation();

  // Handler for creating a Task
  const handleCreateTask = async () => {
    try {
      await createTask(formvalue).unwrap();
      toast.success("Task Created succesfully!!");
      dispatch(offTaskModal(""));
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  // Handler for updating a Task

  const handleUpdateTask = async () => {
    try {
      await updateTask(formvalue).unwrap();
      toast.success("Task Updated succesfully!!");
      dispatch(offTaskModal(""));
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    }
  };

  useEffect(() => {
    if (taskDetail) {
      setFormValue({
        ...taskDetail,
      });
    }
  }, [taskDetail, setFormValue]);
  // console.log("taskDetail", taskDetail);
  console.log("formvalue", formvalue);
  // console.log("taskId", taskId)
  // console.log("isTaskModalOpen", isTaskModalOpen);
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,.3)] flex items-center justify-end z-[150] p-4">
      <motion.div
        variants={slideRight}
        initial="initial"
        animate={isTaskModalOpen ? "enter" : "exit"}
        exit={"exit"}
        className="bg-[#fff] w-full overflow-hidden rounded-xl border relative flex flex-col gap-8 lg:w-[550px] h-[95vh]"
      >
        {/* Header */}
        <div className="border-b w-full flex flex-col gap-8 p-4 px-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => dispatch(offTaskModal(""))}
                className="w-10 h-10 rounded-full flex items-center justify-center text-base hover:bg-[#fafafa]"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
              <h4 className="text-xl font-nueubig"> Manage Task</h4>
            </div>
            <div className="flex items-center gap-4 justify-end">
              {/* 6067FA */}
              <button
                aria-label="Close modal"
                onClick={() => dispatch(offTaskModal(""))}
                className="px-4 py-3 border text-sm rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={taskDetail ? handleUpdateTask : handleCreateTask}
                aria-label="Perform action"
                className="px-6 py-3 text-white bg-[#050506] cursor-pointer text-sm rounded-lg"
              >
                {taskDetail && !updateTaskIsLoading
                  ? "update task"
                  : !taskDetail && isLoading
                  ? "Saving Action.."
                  : taskDetail && updateTaskIsLoading
                  ? "Updating task..."
                  : "Save task"}
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 space-y-6 max-h-[calc(100vh-70px)] overflow-auto">
          <div className="w-full flex flex-col gap-4 p-4 px-4">
            {TaskFormData?.map((form, index) => {
              return (
                <label
                  key={index}
                  className="w-full flex flex-col gap-2 text-base"
                  htmlFor={form.label}
                >
                  <span>{form.label}</span>
                  {form.type === "textarea" ? (
                    <textarea
                      name={form.name}
                      onChange={onChange}
                      placeholder={form.placeholder}
                      value={formvalue[form.name]}
                      className="w-full h-[100px] text-sm rounded-md border p-4"
                    />
                  ) : (
                    <input
                      type={form.type}
                      name={form.name}
                      onChange={(e) => onChange(e)}
                      placeholder={form.placeholder}
                      value={formvalue[form.name]}
                      className="w-full h-[50px] text-sm rounded-md border px-4"
                    />
                  )}
                </label>
              );
            })}
            <div className="w-full grid grid-cols-1 gap-4">
              <div className="w-full flex flex-col gap-2 text-base">
                <span>Task Status</span>
                {/* onValueChange={onSelectChange} */}
                <Select onValueChange={onSelectChange}>
                  <SelectTrigger className="w-full h-[45px]">
                    <SelectValue
                      placeholder={formvalue?.status || "Select status"}
                    />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="absolute z-[999] bg-white"
                  >
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in_progress">In-Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="w-full flex text-base flex-col gap-1">
                    <span>Task Due Date</span>
                    <div className="w-full rounded-md cursor-pointer p-3 text-sm flex items-center border justify-between gap-1 font-normal">
                      {formvalue.due_date ? (
                        format(formvalue.due_date, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="h-4 w-4 opacity-50" />
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto p-0 z-[999] bg-white"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={formvalue.due_date}
                    onSelect={(date) => {
                      if (date) {
                        setFormValue((prev) => ({ ...prev, due_date: date }));
                      }
                    }}
                    disabled={(date) =>
                      date <
                        new Date(
                          new Date().setDate(new Date().getDate() - 1)
                        ) || date > new Date("2100-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TaskManagementModal;
