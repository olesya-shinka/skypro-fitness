/* eslint-disable prettier/prettier */
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { workoutApi } from "../store/slices/workoutsSlice";
import loadingReducer from "./slices/loadingSlice";
import selectedWorkoutReducer from "./slices/selectWorkoutSlice";
import userCoursesReducer from "./slices/userCoursesSlice";
import workoutsReducer from "./slices/workoutsSlice";
import selectedTrainingReducer from "./slices/selectTrainSlice";

export const store = configureStore({
  reducer: {
    [workoutApi.reducerPath]: workoutApi.reducer,
    loading: loadingReducer,
    selectedWorkout: selectedWorkoutReducer,
    userCourses: userCoursesReducer,
    workouts: workoutsReducer,
    selectedTraining: selectedTrainingReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(workoutApi.middleware)
});

setupListeners(store.dispatch);
