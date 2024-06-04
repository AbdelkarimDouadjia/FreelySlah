import React, { useState } from "react";
import { GiSandsOfTime } from "react-icons/gi";
import { BsRecycle } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const tabs = ["Basic", "Standart", "Premium"];

const ServiceDetailPrice = () => {
  const [getTab, setTab] = useState(0);

  return (
    <>
      <div className="price-widget border border-[#e9e9e9] rounded mb-[30px] pt-[15px] px-[30px] pb-[30px] relative bg-[#fff] shadow-sdp ">
        <div className="navtab-style1 relative">
          <nav>
            <div className="nav nav-tabs mb20 border-b border-[#e9e9e9] transition-all duration-300 ease-linear mb-[20px] flex flex-wrap pl-0 list-none">
              {tabs.map((item, i) => (
                <button
                  onClick={() => setTab(i)}
                  key={i}
                  className={`nav-link fw500 border-2 border-transparent text-[#697488] transition-all duration-300 ease-linear  rounded-tl-md rounded-tr-md cursor-pointer font-medium block py-2 px-4  m-0  mb-[1px] ${
                    getTab === i
                      ? "active  border-2 border-transparent border-b-2 border-b-[#222] !text-[#222] bg-white"
                      : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
          <div className="tab-content h-auto" id="nav-tabContent">
            {getTab === 0 && (
              <div className="price-content ">
                <div className="price font-bold text-[28px] text-[#222] leading-[36px] mb-[10px] ">
                  500 DA
                </div>
                <div className="text-[17px] font-medium text-[#222] leading-[1.3125] mb-2 mt-0">
                  High-converting Landing Pages
                </div>
                <p className="text-[#222] font-normal text-sm mx-0 mt-0 mb-[15px] leading-[1.85] ">
                  I will redesign your current landing page or create one for
                  you (upto 4 sections)
                </p>
                <hr className="mb-[20px] opacity-100 bg-[#e9e9e9] mt-4 mx-0 border-t-[1px] border-[#363636] " />
                <ul className=" mb-[15px] p-0 items-center mt-0 min-[576px]:flex">
                  <li className="font-medium text-sm text-[#222] list-none flex">
                    <GiSandsOfTime className=" align-middle text-[20px] text-[#1f4b3f] mr-2" />
                    3 Days Delivery
                  </li>
                  <li className="fz14 fw500 dark-color ml20 ml0-xs font-medium text-sm text-[#222] list-none max-[575px]:ml-0 min-[576px]:ml-[20px] flex">
                    <BsRecycle className="align-middle text-[20px] text-[#1f4b3f] mr-2" />
                    2 Revisions
                  </li>
                </ul>
                <div className="list-style1 relative ">
                  <ul className="mt-0 mb-4 pl-8">
                    <li className="items-center flex text-[#222] font-normal list-none mb-[15px] ">
                      <FaCheck className="text-thm3 bgc-thm3-light rounded-[50%] text-[5px] h-[18px] absolute text-center w-[18px] bg-[#5bbb7b26]  text-[#5bbb7b] font-normal left-0 p-1" />
                      2 Page / Screen
                    </li>
                    <li className="items-center flex text-[#222] font-normal list-none mb-[20px] ">
                      <FaCheck className="text-thm3 bgc-thm3-light rounded-[50%] text-[5px] h-[18px] absolute text-center w-[18px] bg-[#5bbb7b26]  text-[#5bbb7b] font-normal left-0 p-1" />
                      Source file
                    </li>
                  </ul>
                </div>
                <div className="grid">
                  <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white max-[339px]:py-[13px] max-[339px]:px-[25px]  py-[18px]  flex cursor-pointer hover:text-white hover:border-2 hover:border-[#1f4b3f] font-extrabold items-center justify-center">
                    Continue 500 DA
                    <FaArrowRightLong className="ml-[10px] text-base -rotate-45 font-light" />
                  </a>
                </div>
              </div>
            )}
            {getTab === 1 && (
              <div className="price-content ">
                <div className="price font-bold text-[28px] text-[#222] leading-[36px] mb-[10px] ">
                  1000 DA
                </div>
                <div className="text-[17px] font-medium text-[#222] leading-[1.3125] mb-2 mt-0">
                  High-converting Landing Pages
                </div>
                <p className="text-[#222] font-normal text-sm mx-0 mt-0 mb-[15px] leading-[1.85] ">
                  I will redesign your current landing page or create one for
                  you (upto 4 sections)
                </p>
                <hr className="mb-[20px] opacity-100 bg-[#e9e9e9] mt-4 mx-0 border-t-[1px] border-[#363636] " />
                <ul className=" mb-[15px] p-0 items-center mt-0 min-[576px]:flex">
                  <li className="font-medium text-sm text-[#222] list-none flex">
                    <GiSandsOfTime className=" align-middle text-[20px] text-[#1f4b3f] mr-2" />
                    3 Days Delivery
                  </li>
                  <li className="fz14 fw500 dark-color ml20 ml0-xs font-medium text-sm text-[#222] list-none max-[575px]:ml-0 min-[576px]:ml-[20px] flex">
                    <BsRecycle className="align-middle text-[20px] text-[#1f4b3f] mr-2" />
                    2 Revisions
                  </li>
                </ul>
                <div className="list-style1 relative ">
                  <ul className="mt-0 mb-4 pl-8">
                    <li className="items-center flex text-[#222] font-normal list-none mb-[15px]">
                      <FaCheck className="text-thm3 bgc-thm3-light rounded-[50%] text-[5px] h-[18px] absolute text-center w-[18px] bg-[#5bbb7b26]  text-[#5bbb7b] font-normal left-0 p-1" />
                      2 Page / Screen
                    </li>
                    <li className="items-center flex text-[#222] font-normal list-none mb-[20px] ">
                      <FaCheck className="text-thm3 bgc-thm3-light rounded-[50%] text-[5px] h-[18px] absolute text-center w-[18px] bg-[#5bbb7b26]  text-[#5bbb7b] font-normal left-0 p-1" />
                      Source file
                    </li>
                  </ul>
                </div>
                <div className="grid">
                  <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white max-[339px]:py-[13px] max-[339px]:px-[25px]  py-[18px] flex cursor-pointer hover:text-white hover:border-2 hover:border-[#1f4b3f] font-extrabold items-center justify-center">
                    Continue 1000 DA
                    <FaArrowRightLong className="ml-[10px] text-base -rotate-45 font-light" />
                  </a>
                </div>
              </div>
            )}
            {getTab === 2 && (
              <div className="price-content ">
                <div className="price font-bold text-[28px] text-[#222] leading-[36px] mb-[10px] ">
                  2500 DA
                </div>
                <div className="text-[17px] font-medium text-[#222] leading-[1.3125] mb-2 mt-0">
                  High-converting Landing Pages
                </div>
                <p className="text-[#222] font-normal text-sm mx-0 mt-0 mb-[15px] leading-[1.85] ">
                  I will redesign your current landing page or create one for
                  you (upto 4 sections)
                </p>
                <hr className="mb-[20px] opacity-100 bg-[#e9e9e9] mt-4 mx-0 border-t-[1px] border-[#363636] " />
                <ul className=" mb-[15px] p-0 items-center mt-0 min-[576px]:flex">
                  <li className="font-medium text-sm text-[#222] list-none flex">
                    <GiSandsOfTime className=" align-middle text-[20px] text-[#1f4b3f] mr-2" />{" "}
                    3 Days Delivery
                  </li>
                  <li className="fz14 fw500 dark-color ml20 ml0-xs font-medium text-sm text-[#222] list-none max-[575px]:ml-0 min-[576px]:ml-[20px] flex">
                    <BsRecycle className="align-middle text-[20px] text-[#1f4b3f] mr-2" />
                    2 Revisions
                  </li>
                </ul>
                <div className="list-style1 relative ">
                  <ul className="mt-0 mb-4 pl-8">
                    <li className="items-center flex text-[#222] font-normal list-none mb-[15px]">
                      <FaCheck className="text-thm3 bgc-thm3-light rounded-[50%] text-[5px] h-[18px] absolute text-center w-[18px] bg-[#5bbb7b26]  text-[#5bbb7b] font-normal left-0 p-1" />
                      2 Page / Screen
                    </li>
                    <li className="items-center flex text-[#222] font-normal list-none mb-[20px] ">
                      <FaCheck className="text-thm3 bgc-thm3-light rounded-[50%] text-[5px] h-[18px] absolute text-center w-[18px] bg-[#5bbb7b26]  text-[#5bbb7b] font-normal left-0 p-1" />
                      Source file
                    </li>
                  </ul>
                </div>
                <div className="grid">
                  <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white max-[339px]:py-[13px] max-[339px]:px-[25px] py-[18px] cursor-pointer hover:text-white hover:border-2 hover:border-[#1f4b3f] font-extrabold flex items-center justify-center">
                    Continue 2500 DA
                    <FaArrowRightLong className="ml-[10px] text-base -rotate-45 font-light" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceDetailPrice;
