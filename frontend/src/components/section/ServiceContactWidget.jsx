import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";

const ServiceContactWidget = (props) => {
  const userService = props.data;

  const { img, fname, lname, userOccupation, country, isOnline, userProfile } =
    userService;

  const userEducation = userProfile?.[0]?.userEducation?.[0];
  const userSkills = userProfile?.[0]?.userSkills;

  return (
    <>
      <div className="freelancer-style1 service-single bg-white border border-[#e9e9e9] rounded shadow-spd p-[30px] relative w-full transition-all duration-300 ease-linear  mb-0 ">
        <div className="wrapper items-center flex ">
          <div className="thumb mb-[25px] relative ">
            <img
              style={{ width: "90px", height: "90px" }}
              className="text-transparent rounded-[50%] mx-auto align-middle	"
              src={img}
              alt="Profile"
            />
            {isOnline ? (
              <span className="online bg-[#5bbb7b] border-2 border-white rounded-[50%] h-4 absolute right-0 top-2 w-[16px]" />
            ) : (
              <span className="offline bg-red-600 border-2 border-white rounded-[50%] h-4 absolute right-0 top-2 w-[16px]" />
            )}
          </div>
          <div className="ml-[20px]">
            <h5 className="title mb-1 text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
              {fname} {lname}
            </h5>
            <p className="mb-0 mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal">
              {userOccupation}
            </p>
            <div className="review">
              <p className="text-[#6b7177] leading-[1.85] font-normal mt-0 mb-[15px] mx-0">
                <i className="fas fa-star pr-[10px] text-[10px] text-[#e1c03f] font-extrabold" />
                <span className="text-[#222]">4.9</span> (595 reviews)
              </p>
            </div>
          </div>
        </div>
        <hr className="opacity-100 bg-[#e9e9e9]  my-4 mx-0 border-t-[1px] border-t-[#222]" />
        <div className="details">
          <div className="items-center justify-between flex ">
            <a className="text-[#222] font-medium text-left cursor-pointer outline-none transition-all duration-300 ease-linear">
              Location
              <br />
              <span className=" font-normal text-sm ">{country}</span>
            </a>
            <a className="text-[#222] font-medium text-left cursor-pointer outline-none transition-all duration-300 ease-linear">
              Education
              <br />
              <span className="font-normal text-sm">
                {userEducation?.degree}
              </span>
            </a>
            <a className="text-[#222] font-medium text-left cursor-pointer outline-none transition-all duration-300 ease-linear">
              Skills
              <br />
              <span className="font-normal text-sm">
                {userSkills?.map((skill) => skill.skill).join(", ")}
              </span>
            </a>
          </div>
        </div>
        <div className="d-grid mt30 grid mt-[30px]">
          <Link
            to="/freelancer-single"
            className="ud-btn font-bold bg-white border-2 border-[#5bbb7b] text-[#5bbb7b] max-[339px]:py-[13px] max-[339px]:px-[25px] hover:text-white  hover:bg-[#5bbb7b] hover:border-2 hover:border-[#5bbb7b] flex items-center justify-center py-[16px]"
          >
            Contact Me
            <FaArrowRightLong className="ml-[10px] text-[16px] -rotate-45 font-light" />
          </Link>
        </div>
      </div>
    </>
  );
};

ServiceContactWidget.propTypes = {
  data: PropTypes.object,
};

export default ServiceContactWidget;
