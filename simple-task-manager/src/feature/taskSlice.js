import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },

    deleteTask: (state, action) => {
      return state.filter(
        (task) => task.id !== action.payload
      );
    },
  },
});

export const { addTask, deleteTask } =
  taskSlice.actions;

export default taskSlice.reducer;