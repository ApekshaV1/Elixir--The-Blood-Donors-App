import React, { useState } from "react";

function RegisterDonor() {
  const [name, setName] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const newDonor = { name, bloodType, location };
    const existingDonors = JSON.parse(localStorage.getItem("donors")) || [];
    existingDonors.push(newDonor);
    localStorage.setItem("donors", JSON.stringify(existingDonors));

    setMessage("Donor registered successfully!");
    setName("");
    setBloodType("");
    setLocation("");
  };

  return (
    <div className="register-donor">
      <h2>Register as a Blood Donor</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={bloodType} onChange={(e) => setBloodType(e.target.value)} required>
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterDonor;
