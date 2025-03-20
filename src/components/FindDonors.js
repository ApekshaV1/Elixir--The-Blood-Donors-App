import React, { useState, useEffect } from "react";
import DonorCard from " C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/DonorCard.js ";

function FindDonors() {
  const [donors, setDonors] = useState([]);
  const [bloodType, setBloodType] = useState("");
  const [location, setLocation] = useState("");
  const [filteredDonors, setFilteredDonors] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedDonors = data.map(user => ({
          name: user.name,
          bloodType: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"][Math.floor(Math.random() * 8)], 
          location: user.address.city
        }));

        // ✅ Fetch locally registered donors
        const savedDonors = JSON.parse(localStorage.getItem("donors")) || [];

        // ✅ Combine both API and local data
        const combinedDonors = [...formattedDonors, ...savedDonors];
        setDonors(combinedDonors);
        setFilteredDonors(combinedDonors);
      })
      .catch((error) => console.error("Error fetching donor data:", error));
  }, []);

  const handleSearch = () => {
    const filtered = donors.filter(
      (donor) =>
        (bloodType ? donor.bloodType === bloodType : true) &&
        (location ? donor.location.toLowerCase().includes(location.toLowerCase()) : true)
    );
    setFilteredDonors(filtered);
  };

  return (
    <div className="find-donors">
      <h2>Find a Blood Donor</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={bloodType} onChange={(e) => setBloodType(e.target.value)}>
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
      <button onClick={handleSearch}>Search</button>

      <div className="donor-list">
        {filteredDonors.map((donor, index) => (
          <DonorCard key={index} donor={donor} />
        ))}
      </div>
    </div>
  );
}

export default FindDonors;
