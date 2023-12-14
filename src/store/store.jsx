/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import * as api from "../http/config";
import { databaseURL } from "../http/http";
import { localStorageMiddleware } from "./slices/userSlice";
import authReducer from "./slices/userSlice";
import newCourseReducer from "./slices/courseWorkoutSlise";

export const store = configureStore({
  reducer: {
    user: authReducer,
    exercises: newCourseReducer,
    newCourse: newCourseReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          databaseURL,
          api
        }
      }
    }).concat(localStorageMiddleware)
});
