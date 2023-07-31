import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/LoginSlice";
import registerReducer from "./Slices/RegisterSlice";
import reservationReducer from "./Slices/reservationSlice";

const store = configureStore({
  reducer: {
    login: authReducer,
    register: registerReducer,
    reservations: reservationReducer,
  },
});

export default store;
