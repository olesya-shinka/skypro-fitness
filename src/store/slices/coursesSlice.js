import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  PageCourses: [],
};


export const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    getPageCourses(state, action) {
        state.courses = action.payload.courses;
      },
  },
});

export const { getPageCourses } = courseSlice.actions;
export default courseSlice.reducer;
