import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductContactWidget = () => {
  return (
    <>
      <div className="freelancer-style1 service-single bg-white border border-[#e9e9e9] rounded shadow-spd p-[20px] relative w-full transition-all duration-300 ease-linear  mb-0 ">
        <div className="wrapper items-center flex ">
          <div className="thumb mb-[15px] relative ">
            <img
              height={80} // Adjusted height
              width={80} // Adjusted width
              className="text-transparent rounded-[50%] mx-auto align-middle	"
              src="/images/service9.png"
              alt="img"
            />
            <span className="online bg-[#5bbb7b] border-2 border-white rounded-[50%] h-4 absolute right-0 top-2 w-[14px] " />
          </div>
          <div className="ml-[15px]">
            <h5 className="title mb-1 text-[16px] font-medium text-[#222] leading-[1.3125] mt-0">
              Ahmed{" "}
            </h5>
            <p className="mb-0 mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal text-sm">
              Bags Store Owner
            </p>
            <div className="review">
              <p className="text-[#6b7177] leading-[1.85] font-normal mt-0 mb-[10px] mx-0">
                <i className="fas fa-star pr-[8px] text-[10px] text-[#e1c03f] font-extrabold" />
                <span className="text-[#222] text-sm">4.9</span> (595 reviews)
              </p>
            </div>
          </div>
        </div>
        <hr className="opacity-100 bg-[#e9e9e9]  my-3 mx-0 border-t-[1px] border-t-[#222]" />
        <div className="details">
          <div className="items-center justify-between flex ">
            <a className="text-[#222] font-medium text-left cursor-pointer outline-none transition-all duration-300 ease-linear">
              Location
              <br />
              <span className=" font-normal text-sm ">Ain Defla</span>
            </a>
            <a className="text-[#222] font-medium text-left cursor-pointer outline-none transition-all duration-300 ease-linear">
              Active
              <br />
              <span className="font-normal text-sm">24 hr</span>
            </a>
            <a className="text-[#222] font-medium text-left cursor-pointer outline-none transition-all duration-300 ease-linear">
              Job Success
              <br />
              <span className="font-normal text-sm">%98</span>
            </a>
          </div>
        </div>
        <div className="d-grid mt-[20px] grid">
          <Link
            to="/message"
            className="ud-btn font-bold bg-white border-2 border-[#5bbb7b] text-[#5bbb7b] max-[339px]:py-[10px] max-[339px]:px-[20px] hover:text-white  hover:bg-[#5bbb7b] hover:border-2 hover:border-[#5bbb7b] flex items-center justify-center py-[13px]"
          >
            Contact Me
            <FaArrowRightLong className="ml-[8px] text-[14px] -rotate-45 font-light" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductContactWidget;
