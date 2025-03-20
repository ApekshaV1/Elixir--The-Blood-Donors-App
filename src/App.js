import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/Navbar";
import Home from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/Home";
import FindDonors from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/FindDonors.js";
import BloodInfo from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/BloodInfo";
import Helpline from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/Helpline";
import Footer from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-donors" element={<FindDonors />} />
        <Route path="/blood-info" element={<BloodInfo />} />
        <Route path="/helpline" element={<Helpline />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
