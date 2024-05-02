import React from "react";
import TabSection from "../../components/section/TabSection.jsx";
import Breadcumb from "../../components/Breadcumb/Breadcumb.jsx";
import ServiceDetails from "../../components/section/ServiceDetails.jsx";
import PopulerService from "../../components/section/PopularService.jsx";
import "./Service.css";

const Service = () => {
  const breadcrumbPath = ["Home", "Services", "Design & Creative"];
  return (
    <>
      <TabSection />
      <Breadcumb path={breadcrumbPath} />
      <ServiceDetails />
      <PopulerService />
    </>
  );
};

export default Service;
