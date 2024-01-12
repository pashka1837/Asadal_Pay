import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query<TaskT[], void>({
      query: () => ({
        url: `api/tasks`,
      }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map((task) => ({ type: "Task" as const, id: task.id })),
              "Task",
            ]
          : ["Task"],
    }),
    postTasks: builder.mutation<TaskT, TaskT>({
      query: (task) => ({
        url: `api/tasks`,
        method: "POST",
        body: task,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Task" as const, id: arg.id },
      ],
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            draft.push(task);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
    }),
    deleteTask: builder.mutation<string, string>({
      query: (taskID) => ({
        url: `api/tasks`,
        method: "DELETE",
        body: taskID,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Task" as const, id: arg },
      ],
      async onQueryStarted(taskID, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            return draft.filter((task) => task.id !== taskID);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
    }),
    updTask: builder.mutation<string, TaskT>({
      query: (task) => ({
        url: `api/tasks`,
        method: "PATCH",
        body: task,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Task" as const, id: arg.id },
      ],
      async onQueryStarted(task, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tasksApi.util.updateQueryData("getTasks", undefined, (draft) => {
            const oldTaskIndex = draft.findIndex(
              (oldTask) => oldTask.id === task.id
            );
            draft.splice(oldTaskIndex, 1, task);
          })
        );
        queryFulfilled.catch(patchResult.undo);
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
