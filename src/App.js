import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FindDonors from "./components/FindDonors";
import BloodInfo from "./components/BloodInfo";
import Helpline from "./components/Helpline";
import RegisterDonor from "./components/RegisterDonor";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/blood-info" element={<BloodInfo />} />
        <Route path="/helpline" element={<Helpline />} />
        <Route path="/register" element={<RegisterDonor />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
