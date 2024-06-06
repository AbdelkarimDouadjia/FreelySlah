import React from "react";
import TrendingService from "../../components/Card/TrandingService.jsx";
import HighestRated from "../../components/section/HighestRated.jsx";
import NeedSomething from "../../components/section/NeedSomething.jsx";
import FindWork from "../../components/section/FindWork.jsx";
import PostJob from "../../components/section/PostJob.jsx";
import TabSection from "../../components/section/TabSection.jsx";
const HomeClient = () => {
  return (
    <>
      <TabSection />
      <PostJob />
      <NeedSomething />
      <TrendingService />
      <HighestRated />
      <FindWork />
    </>
  );
};

export default HomeClient;
