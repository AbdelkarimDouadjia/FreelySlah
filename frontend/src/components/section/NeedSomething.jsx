import React from "react";
import { stepsThree } from "./data.js";

export default function NeedSomething() {
  return (
    <section className="our-features relative">
      <div className="visible w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] ">
        <div className="flex flex-wrap mt-0 -mx-3 ">
          <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-full">
            <div className="main-title text-[32px] font-bold text-[#222] leading-[1.3125] mt-0 mb-2 max-[575px]:text-[20px]">
              <h2>Need something done?</h2>
              <p className="text-[#222] mx-0 mt-0 mb-[15px] leading-[1.85] font-normal text-base">
                Most viewed and all-time top-selling services
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mt-0 -mx-3  ">
          {stepsThree.map((elm, i) => (
            <div
              key={i}
              className="col-sm-6 col-lg-3  flex-shrink-0 w-full max-w-full px-3 mt-0 xs-b:flex-initial xs-b:flex-shrink-0 xs-b:w-1/2 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-1/4"
            >
              <div className="border border-[#e9e9e9] bg-[#fff] rounded-[8px] mb-[30px] px-[30px] pt-[40px] pb-[30px] relative transition-all duration-300 ease-linear text-center  ">
                <div className="thumb">
                  <img
                    width={270}
                    height={181}
                    className="w-full text-transparent align-middle"
                    style={{ height: "fit-content" }}
                    src={elm.imgSrc}
                    alt=" image "
                  />
                </div>
                <div className="details">
                  <h4 className="mt-[10px] mb-4 text-[20px] text-[#222] leading-[1.3125] font-medium ">
                    {elm.title}
                  </h4>
                  <p className="text-[#222] font-normal mx-0 mt-0 mb-[15px] leading-[1.85] ">
                    {elm.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
