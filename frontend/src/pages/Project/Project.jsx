import React from "react";
import TabSection from "../../components/section/TabSection";
import Breadcumb2 from "../../components/Breadcumb/Breadcumb2.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
const Project = () => {
  return (
    <>
      <TabSection />
      <Breadcumb2 path={["Home", "Project", "Design & Creative"]} />
      <ProjectDetails />
    </>
  );
};

export default Project;
