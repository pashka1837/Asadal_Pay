import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  isCreateTaskOpen: boolean;
}

const initialState: CounterState = {
  isCreateTaskOpen: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setIsCreateTaskOpen(state, action: PayloadAction<boolean>) {
      state.isCreateTaskOpen = action.payload;
    },
  },
});

export const { setIsCreateTaskOpen } = tasksSlice.actions;

export default tasksSlice.reducer;
