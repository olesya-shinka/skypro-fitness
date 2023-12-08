/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "./slices/courseSlice";
import { workoutsReducer } from "./workouts/workoutsSlice";
import databaseURL from "../firebase";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    workouts: workoutsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          databaseURL,
        }
      }
    })
});
