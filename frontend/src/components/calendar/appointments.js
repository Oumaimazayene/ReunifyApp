import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Reservations = () => {
  const reservationState = useSelector((state) => state.reservation);
  useEffect(() => {}, []);
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
