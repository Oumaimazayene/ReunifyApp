// store.js
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Slices/loginSlice";
import registerReducer from "../Slices/registerSlice";
import reservationReducer from "../Slices/reservationSlice";
const initialAuthToken = localStorage.getItem("authToken");

const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    reservations: reservationReducer,
  },
  preloadedState: {
    login: {
      authToken: initialAuthToken,
    },
  },
});

export default store;
