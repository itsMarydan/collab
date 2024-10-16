import React from "react";
import FlightBookingForm from "../FlightBookingForm";

const Booking: React.FC = () => {
  return (
    <div className="booking-page">
      <h2>Book Your Flight</h2>
      <FlightBookingForm />
    </div>
  );
};

export default Booking;
