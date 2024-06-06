import React from "react";
import ServiceDetailSlider from "./ServiceDetailSlider.jsx";
import ServiceDetailFaq from "./ServiceDetailFaq.jsx";
import ServiceDetailExtra from "./ServiceDetailExtra.jsx";
import ServiceDetailReviewInfo from "./ServiceDetailReviewInfo.jsx";
import ServiceDetailComment from "./ServiceDetailComment.jsx";
/*import ServiceDetailComment1 from "../element/ServiceDetailComment1";
import ServiceDetailExtra1 from "../element/ServiceDetailExtra1";
import ServiceDetailFaq1 from "../element/ServiceDetailFaq1";
import ServiceDetailPrice1 from "../element/ServiceDetailPrice1";
import ServiceDetailReviewInfo1 from "../element/ServiceDetailReviewInfo1";
import ServiceDetailSlider1 from "../element/ServiceDetailSlider1";*/
import { StickyContainer } from "react-sticky";
import { Sticky } from "react-sticky";
import ServiceDetailPrice from "./ServiceDetailPrice.jsx";
import ServiceContactWidget from "./ServiceContactWidget.jsx";

//import ServiceContactWidget1 from "../element/ServiceContactWidget1";
//import Image from "next/image";
//import { useParams } from "next/navigation";
//import { product1 } from "/src/assets/data/product";
// import usescren fro ract
import useScreen from "./useScreen.js";
import { FaArrowRightLong } from "react-icons/fa6";
import PropTypes from "prop-types";

export default function ServiceDetails(props) {
  const isMatchedScreen = useScreen(1216);
  /* const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("currentUserUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("currentUserUpdated", handleStorageChange);
    };
  }, []);*/
  const data = props.data;

  //const { id } = useParams();

  //const data = product1.find((item) => item.id == id);

  return (
    <>
      <StickyContainer>
        <section className="max-[991.98px]:py-[60px] pt-[10px] pb-[90px] pb30-md max-[991.98px]:pb-[30px] relative ">
          <div className="w-full mx-auto px-[12px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] ">
            <div className="flex flex-wrap -mx-3 ">
              <div className="shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0 min-[992px]:w-2/3 ">
                <div className="column">
                  <div className="mb-[30px] pb-[30px] border-b border-[#e9e9e9] flex flex-wrap -mx-3">
                    <div className="col-xl-12  shrink-0 w-full max-w-full px-3 min-[1200px]: flex-initial min-[1200px]:shrink-0 min-[1200px]:w-full">
                      <div className="relative">
                        {data ? (
                          <h2 className="text-[32px] font-bold text-[#222] leading-[1.3125] mb-[8px] max-[575.98px]:text-[20px]">
                            {data.title}
                          </h2>
                        ) : (
                          <h2 className="text-[32px] font-bold text-[#222] leading-[1.3125] mb-[8px] max-[575.98px]:text-[20px]">
                            I will design website UI UX in adobe xd or figma
                          </h2>
                        )}
                        <div className="mt-[30px] flex flex-wrap ">
                          <a
                            className="mr-2 max-[767.98px]:mb-[5px] flex items-center cursor-pointer text-[#222] transition-all duration-300 ease-in"
                            href="#"
                          >
                            <span className="mr10 relative mr-[10px]">
                              <img
                                width={40}
                                height={40}
                                className="text-transparent rounded-[50%]"
                                src="/src/assets/images/avatar/Image.jpg"
                                alt="Freelancer Photo"
                              />
                              <span className="bg-[#5bbb7b] border-2 border-white absolute rounded-[50%] left-[30px] top-0 h-[9px] w-[9px] max-[575.98px]:right-0"></span>
                            </span>
                            <span className="text-sm">Eleanor Pena</span>
                          </a>
                          <p className="mr-[8px] max-[575.98px]:ml-0 max-[767.98px]:ml-[15px] max-[767.98px]:mb-[5px] text-sm flex items-center font-medium leading-[1.85] mt-0 ml-[25px] mb-0">
                            <i className="fas fa-star mr-[8px] align-middle text-[#e1c03f] text-[10px]"></i>{" "}
                            4.82 94 reviews
                          </p>
                          <p className="mr-[8px] max-[575.98px]:ml-0 max-[767.98px]:ml-[15px] max-[767.98px]:mb-[5px] text-sm flex items-center font-medium leading-[1.85] mt-0 ml-[25px] mb-0">
                            <img
                              width="20"
                              height="20"
                              className="align-middle text-[20px] mr-[8px]"
                              src="https://img.icons8.com/carbon-copy/100/add-file.png"
                              alt="add-file"
                            />
                            {/* <i className="flaticon-file-1 align-middle text-[20px] mr-[8px]"></i>{" "} */}
                            2 Order in Queue
                          </p>
                          <p className="max-[575.98px]:ml-0 max-[767.98px]:ml-[15px] max-[767.98px]:mb-[5px] text-sm flex items-center font-medium leading-[1.85] mt-0 ml-[25px] mb-0">
                            <img
                              width="20"
                              height="20"
                              className="align-middle text-[20px] mr-[8px]"
                              src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-website-approved-and-rejected-tanah-basah-basic-outline-tanah-basah-2.png"
                              alt="external-website-approved-and-rejected-tanah-basah-basic-outline-tanah-basah-2"
                            />
                            {/* <i className="flaticon-website align-middle text-[20px] mr-[8px]"></i>{" "} */}
                            902 Views
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ServiceDetailSlider />
                  <div className="service-about">
                    <h4 className="text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                      About
                    </h4>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using &apos; Content here, content here&apos;,
                      making it look like readable English.
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0">
                      Services I provide:
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0">
                      1) Website Design
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0">
                      2) Mobile App Design
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0">
                      3) Brochure Design
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0">
                      4) Business Card Design
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
                      5) Flyer Design
                    </p>
                    <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for &apos;lorem ipsum&apos; will uncover many web sites
                      still in their infancy. Various versions have evolved over
                      the years, sometimes by accident, sometimes on purpose
                      (injected humour and the like).
                    </p>
                    <div className="flex items-start mb-[50px] flex-wrap">
                      <div className="list1 max-[640px]:text-align ">
                        <h6 className="text-[15px]  font-semibold text-[#222] leading-[1.3125] mt-0 mb-2 ">
                          App type
                        </h6>
                        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0 text-[15px]">
                          Business, Food &amp; drink,
                        </p>
                        <p className="text-[#222] font-normal  leading-[1.85] mb-[15px] text-[15px]">
                          Graphics &amp; design
                        </p>
                      </div>
                      <div className="list1 sm:ml-20 ">
                        <h6 className="text-[15px]  font-semibold text-[#222] leading-[1.3125] mt-0 mb-2 ">
                          Design tool
                        </h6>
                        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-0 text-[15px]">
                          Adobe XD, Figma,
                        </p>
                        <p className="text-[#222] font-normal  leading-[1.85] mb-[15px] text-[15px]">
                          Adobe Photoshop
                        </p>
                      </div>
                      <div className="list1 sm:ml-20">
                        <h6 className="text-[15px]  font-semibold text-[#222] leading-[1.3125] mt-0 mb-2 ">
                          Device
                        </h6>
                        <p className="text-[#222] font-normal  leading-[1.85] mb-[15px] text-[15px]">
                          Mobile, Desktop
                        </p>
                      </div>
                    </div>
                    <hr className="mb-[60px] opacity-100 bg-[#e9e9e9] mt-4 border-neutral-800" />
                    <h4 className="text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-[8px]">
                      Compare Packages
                    </h4>
                    <div className="mb-[60px] mt-[30px] border border-[#e9e9e9] realtive overflow-x-auto text-[#6b7177] text-[15px] font-normal leading[28px]">
                      <table className="table table-borderless mb-0 caption-bottom w-full border-[#dee2e6]">
                        <thead className="t-head align-bottom border-0 border-solid ">
                          <tr>
                            <th
                              className="text-[#222] font-medium text-[15px] leading-[22px] py-[30px]  align-baseline border-b-0 px-2 bg-white  flex-1 flex-shrink-0"
                              scope="col"
                            />
                            <th
                              className="text-[#222] font-medium text-[15px] leading-[22px] py-[30px] align-baseline border-b-0 px-2 bg-white  flex-1 flex-shrink-0  text-left"
                              scope="col"
                            >
                              <span className="max-[575.98px]:text-[20px] mt-0 mb-2 text-[32px] font-bold text-[#222] leading-[1.3125] ">
                                $29{" "}
                                <small className="font-normal text-[15px] text-[#697488] leading-[1.3125] ">
                                  / monthly
                                </small>
                              </span>
                              <br />
                              <span className="h4 text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                                Basic
                              </span>
                              <br />
                              <span className="text-[#222] font-normal text-[15px] leading-[22px] ">
                                I will redesign your current{" "}
                                <br className="hidden min-[992px]:block" />{" "}
                                landing page or create one for
                                <br className="hidden min-[992px]:block" />
                                you (upto 4 sections)
                              </span>
                            </th>
                            <th
                              className="text-[#222] font-medium text-[15px] leading-[22px] py-[30px] align-baseline border-b-0 px-2 bg-white  flex-1 flex-shrink-0 text-left"
                              scope="col"
                            >
                              <span className="max-[575.98px]:text-[20px] mt-0 mb-2 text-[32px] font-bold text-[#222] leading-[1.3125] ">
                                $49{" "}
                                <small className="font-normal text-[15px] text-[#697488] leading-[1.3125] ">
                                  / monthly
                                </small>
                              </span>
                              <br />
                              <span className="h4 text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                                Standard
                              </span>
                              <br />
                              <span className="text-[#222] font-normal text-[15px] leading-[22px] ">
                                4 High Quality Desktop{" "}
                                <br className="hidden min-[992px]:block" />{" "}
                                Pages.
                              </span>
                            </th>
                            <th
                              className="text-[#222] font-medium text-[15px] leading-[22px] py-[30px] align-baseline border-b-0 px-2 bg-white  flex-1 flex-shrink-0 text-left"
                              scope="col"
                            >
                              <span className="max-[575.98px]:text-[20px] mt-0 mb-2 text-[32px] font-bold text-[#222] leading-[1.3125] ">
                                $89{" "}
                                <small className="font-normal text-[15px] text-[#697488] leading-[1.3125] ">
                                  / monthly
                                </small>
                              </span>
                              <br />
                              <span className="h4 text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                                Premium
                              </span>
                              <br />
                              <span className="text-[#222] font-normal text-[15px] leading-[22px] ">
                                4 High Quality Desktop and{" "}
                                <br className="hidden min-[992px]:block" />{" "}
                                Mobile Pages.
                              </span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="t-body border-t-0 align-bottom border-solid ">
                          <tr className="bgc-thm3 border-t border-[#e9e9e9] ">
                            <th
                              className="border-b-0 text-[#222] font-medium text-[15px] tracking-normal p-[30px]  "
                              scope="row"
                            >
                              Source file
                            </th>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              <a className="rounded-[50%] text-white   text-[8px] h-[25px] leading-[25px] text-center w-[25px] bg-[#5bbb7b] cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center">
                                <span className="fas fa-check font-black " />
                              </a>
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              <a className="rounded-[50%] text-white   text-[8px] h-[25px] leading-[25px] text-center w-[25px] bg-[#5bbb7b] cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center">
                                <span className="fas fa-check font-black " />
                              </a>
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              <a className="rounded-[50%] text-white   text-[8px] h-[25px] leading-[25px] text-center w-[25px] bg-[#5bbb7b] cursor-pointer transition-all duration-300 ease-linear flex items-center justify-center">
                                <span className="fas fa-check font-black " />
                              </a>
                            </td>
                          </tr>
                          <tr className="bgc-thm3 border-t border-[#e9e9e9] ">
                            <th
                              className="border-b-0 text-[#222] font-medium text-[15px] tracking-normal p-[30px]  "
                              scope="row"
                            >
                              Number of pages
                            </th>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              2
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              4
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              6
                            </td>
                          </tr>
                          <tr className="bgc-thm3 border-t border-[#e9e9e9] ">
                            <th
                              className="border-b-0 text-[#222] font-medium text-[15px] tracking-normal p-[30px]  "
                              scope="row"
                            >
                              Revisions
                            </th>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              1
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              3
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              5
                            </td>
                          </tr>
                          <tr className="bgc-thm3 border-t border-[#e9e9e9] ">
                            <th
                              className="border-b-0 text-[#222] font-medium text-[15px] tracking-normal p-[30px]  "
                              scope="row"
                            >
                              Delivery Time{" "}
                            </th>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              2 Days
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              3 Days
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              4 Days
                            </td>
                          </tr>
                          <tr className="bgc-thm3 border-t border-[#e9e9e9] ">
                            <th
                              className="border-b-0 text-[#222] font-medium text-[15px] tracking-normal p-[30px]  "
                              scope="row"
                            >
                              Total
                            </th>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              $29
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              $49
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              $89
                            </td>
                          </tr>
                          <tr className="bgc-thm3 border-t border-[#e9e9e9] ">
                            <th
                              className="border-b-0 text-[#222] font-medium text-[15px] tracking-normal p-[30px]  "
                              scope="row"
                            />
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white rounded-[4px] font-bold text-[15px] not-italic  tracking-normal py-[13px] px-[35px] realtive overflow-hidden text-center z-0 transition-all duration-300 ease-linear cursor-pointer hover:border-2 hover:border-[#1f4b3f] hover:text-white flex items-center justify-center w-fit">
                                Select
                                <FaArrowRightLong className="ml-[5px] -rotate-45 font-light" />
                              </a>
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white rounded-[4px] font-bold text-[15px] not-italic  tracking-normal py-[13px] px-[35px] realtive overflow-hidden text-center z-0 transition-all duration-300 ease-linear cursor-pointer hover:border-2 hover:border-[#1f4b3f] hover:text-white flex items-center justify-center w-fit">
                                Select
                                <FaArrowRightLong className="ml-[5px] -rotate-45 font-light" />
                              </a>
                            </td>
                            <td className="px-2 py-[30px] font-normal border-b-0 bg-inherit">
                              <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white rounded-[4px] font-bold text-[15px] not-italic  tracking-normal py-[13px] px-[35px] realtive overflow-hidden text-center z-0 transition-all duration-300 ease-linear cursor-pointer hover:border-2 hover:border-[#1f4b3f] hover:text-white flex items-center justify-center w-fit">
                                Select
                                <FaArrowRightLong className="ml-[5px] -rotate-45 font-light" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr className="mb-[60px] opacity-100 bg-[#e9e9e9] mt-4 border-neutral-800" />
                    <h4 className="text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2  ">
                      Frequently Asked Questions
                    </h4>
                    <ServiceDetailFaq />
                    <hr className="mb-[60px] opacity-100 bg-[#e9e9e9] mt-4 border-neutral-800" />
                    <h4 className="text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2  ">
                      Add Extra Services
                    </h4>

                    <ServiceDetailExtra />

                    <hr className="mb-[60px] opacity-100 bg-[#e9e9e9] mt-4 border-neutral-800" />

                    <ServiceDetailReviewInfo />
                    <ServiceDetailComment />
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0 min-[992px]:w-1/3">
                <div className="column">
                  {isMatchedScreen ? (
                    <Sticky>
                      {({ style }) => (
                        <div className="scrollbalance-inner" style={style}>
                          <div className="blog-sidebar max-w-[370px] min-[992px]:ml-auto">
                            <ServiceDetailPrice />
                            <ServiceContactWidget />
                          </div>
                        </div>
                      )}
                    </Sticky>
                  ) : (
                    <div className="scrollbalance-inner">
                      <div className="blog-sidebar max-w-[370px] min-[992px]:ml-auto">
                        <ServiceDetailPrice />
                        <ServiceContactWidget />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </StickyContainer>
    </>
  );
}

ServiceDetails.propTypes = {
  data: PropTypes.object,
};

ServiceDetails.defaultProps = {
  data: {},
};
