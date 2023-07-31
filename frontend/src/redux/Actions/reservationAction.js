import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const reservationAction = () => async (dispatch) => {
  try {
    const response = axios.get(`http://localhost:5000/rservation/reservations`);
    const data = await response.json();

    dispatch({ type: "FETCH_RESERVATIONS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FETCH_RESERVATIONS_FAILURE", payload: error });
  }
};
