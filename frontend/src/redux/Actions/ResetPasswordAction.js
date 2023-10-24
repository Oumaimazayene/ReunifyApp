import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const ResetPasswordAction = createAsyncThunk(
  "auth/reset-password",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:5000/auth/reset-password`,
        { email },
        config
      );
      localStorage.setItem("userToken", data.Token);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
