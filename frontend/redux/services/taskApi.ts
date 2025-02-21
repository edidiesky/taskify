import { TASK_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const TaskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: ({ storeid, ...formdata }) => {
        const token = localStorage.getItem("token")?.replace(/"/g, '')
        return {
          method: "POST",
          body: formdata,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}/${storeid}`,
        };
      },
    }),
    getAllTask: builder.query({
      query: (_data) => {
        const token = localStorage.getItem("token")?.replace(/"/g, '')
        return {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}`,
        };
      },
    }),
    getSingleTask: builder.query({
      query: (data) => {
        const token = localStorage.getItem("token")?.replace(/"/g, '')
        return {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          url: `${TASK_URL}/${data?.id}`,
        };
      },
    }),
    updateTask: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token")?.replace(/"/g, '')
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
    }),
    deleteTask: builder.mutation({
      query: (data) => {
        const token = localStorage.getItem("token")?.replace(/"/g, '')
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
