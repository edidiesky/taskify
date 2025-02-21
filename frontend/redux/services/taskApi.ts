import { TASK_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const TaskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: (formdata) => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        return {
          method: "POST",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}`,
        };
      },
      invalidatesTags: ["Task"],
    }),
    getAllTask: builder.query({
      query: (page = 1) => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        return {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}?page=${page}`,
        };
      },
      providesTags: ["Task"],
    }),
    getSingleTask: builder.query({
      query: (taskid) => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        return {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}/${taskid}`,
        };
      },
    }),
    updateTask: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        return {
          method: "PUT",
          body: data,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}/${data?.id}`,
        };
      },
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token")?.replace(/"/g, "");
        return {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}/${data?.id}`,
        };
      },
    }),
  }),
});

export const {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useGetSingleTaskQuery,
  useGetAllTaskQuery,
  useCreateTaskMutation,
} = TaskApiSlice;
