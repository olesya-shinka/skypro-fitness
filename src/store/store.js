/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { coursesReducer } from "./slices/courseSlice";
import { workoutsReducer } from "./slices/workoutsSlice";
import { profileReducer } from "./slices/userCourseSlice";
import * as api from "../http/config";
import { databaseURL } from "../http/http";

export const store = configureStore({
  reducer: {
    user: userReducer,
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
    })
});
