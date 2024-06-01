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
//import MultiStep from "../pages/MultipStep/MultiStep.jsx";
// import { Routes, Route } from "react-router-dom";
import StepForm from "../pages/MultipStep/StepForm.jsx";
import T from "../pages/MultipStep/Test.jsx";
import StepForm1 from "../pages/MultipStep/StepForm1.jsx";
import HomeClient from "../pages/HomeClient/HomeClient.jsx";
import Overview from "../components/section/overview.jsx";
import TabSection from "../components/section/TabSection.jsx";
import GigForm from "../components/section/GigForm.jsx";
import CreateService from "../pages/Create Service/CreateService.jsx";
import JobPostingPage from "../pages/MultipStep/JobPostingPage.jsx";
import Settings from "../pages/Settings/Settings.jsx";
import ContactInfo from "../pages/Settings/components/ContactInfo.jsx";
import ProfileSettings from "../pages/Settings/components/ProfileSettings.jsx";
import BillingPayments from "../pages/Settings/components/BillingPayments.jsx";
import GetPaid from "../pages/Settings/components/GetPaid.jsx";
import PasswordSecurity from "../pages/Settings/components/PasswordSecurity.jsx";
import EditMyProfile from "../pages/Settings/EditMyProfile.jsx";
import ManageProducts from "../pages/ManageProducts/ManageProducts.jsx";
import ManageServices from "../pages/ManageServices/ManageServices.jsx";
import ManageProjects from "../pages/ManageProjects/ManageProjects.jsx";

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

  const Layout3 = () => {
    return (
      <>
        <NavbarF />
        <TabSection />
        <Outlet />
        <Footer />
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
        { path: "/gig/:id", element: <Service /> },
        { path: "/homeclient", element: <HomeClient /> },
        { path: "/overview", element: <Overview /> },
        // { path: "/welcome", element: <MultiStep /> },

        { path: "/gigform", element: <GigForm /> },
        { path: "/createservice", element: <CreateService /> },
        { path: "/jobposting", element: <JobPostingPage /> },
        { path: "/editmyprofile", element: <EditMyProfile /> },
        { path: "/service", element: <Service /> },
        { path: "/manageproducts", element: <ManageProducts /> },
        { path: "/manageservices", element: <ManageServices /> },
        { path: "/manageprojects", element: <ManageProjects /> },

        {
          path: "/settings",
          element: <Settings />,
          children: [
            { path: "contact-info", element: <ContactInfo /> },
            { path: "profile-settings", element: <ProfileSettings /> },
            { path: "billing-payments", element: <BillingPayments /> },
            { path: "get-paid", element: <GetPaid /> },
            { path: "password-security", element: <PasswordSecurity /> },
            /*{ path: "tax-information", element: <TaxInformation /> },
        { path: "my-teams", element: <MyTeams /> },
        { path: "connected-services", element: <ConnectedServices /> },
        { path: "notification-settings", element: <NotificationSettings /> },*/
          ],
        },
      ],
    },

    {
      path: "/",
      element: <Layout2 />,
      children: [
        { path: "/stepform", element: <StepForm /> },
        { path: "/t", element: <T /> },
      ],
    },
    {
      path: "/",
      element: <Layout3 />,
      children: [],
    },

    { path: "/welcome", element: <StepForm1 /> },

    { path: "/login", element: <Login /> },
    { path: "/signup", element: <Signup /> },
    { path: "/navbar", element: <Navbar /> },
    { path: "/header", element: <HeaderT /> },
    { path: "/navbarS", element: <NavbarS /> },
    { path: "/navbarT", element: <NavbarT /> },
    { path: "/tabsection", element: <Tabsection /> },
    /*{ path: "/service", element: <Service /> },*/
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
