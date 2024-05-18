import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "./Categories";
//import Products from "./Products";
import Testimonials from "./Testimonials";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      {/*<Products />*/}
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;
