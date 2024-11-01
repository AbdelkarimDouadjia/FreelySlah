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
import HomeFreelancer from "../pages/HomeFreelancer/HomeFreelancer.jsx";
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
import Project from "../pages/Project/Project.jsx";
import ShopCart from "../pages/Shop/ShopCart/ShopCart.jsx";
import ShopCheckOut from "../pages/Shop/ShopCheckOut/ShopCheckOut.jsx";
import ShopOrder from "../pages/Shop/ShopOrder/ShopOrder.jsx";
import Invoice from "../pages/Shop/Invoice/Invoice.jsx";
import SavedProjects from "../pages/SavedProjects/SavedProjects.jsx";
import FindJob from "../pages/FindJob/FindJob.jsx";
import FindTalent from "../pages/FindTalent/FindTalent.jsx";
import Message from "../pages/Message/Message.jsx";
import FindProduct from "../pages/FindProduct/FindProduct.jsx";
import FindService from "../pages/FindService/FindService.jsx";
import ContactUs from "../pages/Contact/ContactUs.jsx";
import AboutUS from "../pages/AboutUS/AboutUs.jsx";
import Store from "../pages/Store/Store.jsx";
import Product from "../pages/Product/Product.jsx";
import BecomeSeller from "../pages/BecomeSeller/BecomeSeller.jsx";
import Proposals from "../pages/Proposals/Proposals.jsx";
import ProjectProgress from "../pages/ProjectProgress/ProjectProgress.jsx";
import { RequireAuth } from "../layout/Layout.jsx";
import { RequireAuthWelcome } from "../layout/Layout.jsx";
import UpdateProject from "../pages/UpdateProject/UpdateProject.jsx";
import UpdateService from "../pages/UpdateService/UpdateService.jsx";
import ServiceProject from "../pages/Service/ServiceProject.jsx";
import Pay from "../pages/Pay/Pay.jsx";
import Success from "../pages/Pay/Success.jsx";

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
        //{ path: "/gig/:id", element: <Service /> },

        { path: "/overview", element: <Overview /> },
        // { path: "/welcome", element: <MultiStep /> },

        { path: "/gigform", element: <GigForm /> },
        { path: "/createservice", element: <CreateService /> },
        { path: "updateservice/:id", element: <UpdateService /> },
        { path: "/createproject", element: <JobPostingPage /> },
        { path: "/updateproject/:id", element: <UpdateProject /> },
        { path: "/editmyprofile", element: <EditMyProfile /> },
        { path: "/service/:id", element: <Service /> },
        { path: "/manageproducts", element: <ManageProducts /> },
        { path: "/manageservices", element: <ManageServices /> },
        { path: "/manageprojects", element: <ManageProjects /> },
        { path: "/project/:id", element: <Project /> },
        { path: "/shopcart", element: <ShopCart /> },
        { path: "/shopcheckout", element: <ShopCheckOut /> },
        { path: "/shoporder", element: <ShopOrder /> },
        { path: "/savedprojects", element: <SavedProjects /> },
        { path: "/product", element: <Product /> },
        { path: "/service-project", element: <ServiceProject /> },
        { path: "/pay/:id", element: <Pay /> },
        { path: "/success", element: <Success /> },

        { path: "/findjob", element: <FindJob /> },
        { path: "/findtalent", element: <FindTalent /> },
        { path: "/message", element: <Message /> },
        { path: "/findproduct", element: <FindProduct /> },
        { path: "/findservice", element: <FindService /> },
        { path: "/store", element: <Store /> },
        { path: "/contactus", element: <ContactUs /> },
        { path: "/aboutus", element: <AboutUS /> },
        { path: "/become-seller", element: <BecomeSeller /> },
        { path: "/proposals", element: <Proposals /> },
        { path: "/projectprogress", element: <ProjectProgress /> },

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

    { path: "/invoice", element: <Invoice /> },

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
    { path: "/welcome", element: <StepForm1 /> },

    {
      path: "/",
      element: <RequireAuth />,
      children: [
        { path: "/homefreelancer", element: <HomeFreelancer /> },
        { path: "/homeclient", element: <HomeClient /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
