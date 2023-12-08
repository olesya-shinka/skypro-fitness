/* eslint-disable prettier/prettier */
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadCourses = createAsyncThunk(
  "courses/all",
  async (_, { extra: { apiClient, api }, rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        },
        skipAuth: true
      };
      const response = await apiClient.get(api.COURSES, config);
      if (response.statusText !== "OK") {
        throw new Error("Что-то пошло не так");
      }
      const { data } = await response;

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
