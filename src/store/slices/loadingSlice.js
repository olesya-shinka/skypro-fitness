/* eslint-disable prettier/prettier */
import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: true,
  reducers: {
    setLoading: (state, action) => action.payload
  }
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
