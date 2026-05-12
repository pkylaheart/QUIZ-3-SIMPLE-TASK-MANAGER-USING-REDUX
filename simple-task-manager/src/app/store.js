import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feature/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});