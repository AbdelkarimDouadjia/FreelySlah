import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa6";

const FreelancerCard = (props) => {
  const data = props.data;
  const btnClass = props.btnClass;

  return (
    <>
      <div className="shadow-none !mb-[70px] rounded-2xl border border-[#e9e9e9] bg-[#FFF] p-[30px] w-full relative transition-all duration-300 ease-linear !text-center ">
        <div className="thumb mb-[25px] w-[90px] !rounded-[50%] mx-auto relative   ">
          <img
            height={90}
            width={90}
            className="text-transparent rounded-[50%] mx-auto object-cover align-middle"
            src={data.img}
            alt="avatar"
          />
          <span className="online bg-[#5bbb7b] border-2 border-[#fff] rounded-[50%] h-4 absolute right-0 top-2 w-4 " />
        </div>
        <div className="details ">
          <h5 className="title mb-1 text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
            {data.name}
          </h5>
          <p className="m-0 text-[#6b7177] leading-[1.85] font-normal  ">
            {data.skill}
          </p>
          <div className="review">
            <p className="mx-0 mt-0 mb-[15px] text-[#6b7177] leading-[1.85] font-normal">
              <i className="fas fa-star fz10 pr-[10px] text-[10px] text-[#e1c03f] font-black" />
              <span className=" text-[#222]">{data.rating}</span> ({data.review}{" "}
              reviews)
            </p>
          </div>
          <div className="skill-tags mb-[5px] text-center justify-center flex  ">
            <span className=" bg-[#ffede8] rounded-[60px] text-[#222] font-medium inline-block px-[17px] py-[5px] text-[13px] leading-[28px]">
              Figma
            </span>
            <span className="bg-[#ffede8] rounded-[60px] text-[#222] font-medium inline-block px-[17px] py-[5px] text-[13px] leading-[28px] mx-[10px]">
              Sketch
            </span>
            <span className="bg-[#ffede8] rounded-[60px] text-[#222] font-medium inline-block px-[17px] py-[5px] text-[13px] leading-[28px]">
              HTML5
            </span>
          </div>
          <hr className="opacity-100 !mb-[15px] !mt-[20px] bg-[#e9e9e9] mx-0 border-0 border-t" />
          <div className="items-center justify-between flex ">
            <a className="text-[#222] font-medium text-left cursor-pointer transition-all duration-300 ease-linear">
              Location
              <br />
              <span className="font-normal text-sm ">{data.location}</span>
            </a>
            <a className="text-[#222] font-medium text-left cursor-pointer transition-all duration-300 ease-linear">
              Rate
              <br />
              <span className="font-normal text-sm">
                {data.hourlyRate}DA/hr
              </span>
            </a>
            <a className="text-[#222] font-medium text-left cursor-pointer transition-all duration-300 ease-linear">
              Job Success
              <br />
              <span className="font-normal text-sm">%{data.jobSuccess}</span>
            </a>
          </div>
          <div className="mt-[15px] grid">
            <Link
              href={`/freelancer-single/${data.id}`}
              className={
                btnClass
                  ? btnClass
                  : "ud-btn btn-light-thm bdrs90 !rounded-[90px] !border-2 text-[#222]  bg-[#FFF]  max-[339px]:py-[13px] max-[339px]:px-[25px] before:bg-[#222]"
              }
            >
              View Profile
              <i className="fal fa-arrow-right-long" />
              <FaArrowRight className="text-base font-light ml-[10px] -rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

FreelancerCard.propTypes = {
  data: PropTypes.object,
  btnClass: PropTypes.string,
};

FreelancerCard.defaultProps = {
  btnClass: "",
};

export default FreelancerCard;
