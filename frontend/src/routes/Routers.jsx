import React from "react";
import Home from "../pages/Home/Home.jsx";
import ContactUs from "../pages/Contact/ContactUs.jsx";
import AboutUS from "../pages/AboutUS/AboutUs.jsx";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import { Routes, Route } from "react-router-dom";
import FindJob from "../pages/FindJob/FindJob.jsx";
import FindTalent from "../pages/FindTalent/FindTalent.jsx";
import Message from "../pages/Message/Message.jsx";
import FindProduct from "../pages/FindProduct/FindProduct.jsx";
import FindService from "../pages/FindService/FindService.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/about" element={<AboutUS />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/findJob" element={<FindJob />} />
      <Route path="/findTalent" element={<FindTalent />} />
      <Route path="/findProduct" element={<FindProduct />} />
      <Route path="/findService" element={<FindService />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
};

export default Routers;
