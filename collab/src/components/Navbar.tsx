// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/booking">Book a Flight</Link>
    </nav>
  );
};

export default Navbar;
