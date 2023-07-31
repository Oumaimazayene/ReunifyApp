import { createSlice } from "@reduxjs/toolkit";
import { reservationAction } from "../Actions/reservationAction";

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: {
    [reservationAction.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [reservationAction.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
    },
    [reservationAction.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export default reservationSlice.reducer;
