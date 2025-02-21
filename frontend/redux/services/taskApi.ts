import { TASK_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const TaskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createTask: builder.mutation({
      query: ({ storeid, ...formdata }) => ({
        method: "POST",
        body: formdata,
        credentials: "include",
        url: `${TASK_URL}/${storeid}`,
      }),
    }),
    getSingleTask: builder.query({
      query: (data) => ({
        method: "GET",
        credentials: "include",
        url: `${TASK_URL}/${data?.id}`,
      }),
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        method: "PUT",
        body: data,
        credentials: "include",
        url: `${TASK_URL}/${data?.id}`,
      }),
    }),
    deleteTask: builder.mutation({
      query: (data) => ({
        method: "DELETE",
        credentials: "include",
        url: `${TASK_URL}/${data?.id}`,
      }),
    }),
  }),
});

export const {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
  useGetSingleTaskQuery,
  useCreateTaskMutation,
} = TaskApiSlice;
