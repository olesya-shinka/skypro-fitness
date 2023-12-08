/* eslint-disable prettier/prettier */
import { selectCourses } from "./course";
import { createSelector } from "@reduxjs/toolkit";

export const selectWorkoutsInfo = (state) => ({
  status: state.workouts.status,
  error: state.workouts.error,
  qty: state.workouts.list.length
});

export const selectWorkouts = (state) => state.workouts.list;
export const selectCurrentId = (state) => state.workouts.currentId;

export const selectCurrentWorkout = createSelector(
  [selectCourses, selectCurrentId, selectWorkouts],
  (courses, id, workouts) => {
    const idsWorkouts = courses?.filter((c) => c._id.includes(id));

    return workouts.filter((w) => idsWorkouts[0].workout.includes(w._id));
  }
);
