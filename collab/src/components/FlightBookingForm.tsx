import React, { useState } from "react";

const FlightBookingForm: React.FC = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking from ${from} to ${to} on ${date}`);
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Book Flight</button>
    </form>
  );
};

export default FlightBookingForm;
