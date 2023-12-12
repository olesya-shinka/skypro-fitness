import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseList: [],
  selectedCourse: {},
  workoutList: [],
  selectedWorkout: "",
  progress: {}
};

export const newCourseSlice = createSlice({
  name: "newCourseSlice",
  initialState,
  reducers: {
    setCourseList: (state, action) => {
      state.courseList = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key]
      }));
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    setWorkoutList: (state, action) => {
      state.workoutList = Object.keys(action.payload).map((key) => ({
        id: key,
        ...action.payload[key]
      }));
    },
    setSelectedWorkout: (state, action) => {
      state.selectedWorkout = action.payload;
    },
    setPracticeProgress: (state, action) => {
      state.progress = action.payload;
    }
  }
});

export const {
  setCourseList,
  setSelectedCourse,
  setWorkoutList,
  setSelectedWorkout,
  setPracticeProgress
} = newCourseSlice.actions;

export default newCourseSlice.reducer;
