import { createSlice } from "@reduxjs/toolkit";
import { LoginAction } from "../Actions/LoginAction";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
};

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [LoginAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [LoginAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload.Token;
    },
    [LoginAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default LoginSlice.reducer;
