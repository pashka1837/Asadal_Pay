import {
  SkipToken,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { setIsLoading, setTasks } from "../features/tasksSlice/tasksSlice";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<TaskT[], void>({
      query: () => ({
        url: `api/tasks`,
      }),
      providesTags: ["Tasks"],
      transformResponse: (response: TaskT[]) => {
        return response;
      },
    }),
    postTasks: builder.mutation<TaskT, TaskT>({
      query: (task) => ({
        url: `api/tasks`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            draft.push(task);
          })
        );
        try {
          await queryFulfilled;
        } catch (e) {
          patchResult.undo();
        }
      },
    }),
    deleteTask: builder.mutation<string, string | void>({
      query: (taskID) => ({
        url: `api/tasks`,
        method: "DELETE",
        body: taskID,
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(taskID, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.filter((task) => task.id !== taskID);
          })
        );
        try {
          await queryFulfilled;
        } catch (e) {
          patchResult.undo();
        }
      },
    }),
    updTask: builder.mutation<string, TaskT>({
      query: (task) => ({
        url: `api/tasks`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            const newAr = draft.filter((oldTask) => oldTask.id !== task.id);
            newAr.push(task);
            return newAr;
          })
        );
        try {
          await queryFulfilled;
        } catch (e) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  usePostTasksMutation,
  useDeleteTaskMutation,
  useUpdTaskMutation,
} = tasksApi;
export const useQueryStateResult = () =>
  tasksApi.endpoints.getTasks.useQueryState();
