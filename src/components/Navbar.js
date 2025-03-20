import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Blood Donor Management</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/donors">Find Donors</Link>
        <Link to="/info">Blood Info</Link>
        <Link to="/helpline">Helpline</Link>
        <Link to="/register">Register Donor</Link>
      </div>
    </nav>
  );
}

export default Navbar;
