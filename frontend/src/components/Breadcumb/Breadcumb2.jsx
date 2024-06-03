import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiShareBoxFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

function Breadcumb2(props) {
  //const path = ["Home", "Services", "Design & Creative"];
  const path = props.path;

  const [shareToggle, setShareToggle] = useState(false);
  const [saveToggle, setSaveToggle] = useState(false);
  return (
    <>
      <section className="breadcumb-section py-5 relative">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="flex justify-between items-center flex-wrap w-full">
            <div className=" px-2">
              <div className="realtive">
                <div className="relative">
                  {path?.map((item, i) => (
                    <Link
                      key={i}
                      to="/"
                      className={`inline-block text-[#6b7177] text-sm relative mr-[25px] ${
                        i !== path.length - 1
                          ? "after:content-['/']  after:absolute after:right-[-15px] after:bottom-[1px] after:text-base"
                          : "text-black"
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-sm-4 col-lg-2 flex-shrink-0 w-full max-w-full px-3 mt-0 xs-b:flex-initial xs-b:flex-shrink-0 xs-b:w-1/3 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-[16.66666667%]">
              <div className="flex items-center xs-b:justify-end">
                <a
                  onClick={() => setShareToggle(!shareToggle)}
                  className="relative cursor-pointer text-[#333] outline-none transition-all duration-300 ease-linear"
                >
                  <div
                    className={`share-save-widget items-center flex  ${
                      shareToggle ? "active" : ""
                    }`}
                  >
                    <span className="icon flaticon-share dark-color fz12 mr10  bg-white shadow border border-[#E9E9E9]  rounded-[50%] h-9 leading-[36px] text-center w-9 mr-[10px] text-xs text-[#222] flex items-center justify-center">
                      <RiShareBoxFill className="text-[#222] text-xs" />
                    </span>
                    <div className=" text-[15px] font-medium text-[#222] leading-[1.3125] mb-0">
                      Share{" "}
                    </div>
                  </div>
                  {shareToggle && (
                    <div className="ui-social-media absolute left-1/2 -translate-x-1/2 bg-white top-[-2.5rem] border border-[#ddd] flex items-center justify-between gap-2 py-2 px-5 rounded-lg after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-5 after:border-[10px] after:border-transparent after:border-t-[#ddd]">
                      <a>
                        <FaFacebookF />
                      </a>
                      <a>
                        <FaXTwitter />
                      </a>
                      <a>
                        <FaLinkedinIn />
                      </a>
                    </div>
                  )}
                </a>
                <a onClick={() => setSaveToggle(!saveToggle)}>
                  <div
                    className={`share-save-widget ml-[15px] items-center flex cursor-pointer ${
                      saveToggle ? "active" : ""
                    }`}
                  >
                    <span className={`icon flaticon-share dark-color fz12 mr10  bg-white shadow border border-[#E9E9E9]  rounded-[50%] h-9 leading-[36px] text-center w-9 mr-[10px] text-xs text-[#222] flex items-center justify-center cursor-pointer  ${saveToggle ? "text-white bg-green-600" : ""} `}>
                      <FaRegHeart />
                    </span>
                    <div className=" text-[15px] font-medium text-[#222] leading-[1.3125] mb-0">
                      Save
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Breadcumb2.propTypes = {
  path: PropTypes.array,
};

Breadcumb2.defaultProps = {
  path: [],
};
export default Breadcumb2;
