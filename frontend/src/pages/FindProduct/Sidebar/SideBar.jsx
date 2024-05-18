import React from "react";
import Location from "./Location";
import Price from "./Price";
import JobPostingData from "./JobPostingData";
import Category from "./Category";
import EmploymentType from "./EmploymentType";

const SideBar = ({ handleChange, handleClick }) => {
  return (
    <div className="space-y-5">
      <h3 className="text-lg font-bold mb-2">Filters</h3>
      <Category handleChange={handleChange} />
      {/*<EmploymentType handleChange={handleChange} />*/}
      <Location handleChange={handleChange} />
      <Price handleChange={handleChange} handleClick={handleClick} />
      {/*<JobPostingData handleChange={handleChange} />*/}
    </div>
  );
};

export default SideBar;
