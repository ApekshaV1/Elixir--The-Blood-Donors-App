import React from "react";
import "../styles.css";

function DonorCard({ donor }) {
  return (
    <div className="donor-card">
      <h3>{donor.name}</h3>
      <p>Blood Type: {donor.bloodType}</p>
      <p>Location: {donor.location}</p>
    </div>
  );
}

export default DonorCard;
