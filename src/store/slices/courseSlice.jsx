/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";
import { loadingSlice } from "./loadingSlice";

const initialState = {
  status: "idle",
  error: null,
  list: []
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadingSlice.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadingSlice.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(loadingSlice.fulfilled, (state, action) => {
        state.status = "received";
        state.list = Object.values(action.payload);
      });
  }
});

export const coursesReducer = coursesSlice.reducer;

export const { getCourses, getCourseName } = coursesSlice.actions;
export default coursesSlice.reducer;
