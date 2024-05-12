import React from "react";
import { Link } from "react-router-dom";
import {
  FiActivity,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiMapPin,
  FiPocket,
} from "react-icons/fi";

const Cards = ({ data }) => {
  const {
    experienceLevel,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    employmentType,
    description,
    jobTitle,
  } = data;

  return (
    <div className="overflow-hidden relative bg-white rounded border border-[#e9e9e9] mb-[10px] transition-all duration-300 ease-linear">
      <Link to="/" className="block">
        <div className="py-[25px] px-[30px]">
          <h3 className="text-[19px] font-medium text-[#222]">{jobTitle}</h3>
          <div className="border-b-2 border-gray-500 my-4"></div>
          <div className="text-[#6b7177] text-base text-[12px] flex flex-row mb-2  gap-2 mt-1">
            <span className="flex  gap-1">
              <FiMapPin className="text-lg text-[17px]" />
              {jobLocation || "Unknown Location"}
            </span>
            <span className="flex gap-1">
              <FiClock className="text-lg text-[17px]" />
              {employmentType || "Freelance"}
            </span>
            <span className="flex gap-1">
              <FiActivity className="text-lg text-[17px]" />
              {experienceLevel || "Any Experience"}
            </span>
            <span className="flex  gap-1">
              <FiPocket className="text-lg text-[17px]" />
              {maxPrice} DA
            </span>

            {/* Optional: Uncomment to show posting date
            <span className="flex items-center gap-1">
              <FiCalendar className="text-lg" />
              {postingDate}
            </span>
            */}
          </div>
          <p className="text-base text-gray-900">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
