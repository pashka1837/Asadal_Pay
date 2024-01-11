import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

interface CounterState {
  tasks: TaskT[];
  curTask: string | null;
  isCreateTaskOpen: boolean;
}

const initialState: CounterState = {
  tasks: [],
  curTask: null,
  isCreateTaskOpen: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskT>) => {
      const newTask = action.payload;
      state.tasks.push(newTask);
      console.log(newTask);
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
  },
});

export const { addTask, setIsCreateTaskOpen, updTask, dltTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
