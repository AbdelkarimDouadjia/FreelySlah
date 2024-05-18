import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import Routers from "../routes/Routers.jsx";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  // Determine if Header and Footer should be hidden
  const noHeaderFooter = ["/login", "/signup"].includes(path);

  return (
    <>
      {/**  {!noHeaderFooter && <Header />}*/}
      <main>
        <Routers />
      </main>
      {/** {!noHeaderFooter && <Footer />}*/}
    </>
  );
};

export default Layout;
