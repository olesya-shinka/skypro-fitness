/* eslint-disable prettier/prettier */
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectCourses } from "../selectors/course";
import { loadWorkouts } from "../workoutsActions";

const initialState = {
  status: "idle",
  error: null,
  list: {},
  currentId: ""
};

const workoutsSlice = createSlice({
  name: "workouts",
  initialState,
  reducers: {
    setCurrentId(state, action) {
      state.currentId = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadWorkouts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadWorkouts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(loadWorkouts.fulfilled, (state, action) => {
        state.status = "received";
        state.list = Object.values(action.payload);
      });
  }
});

export const workoutsReducer = workoutsSlice.reducer;
export const { setCurrentId } = workoutsSlice.actions;

//selectors

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
