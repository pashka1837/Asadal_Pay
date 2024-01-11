import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../features/tasksSlice/tasksSlice";
import { tasksApi } from "../services/tasksApi";

export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tasksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
