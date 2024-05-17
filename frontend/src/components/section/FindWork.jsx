import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

export default function FindWork() {
  return (
    <section className="pb90 pb20-md pt-0 ">
      <div className="visible w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
        <div
          className="visible flex flex-wrap -mx-3 mt-0 items-center"
          data-wow-delay="00ms"
        >
          <div className="col-md-6 flex-shrink-0  w-full max-w-full px-3 mt-0 md-b:flex-initial md-b:flex-shrink-0 md-b:w-1/2">
            <div className="find-work px-[20px] mb-[30px] pb-[50px] pt-[60px] rounded-[24px] bg-[#fbf7ed] text-center">
              <img
                width={270}
                height={176}
                style={{ height: "fit-content !important" }}
                className="mb-[30px] text-transparent align-middle mx-auto"
                src="/src/assets/images/about/home20-vector-1.png"
                alt=" image "
              />
              <h2 className="mb-[30px] text-[20px] xs-b:text-[32px] font-bold text-[#222] leading-[1.3125] mt-0">
                Find great work
              </h2>
              <p className="text mb-[30px] text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                Work with the largest network of independent professionals and{" "}
                <br className="hidden lg-b:block" /> get things done—from quick
                turnaround.
              </p>
              <Link
                className="ud-btn rounded-[60px] bg-[#222] border border-[#222] text-white hover:border-none transition-all duration-300 ease-linear flex justify-center items-center w-fit mx-auto"
                href="/job-1"
              >
                Get Started
                <FaArrowRight className="text-base font-light ml-[10px] -rotate-45" />
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0  w-full max-w-full px-3 mt-0 md-b:flex-initial md-b:flex-shrink-0 md-b:w-1/2">
            <div className="find-work px-[20px] mb-[30px] pb-[50px] pt-[60px] rounded-[24px] bg-[#ffede8] text-center">
              <img
                width={270}
                height={180}
                className="mb-[30px] text-transparent align-middle mx-auto"
                src="/src/assets/images/about/home20-vector-2.png"
                alt=" image "
              />
              <h2 className="mb-[30px] text-[20px] xs-b:text-[32px] font-bold text-[#222] leading-[1.3125] mt-0">
                Find talent your way
              </h2>
              <p className="text mb-[30px] text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                Work with the largest network of independent professionals and{" "}
                <br className="d-none d-lg-block" /> get things done—from quick
                turnaround.
              </p>
              <Link
                className="ud-btn rounded-[60px] bg-[#222] border border-[#222] text-white  hover:border-none transition-all duration-300 ease-linear flex justify-center items-center w-fit mx-auto"
                href="/freelancer-1"
              >
                Get Started
                <FaArrowRight className="text-base font-light ml-[10px] -rotate-45" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
