/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const fetchWorkouts = createAsyncThunk("workouts/fetchWorkouts", async (course) => {
  const response = await fetch(
    `https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/`
  );
  const data = await response.json();
  return Object.values(data[course].workout);
});

export const workoutsSlice = createSlice({
  name: "workouts",
  initialState: { data: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWorkouts.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchWorkouts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(fetchWorkouts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  }
});

export const workoutApi = createApi({
  reducerPath: "workoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/"
  }),
  endpoints: (builder) => ({
    getWorkoutById: builder.query({
      query: (id) => `courses/${id}.json`
    })
  })
});

export const { useGetWorkoutByIdQuery } = workoutApi;

export default workoutsSlice.reducer;
