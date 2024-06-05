import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import NavbarF from "../components/NavbarF/NavbarF";
import Footer from "../components/section/Footer.jsx";

function RequireAuth() {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return <Navigate to="/login" />;
  else {
    return (
      <>
        <NavbarF />
        <Outlet />
        <Footer />
      </>
    );
  }
  /*
  return (
    <>
      <NavbarF />
      <Outlet />
      <Footer />
    </>
  );*/
}

export default RequireAuth;
