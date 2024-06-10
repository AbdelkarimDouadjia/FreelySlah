import React from "react";
import TabSection from "../../components/section/TabSection";
import Breadcumb2 from "../../components/Breadcumb/Breadcumb2.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import { useParams } from "react-router-dom";
import newRequest from "../../utils/newRequest.js";
import { useQuery } from "@tanstack/react-query";
const Project = () => {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["project"],
    queryFn: () =>
      newRequest.get(`/projects/single/${id}`).then((res) => res.data),
  });
  console.log(id);
  console.log(data);
  return (
    <>
      <TabSection />
      <Breadcumb2 path={["Home", "Project", "Design & Creative"]} />
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div>An error has occurred=</div>
      ) : (
        <ProjectDetails data={data} />
      )}
    </>
  );
};

export default Project;
