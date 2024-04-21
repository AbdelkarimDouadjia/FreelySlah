import React from "react";
import Home from "../pages/Home/Home.jsx";
import ContactUs from "../pages/Contact/ContactUs.jsx";
import AboutUS from "../pages/AboutUS/AboutUs.jsx";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/about" element={<AboutUS />} />
    </Routes>
  );
};

export default Routers;
