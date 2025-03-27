import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img src="/logo.png" alt="Blood Donor Management Logo" className="logo" />
        <h2>Blood Donors Portal</h2>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/find-donors">Find Donors</Link>
        <Link to="/blood-info">Blood Info</Link>
        <Link to="/helpline">Helpline</Link>
        <Link to="/register">Register Donor</Link>
      </div>
    </nav>
  );
}

export default Navbar;
