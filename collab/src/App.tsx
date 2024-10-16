import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Booking from "./components/pages/Booking";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Route>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Route>
  );
};

export default App;
