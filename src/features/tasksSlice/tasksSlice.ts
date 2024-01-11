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
    setIsCreateTaskOpen(state, action: PayloadAction<boolean>) {
      state.isCreateTaskOpen = action.payload;
    },
    decrement: (state) => {},

    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { addTask, setIsCreateTaskOpen, decrement, incrementByAmount } =
  tasksSlice.actions;

export default tasksSlice.reducer;
