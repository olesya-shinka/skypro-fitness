/* eslint-disable prettier/prettier */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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

export default workoutsSlice.reducer;
