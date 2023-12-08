/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

const selectedWorkoutSlice = createSlice({
  name: "selectedWorkout",
  initialState: null,
  reducers: {
    setSelectedWorkout: (state, action) => action.payload,
    clearSelectedWorkout: (state) => null
  }
});

export const { setSelectedWorkout, clearSelectedWorkout } = selectedWorkoutSlice.actions;

export default selectedWorkoutSlice.reducer;
