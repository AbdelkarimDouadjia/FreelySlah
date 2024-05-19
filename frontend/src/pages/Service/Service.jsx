import React from "react";
import TabSection from "../../components/section/TabSection.jsx";
import Breadcumb from "../../components/Breadcumb/Breadcumb.jsx";
import ServiceDetails from "../../components/section/ServiceDetails.jsx";
import PopulerService from "../../components/section/PopularService.jsx";
import "./Service.css";
import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import newRequest from "../../utils/newRequest.js";

const Service = () => {
  const {id} = useParams();
  const { isLoading,error, data, refetch} = useQuery({
    queryKey: ["gig"],
    queryFn: () => 
      newRequest.get(`/gigs/single/${id}`).then((res) => res.data),
  });

  console.log(id);
  console.log(data);


  const breadcrumbPath = ["Home", "Services", "Design & Creative"];
  return (
    <>
      <TabSection />
      {/* send data and breadcumbpath as props */}
      <Breadcumb path={breadcrumbPath} />
      <ServiceDetails data={data} />
      <PopulerService />
    </>
  );
};

export default Service;
