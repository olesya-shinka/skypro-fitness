/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

const selectedTrainingSlice = createSlice({
  name: "selectedTraining",
  initialState: null,
  reducers: {
    selectTraining: (state, action) => action.payload
  }
});

export const { selectTraining } = selectedTrainingSlice.actions;

export default selectedTrainingSlice.reducer;
