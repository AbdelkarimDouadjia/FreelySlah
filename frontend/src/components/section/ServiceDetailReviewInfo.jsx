import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";


const ServiceDetailReviewInfo = () => {
  return (
    <>
      <div className="product_single_content mb-[50px]">
        <div className="mbp_pagination_comments">
          <div className="flex flex-wrap -m-3 ">
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">
              <div className="total_review mb-[30px] mt-[45px] ">
                <h4 className="text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                  80 Reviews
                </h4>
              </div>
              <div className="mb-[30px] items-center min-[768px]:flex">
                <div className="total-review-box mb30-sm max-[767px]:mb-[30px] bg-[#ffede8] rounded-[4px] h-[250px] relative w-[300px] text-center flex items-center  ">
                  <div className="wrapper mx-auto ">
                    <div className="font-semibold text-6xl leading-[1] text-[#e1c03f] mb-[15px] ">
                      4.96
                    </div>
                    <h5 className="text-[17px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2 ">
                      Exceptional
                    </h5>
                    <p className="text-[#222] font-normal mb-0 mx-0 mt-0 leading-[1.85] ">
                      3,014 reviews
                    </p>
                  </div>
                </div>
                <div className="wrapper max-[767px]:ml-0 !ml-[60px] ">
                  <div className="review-list mb-[10px] items-center flex">
                    <div className="list-number whitespace-nowrap font-medium text-[#222] pr-[10px] min-w-[55px] ">
                      5 Star
                    </div>
                    <div className="w-[300px] max-[575px]:w-[200px] h-[5px] flex overflow-hidden text-xs bg-[#e9ecef] rounded-md  ">
                      <div
                        className="progress-bar bg-[#e1c03f] text-white flex flex-col justify-center overflow-hidden text-center whitespace-nowrap transition-all duration-500 ease-linear "
                        style={{
                          width: "90%",
                        }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-right inline-block text-sm w-10 pl-[10px] ">
                      58
                    </div>
                  </div>
                  <div className="review-list mb-[10px] items-center flex">
                    <div className="list-number whitespace-nowrap font-medium text-[#222] pr-[10px] min-w-[55px] ">
                      4 Star
                    </div>
                    <div className=" w-[300px] max-[575px]:w-[200px] h-[5px] flex overflow-hidden text-xs bg-[#e9ecef] rounded-md  ">
                      <div
                        className="progress-bar bg-[#e1c03f] text-white flex  flex-col justify-center overflow-hidden text-center whitespace-nowrap transition-all duration-500 ease-linear w-[75%]"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-right inline-block text-sm w-10 pl-[10px] ">
                      20
                    </div>
                  </div>
                  <div className="review-list mb-[10px] items-center flex">
                    <div className="list-number whitespace-nowrap font-medium text-[#222] pr-[10px] min-w-[55px] ">
                      3 Star
                    </div>
                    <div className="w-[300px] max-[575px]:w-[200px] h-[5px] flex overflow-hidden text-xs bg-[#e9ecef] rounded-md  ">
                      <div
                        className="progress-bar bg-[#e1c03f] text-white flex flex-col justify-center overflow-hidden text-center whitespace-nowrap transition-all duration-500 ease-linear w-[50%]"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-right inline-block text-sm w-10 pl-[10px] ">
                      15
                    </div>
                  </div>
                  <div className="review-list mb-[10px] items-center flex">
                    <div className="list-number whitespace-nowrap font-medium text-[#222] pr-[10px] min-w-[55px] ">
                      2 Star
                    </div>
                    <div className="w-[300px] max-[575px]:w-[200px] h-[5px] flex overflow-hidden text-xs bg-[#e9ecef] rounded-md  ">
                      <div
                        className="progress-bar bg-[#e1c03f] text-white flex flex-col justify-center overflow-hidden text-center whitespace-nowrap transition-all duration-500 ease-linear"
                        style={{
                          width: "30%",
                        }}
                        aria-valuenow={30}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-right inline-block text-sm w-10 pl-[10px] ">
                      2
                    </div>
                  </div>
                  <div className="review-list mb-[10px] items-center flex">
                    <div className="list-number whitespace-nowrap font-medium text-[#222] pr-[10px] min-w-[55px] ">
                      1 Star
                    </div>
                    <div className="w-[300px] max-[575px]:w-[200px] h-[5px] flex overflow-hidden text-xs bg-[#e9ecef] rounded-md  ">
                      <div
                        className="progress-bar bg-[#e1c03f] text-white flex flex-col justify-center overflow-hidden text-center whitespace-nowrap transition-all duration-500 ease-linear"
                        style={{
                          width: "20%",
                        }}
                        aria-valuenow={10}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="value text-right inline-block text-sm w-10 pl-[10px] ">
                      1
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">
              <div className="max-[767px]:mb-[30px] text-center justify-start relative flex">
                <img
                  height={60}
                  width={60}
                  src="/src/assets/images/avatar/Image (11).jpg"
                  className="text-transparent align-middle "
                  alt="comments-2.png"
                />
                <div className="ml-[20px]">
                  <h6 className="mt-0 mb-0 text-[15px] font-medium text-[#222] leading-[1.3125]">
                    Bessie Cooper
                  </h6>
                  <div>
                    <span className="text-sm">12 March 2022</span>
                  </div>
                </div>
              </div>
              <p className="text-[#222] font-normal mx-0 leading-[1.85] mt-[20px] mb-[20px] ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text.
              </p>
              <div className="review_cansel_btns flex">
                <a className="text-[#697488] leading-[26px] tracking-normal mr-[30px] cursor-pointer outline-0 transition-all duration-300 ease-linear">
                  <i className="fas fa-thumbs-up mr-[10px] font-black" />
                  Helpful
                </a>
                <a className="text-[#697488] leading-[26px] tracking-normal mr-[30px] cursor-pointer outline-0 transition-all duration-300 ease-linear">
                  <i className="fas fa-thumbs-down mr-[10px] font-black" />
                  Not helpful
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0 mt-6">
              <div className="max-[767px]:mb-[30px] text-center justify-start relative flex">
                <img
                  height={60}
                  width={60}
                  src="/src/assets/images/avatar/Image (3).jpg"
                  className="text-transparent align-middle "
                  alt="comments-2.png"
                />
                <div className="ml-[20px]">
                  <h6 className="mt-0 mb-0 text-[15px] font-medium text-[#222] leading-[1.3125]">
                    Darrell Steward
                  </h6>
                  <div>
                    <span className="text-sm">12 March 2022</span>
                  </div>
                </div>
              </div>
              <p className="text-[#222] font-normal mx-0 leading-[1.85] mt-[20px] mb-[20px] ">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don&apos;t look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn&apos;t anything
                embarrassing hidden in the middle of text.
              </p>
              <div className="review_cansel_btns flex">
                <a className="text-[#697488] leading-[26px] tracking-normal mr-[30px] cursor-pointer outline-0 transition-all duration-300 ease-linear pb-[30px]">
                  <i className="fas fa-thumbs-up mr-[10px] font-black" />
                  Helpful
                </a>
                <a className="text-[#697488] leading-[26px] tracking-normal mr-[30px] cursor-pointer outline-0 transition-all duration-300 ease-linear">
                  <i className="fas fa-thumbs-down mr-[10px] font-black " />
                  Not helpful
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0">
              <div className="relative pb-[50px] border-b border-[#e9e9e9]">
                <Link
                  href="/service-single"
                  className="ud-btn btn-light-thm bg-[#5bbb7b1a]  text-[#5bbb7b] max-[339px]:py-[13px] max-[339px]:px-[25px] hover:text-white !font-bold flex items-center justify-center w-fit py-4"
                >
                  See More
                  <FaArrowRightLong className="ml-[10px] text-base -rotate-45 font-light" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceDetailReviewInfo;
