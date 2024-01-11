import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  tasks: TaskT[];
  isCreateTaskOpen: boolean;
  isDoneTasksOpen: boolean;
  isLoading: boolean;
}

const initialState: CounterState = {
  tasks: [],
  isCreateTaskOpen: false,
  isDoneTasksOpen: false,
  isLoading: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTasks: (state, action: PayloadAction<TaskT[]>) => {
      state.tasks = action.payload;
    },
    addTask: (state, action: PayloadAction<TaskT>) => {
      const newTask = action.payload;
      state.tasks.push(newTask);
    },
    updTask: (state, action: PayloadAction<TaskT>) => {
      const newTask = action.payload;
      const oldTaskI = state.tasks.findIndex((old) => old.id === newTask.id);
      state.tasks.splice(oldTaskI, 1, newTask);
    },
    dltTask: (state, action: PayloadAction<string>) => {
      const dltId = action.payload;
      const dltTaskI = state.tasks.findIndex((old) => old.id === dltId);
      state.tasks.splice(dltTaskI, 1);
    },

    setIsCreateTaskOpen(state, action: PayloadAction<boolean>) {
      state.isCreateTaskOpen = action.payload;
    },
    setIsDoneTasskOpen(state, action: PayloadAction<boolean>) {
      state.isDoneTasksOpen = action.payload;
    },
  },
});

export const {
  setIsLoading,
  setTasks,
  addTask,
  updTask,
  dltTask,
  setIsCreateTaskOpen,
  setIsDoneTasskOpen,
} = tasksSlice.actions;

export default tasksSlice.reducer;
