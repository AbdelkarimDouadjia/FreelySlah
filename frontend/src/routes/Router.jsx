import React from "react";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import HeaderT from "../components/HeaderT/HeaderT.jsx";
import NavbarS from "../components/NavbarS/NavbarS.jsx";
import NavbarT from "../components/NavbarT/NavbarT.jsx";
import Tabsection from "../components/section/TabSection.jsx";
import Service from "../pages/Service/Service.jsx";
import Breadcumb from "../components/Breadcumb/Breadcumb.jsx";
import NavbarF from "../components/NavbarF/NavbarF.jsx";
import Footer from "../components/section/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import MultiStep from "../pages/MultipStep/MultiStep.jsx";
// import { Routes, Route } from "react-router-dom";
import StepForm from "../pages/MultipStep/StepForm.jsx";
import T from "../pages/MultipStep/Test.jsx";
import StepForm1 from "../pages/MultipStep/StepForm1.jsx";

const Router = () => {
  const Layout = () => {
    return (
      <>
        <NavbarF />
        <Outlet />
        <Footer />
      </>
    );
  };

  const Layout2 = () => {
    return (
      <>
        <NavbarF />
        <Outlet />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/service", element: <Service /> },
        // { path: "/welcome", element: <MultiStep /> },
      ],
    },
    {
      path: "/",
      element: <Layout2 />,
      children: [
        { path: "/welcome", element: <MultiStep /> },
        { path: "/stepform", element: <StepForm /> },
        { path: "/t", element: <T /> },
      ],
    },

    { path: "/stepform1", element: <StepForm1 /> },

    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/navbar", element: <Navbar /> },
    { path: "/header", element: <HeaderT /> },
    { path: "/navbarS", element: <NavbarS /> },
    { path: "/navbarT", element: <NavbarT /> },
    { path: "/tabsection", element: <Tabsection /> },
    { path: "/service", element: <Service /> },
    { path: "/breadcumb", element: <Breadcumb /> },
    { path: "/navbarF", element: <NavbarF /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
