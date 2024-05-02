import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceDetailComment = () => {
  return (
    <>
      <div className="bsp_reveiw_wrt mb-[20px]">
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
        <form className="comments_form max-[991px]:mb-[30px] mt-[30px]">
          <div className="flex flex-wrap -mx-3">
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">
              <div className="mb-6">
                <label className="font-medium text-base text-[#222]  mb-2 inline-block">
                  Comment
                </label>
                <textarea
                  className="border border-[#e9e9e9] rounded-lg h-auto w-full py-[25px] px-[20px] resize-y pt-[15px] m-0 placeholder:text-[15px] placeholder-[#6b7177] placeholder:leading-[1.85] "
                  rows={6}
                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                />
              </div>
            </div>
            <div className="col-md-6  flex-shrink-0 w-full max-w-full px-3 min-[768px]:flex-initial min-[768px]:flex-shrink-0 min-[768px]:w-1/2">
              <div className="mb-[20px]">
                <label className="font-medium text-[#222] mb-2 inline-block">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control border-2 border-transparent shadow-none h-[55px] outline-1 outline outline-[#e9e9e9] pl-[20px] block w-full py-[0.375rem] pr-3 text-base font-normal leading-[1.5] text-[#212529] bg-white transition-all duration-150 m-0"
                  placeholder="Ali Tufan"
                />
              </div>
            </div>
            <div className="col-md-6  flex-shrink-0 w-full max-w-full px-3 min-[768px]:flex-initial min-[768px]:flex-shrink-0 min-[768px]:w-1/2">
              <div className="mb-[20px]">
                <label className="font-medium text-[#222] mb-2 inline-block">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control border-2 border-transparent shadow-none h-[55px] outline-1 outline outline-[#e9e9e9] pl-[20px] block w-full py-[0.375rem] pr-3 text-base font-normal leading-[1.5] text-[#212529] bg-white transition-all duration-150 m-0"
                  placeholder="creativelayers088"
                />
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">
              <div className="checkbox-style1 mb-[20px] relative items-center justify-between block min-[576px]:flex ">
                <label className="custom_checkbox fz15 ff-heading text-[15px] text-[222] block cursor-pointer font-normal leading-[40px] tracking-normal pl-7 select-none relative">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer h-0 w-0 m-0"
                  />
                  <span className="checkmark border border-[#041e42] rounded-[4px] absolute top-[10px] left-0 h-4 w-4" />
                </label>
              </div>
              <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white rounded-[4px] font-bold text-[15px] not-italic  tracking-normal py-[13px] px-[35px] realtive overflow-hidden text-center z-0 transition-all duration-300 ease-linear cursor-pointer hover:border-2 hover:border-[#1f4b3f] flex items-center justify-center w-fit hover:text-white">
                Send
                {/* <i className="fal fa-arrow-right-long" /> */}
                <FaArrowRightLong className="ml-[5px] -rotate-45 font-light" />
              </a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ServiceDetailComment;
