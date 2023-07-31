import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reservationAction } from "../../redux/Actions/reservationAction";
import axios from "axios";

const Reservations = () => {
  const dispatch = useDispatch();
  const reservationState = useSelector((state) => state.reservation);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/rservation/reservations"
        );
        const data = response.data;
        dispatch(reservationAction(data));
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    fetchReservations();
  }, [dispatch]);

  if (!reservationState || !reservationState.userInfo) {
    return <div>Loading...</div>;
  }

  const reservationsArray = Array.isArray(reservationState.userInfo)
    ? reservationState.userInfo
    : [];

  if (reservationState.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {reservationsArray.map((reservation) => (
        <div key={reservation.id}>
          <p>Title: {reservation.title}</p>
          <p>Location: {reservation.location}</p>
          <p>Start Date: {reservation.startDate}</p>
          <p>End Date: {reservation.endDate}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Reservations;
