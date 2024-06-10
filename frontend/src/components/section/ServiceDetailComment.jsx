import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceDetailComment = () => {
  return (
    <>
      <form className="bsp_reveiw_wrt mb-[20px]">
        <h6 className="text-[17px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
          Add a Review
        </h6>
        <p className="text-[#222] font-normal mt-0 mx-0 mb-[15px] leading-[1.85] ">
          Your email address will not be published. Required fields are marked *
        </p>
        <h6 className="text-[15px]  font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
          Your rating of this product
        </h6>
        <div className="flex">
          <i className="fas fa-star review-color text-[#e1c03f] font-black" />
          <i className="far fa-star review-color text-[#e1c03f] font-normal ml-2" />
          <i className="far fa-star review-color text-[#e1c03f] font-normal ml-2" />
          <i className="far fa-star review-color text-[#e1c03f] font-normal ml-2" />
          <i className="far fa-star review-color text-[#e1c03f] font-normal ml-2" />
        </div>
        <div className="comments_form max-[991px]:mb-[30px] mt-[30px]">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">
              <div className="mb-6">
                <label className="font-medium text-base text-[#222]  mb-2 inline-block">
                  Comment
                </label>
                <textarea
                  className=" bg-[#fcfcfc] border border-[#e9e9e9] rounded-lg h-auto w-full py-[25px] px-[20px] resize-y pt-[15px] m-0 placeholder:text-[15px] placeholder-[#6b7177] placeholder:leading-[1.85] "
                  rows={6}
                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">

              <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white rounded-[4px] font-bold text-[15px] not-italic  tracking-normal py-[13px] px-[35px] realtive overflow-hidden text-center z-0 transition-all duration-300 ease-linear cursor-pointer hover:border-2 hover:border-[#1f4b3f] flex items-center justify-center w-fit hover:text-white">
                Send
                {/* <i className="fal fa-arrow-right-long" /> */}
                <FaArrowRightLong className="ml-[5px] -rotate-45 font-light" />
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ServiceDetailComment;
