/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer } from "./slices/courseSlice";
import { workoutsReducer } from "./slices/workoutsSlice";
import { profileReducer } from "./slices/userCourseSlice";
import * as api from "../http/config";
import { databaseURL } from "../http/http";
import { localStorageMiddleware } from "./slices/userSlice";
import authReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: authReducer,
    courses: coursesReducer,
    workouts: workoutsReducer,
    profile: profileReducer
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
