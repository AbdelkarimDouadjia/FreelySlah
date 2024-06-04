import React from "react";
import { project, projectProposal } from "../../components/section/product.js";
/*import ProjectProposalCard1 from "../card/ProjectProposalCard1";
import ServiceDetailExtra1 from "../element/ServiceDetailExtra1";*/
import { Sticky, StickyContainer } from "react-sticky";
/*import ProjectPriceWidget1 from "../element/ProjectPriceWidget1";
import ProjectContactWidget1 from "../element/ProjectContactWidget1";*/
import useScreen from "../../components/section/useScreen.js";
//import { useParams } from "react-router-dom";
import { LuCalendarCheck } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import { LuBadgeDollarSign } from "react-icons/lu";
import { PiClockCountdownBold } from "react-icons/pi";
import { BiCopy } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import FileUpload from "./FileUpload";
import ServiceContactWidget from "../../components/section/ServiceContactWidget.jsx";
import ProjectPriceWidget from "./components/ProjectPriceWidget.jsx";
import ProjectCard from "./components/ProjectCard.jsx";

const skills = [
  "SaaS",
  "Figma",
  "Software Design",
  "Sketch",
  "Prototyping",
  "HTML5",
  "Design",
  "Writing",
];

// Dummy data for ProjectCard components
const projects = [
  {
    title: "Building end-to-end crowdfunding application",
    type: "Remote work",
    salary: 12000,
    imageSrc: "/src/assets/images/icon/company1.svg",
    description:
      "Looking for an experienced developer for an ongoing project. You will work with an existing SCRUM team for this project...",
    tags: [
      { name: "Kotlin", bgColor: "#EBF5F9", textColor: "#70B8D7" },
      { name: "IOS Developer", bgColor: "#EBF9EF", textColor: "#50CF74" },
      { name: "Software Engineer", bgColor: "#EFEBF9", textColor: "#6D4BCD" },
    ],
    location: "New York, Manhattan",
    estimatedTime: "1 to 3 months",
    isPaymentVerified: true,
  },
  {
    title: "UX Copywriter for company profile landing page",
    type: "Fulltime",
    salary: 2200,
    imageSrc: "/src/assets/images/icon/company2.svg",
    description:
      "Seeking a creative UX Copywriter for our landing page. The ideal candidate will collaborate with our design team to deliver...",
    tags: [
      { name: "UX", bgColor: "#F9F2EB", textColor: "#CE894B" },
      { name: "Copywriting", bgColor: "#EBF0F9", textColor: "#4B77CE" },
      { name: "Marketing", bgColor: "#EBF9F4", textColor: "#3DCA97" },
    ],
    location: "San Francisco, CA",
    estimatedTime: "2 to 4 weeks",
    isPaymentVerified: false,
  },
  // Add more project objects here
];

export default function ProjectDetails() {
  //const isMatchedScreen = useScreen(1216);
  const isMatchedScreen = true;
  //const { id } = useParams();

  //const data = project1.find((item) => item.id == id);

  return (
    <>
      <StickyContainer>
        <section className="pt-[30px] mb-36">
          <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
            <div className="row !flex-wrap">
              <div className="col-lg-8">
                <div className=" h-auto mb-[30px] pb-[60px] pt-[60px] rounded-2xl bg-[url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e88236dd83c7f9408af91782329400d7-1704292070364/Banner-Desktop.png')] bg-cover bg-no-repeat bg-center  items-center relative flex overflow-hidden">
                  <div className="row visible ">
                    <div className="col-xl-12">
                      <div className="position-relative pl60 pl20-sm relative md-b:pl-[60px] pl-5 ">
                        {/* {data ? (
                          <h2>{data.title}</h2>
                        ) : (
                          <h2>Website Designer Required For Directory Theme</h2>
                        )} */}
                        <h2 className=" xs-b:text-[32px] text-[20px] font-bold text-white leading-[1.3125] mt-0 mb-2">
                          Website Designer Required For Directory Theme
                        </h2>
                        <div className="list-meta mt-[15px] flex items-center flex-wrap">
                          <p className=" md-b:mb-0 mr-2 mb-[5px] font-medium text-[15px]  text-white mt-0 ml-0 leading-[1.85] flex items-center justify-start ">
                            <TfiLocationPin className="align-middle text-[40px] !text-white mr-2 bg-[#233D2D] p-2 rounded-full " />
                            <span className="bg-[#ffffff24] px-4 py-1 rounded-lg ">
                              London, UK
                            </span>
                          </p>
                          <p className=" md-b:mb-0 mr-2 mb-[5px] font-medium text-[15px]  text-white mt-0 ml-0 leading-[1.85] flex items-center justify-start xs-b:ml-[15px] ">
                            {/* <i className="flaticon-calendar text-thm2 vam fz20 me-2"></i>{" "} */}
                            <span className="align-middle z-10 !text-[40px] !text-white mr-2  bg-[#233D2D] p-2 rounded-full">
                              <LuCalendarCheck className="align-middle z-10 text-[24px] " />
                            </span>
                            <span className="bg-[#ffffff24] px-4 py-1 rounded-lg">
                              January 15, 2022
                            </span>
                          </p>
                          <p className=" md-b:mb-0 mr-2 mb-[5px] font-medium text-[15px]  text-white mt-0 ml-0 leading-[1.85] flex items-center justify-start xs-b:ml-[15px]">
                            {/* <i className="flaticon-website text-thm2 vam fz20 me-2"></i>{" "} */}
                            <span className="align-middle z-10 !text-[40px] !text-white mr-2  bg-[#233D2D] p-2 rounded-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="18"
                                height="18"
                                viewBox="0,0,256,256"
                                className="align-middle z-10 text-[24px] "
                              >
                                <g
                                  fill="#ffffff"
                                  fillRule="nonzero"
                                  stroke="none"
                                  strokeWidth="1"
                                  strokeLinecap="butt"
                                  strokeLinejoin="miter"
                                  strokeMiterlimit="10"
                                  strokeDasharray=""
                                  strokeDashoffset="0"
                                  fontFamily="none"
                                  fontWeight="none"
                                  fontSize="none"
                                  textAnchor="none"
                                >
                                  <g transform="scale(2,2)">
                                    <path d="M14,1c-7.2,0 -13,5.8 -13,13v100c0,7.2 5.8,13 13,13h45c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3h-45c-3.9,0 -7,-3.1 -7,-7v-79h114v24c0,1.7 1.3,3 3,3c1.7,0 3,-1.3 3,-3v-45c0,-7.2 -5.8,-13 -13,-13zM14,7h100c3.9,0 7,3.1 7,7v15h-114v-15c0,-3.9 3.1,-7 7,-7zM18,15c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h4c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM34,15c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h4c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM97,67c-16.5,0 -30,13.5 -30,30c0,16.5 13.5,30 30,30c16.5,0 30,-13.5 30,-30c0,-16.5 -13.5,-30 -30,-30zM97,73c13.2,0 24,10.8 24,24c0,13.2 -10.8,24 -24,24c-13.2,0 -24,-10.8 -24,-24c0,-13.2 10.8,-24 24,-24zM109,88c-0.75,0 -1.49961,0.30039 -2.09961,0.90039l-10.90039,10.90039l-4.90039,-4.90039c-1.2,-1.2 -3.09922,-1.2 -4.19922,0c-1.2,1.2 -1.2,3.09922 0,4.19922l7,7c0.6,0.6 1.39961,0.90039 2.09961,0.90039c0.7,0 1.49961,-0.30039 2.09961,-0.90039l13,-13c1.2,-1.2 1.2,-3.09922 0,-4.19922c-0.6,-0.6 -1.34961,-0.90039 -2.09961,-0.90039z"></path>
                                  </g>
                                </g>
                              </svg>
                            </span>

                            <span className="bg-[#ffffff24] px-4 py-1 rounded-lg">
                              902 Views
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="scrollbalance-inner">
                    <div className="row">
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style border-none p-0 mb-[30px] bg-white rounded-lg relative transition-all duration-300 ease-linear items-start flex">
                          <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1] ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="45"
                              height="45"
                              viewBox="0,0,256,256"
                              className="font-normal"
                            >
                              <g
                                fill="#1f4b3f"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                              >
                                <g transform="scale(2,2)">
                                  <path d="M101,7c-11,0 -20,9 -20,20c0,11 9,20 20,20c11,0 20,-9 20,-20c0,-11 -8.9,-20 -20,-20zM101,13c7.7,0 14,6.3 14,14c0,7.7 -6.2,14 -14,14c-7.7,0 -14,-6.3 -14,-14c0,-7.7 6.3,-14 14,-14zM59,19.69922c-37.4,0.1 -58,15.80078 -58,44.30078c0,19.7 10.00039,33.5 28.90039,40c1.5,0.5 3.30039,-0.19922 3.90039,-1.69922c0.6,-1.6 -0.20078,-3.40039 -1.80078,-3.90039c-16.6,-5.7 -25,-17.20039 -25,-34.40039c0,-17.4 9,-38.19922 52,-38.19922c3.2,0 6.19961,0.09883 9.09961,0.29883c1.6,0.1 3.00117,-1.09922 3.20117,-2.69922v-0.09961c0.2,-1.6 -1.10117,-3.10117 -2.70117,-3.20117c-3.1,-0.2 -6.19961,-0.40039 -9.59961,-0.40039zM36,54c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h50c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3zM113.94141,54.51172c-0.43594,-0.04375 -0.8918,0.0125 -1.3418,0.1875h-0.09961c-1.3,0.5 -2.00039,1.80117 -1.90039,3.20117c0.3,2.1 0.40039,4.09961 0.40039,6.09961c0,28.7 -23.79922,36.5 -43.69922,38c-1.5,0.1 -2.9,0.6 -4,1.5c-3.5,3 -4.00078,7.50039 -1.80078,10.90039l5,7.5c0.6,0.9 1.5,1.29883 2.5,1.29883c0.6,0 1.20078,-0.19961 1.80078,-0.59961c1.3,-1 1.49961,-2.89922 0.59961,-4.19922l-4.90039,-7.40039c-0.6,-0.9 -0.29961,-1.7 -0.09961,-2c0.1,-0.3 0.59961,-0.99961 1.59961,-1.09961c31.6,-2.4 49,-18.00039 49,-43.90039c0,-2.4 -0.20039,-4.70039 -0.40039,-6.90039c-0.225,-1.425 -1.35039,-2.45664 -2.6582,-2.58789zM36,74c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h30c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3z"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="details z-10 pl-[35px]">
                            <h5 className="title mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                              Seller Type
                            </h5>
                            <p className="mb-0 text-[#222] font-normal mt-0 mx-0 leading-[1.85] ">
                              Company
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style border-none p-0 mb-[30px] bg-white rounded-lg relative transition-all duration-300 ease-linear items-start flex">
                          <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                            <LuBadgeDollarSign />
                          </div>
                          <div className="details z-10 pl-[35px]">
                            <h5 className="title mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                              Project type
                            </h5>
                            <p className="mb-0 text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                              Hourly
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style border-none p-0 mb-[30px] bg-white rounded-lg relative transition-all duration-300 ease-linear items-start flex">
                          <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                            <span className="flaticon-fifteen" />
                            <PiClockCountdownBold />
                          </div>
                          <div className="details z-10 pl-[35px]">
                            <h5 className="title mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                              Project Duration
                            </h5>
                            <p className="mb-0 text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                              10-15 Hours
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style border-none p-0 mb-[30px] bg-white rounded-lg relative transition-all duration-300 ease-linear items-start flex">
                          <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="45"
                              height="45"
                              viewBox="0,0,256,256"
                            >
                              <g
                                fill="#1f4b3f"
                                fillRule="nonzero"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                              >
                                <g transform="scale(4,4)">
                                  <path d="M31,0.91406c-0.67187,-0.00391 -1.34375,0.21875 -1.89062,0.66406l-4.57812,3.70703c-0.21875,0.17969 -0.50781,0.25781 -0.78516,0.21094l-5.82422,-0.92578c-1.39062,-0.21875 -2.76562,0.57813 -3.26953,1.89063l-2.11328,5.50391c-0.10156,0.26563 -0.30859,0.47266 -0.57422,0.57422l-5.50391,2.11328c-1.3125,0.50391 -2.10937,1.87891 -1.89062,3.26953l0.92578,5.82422c0.04297,0.27734 -0.03125,0.5625 -0.21094,0.78516l-3.70703,4.57813c-0.88672,1.09766 -0.88672,2.68359 0,3.77734l3.70703,4.58203c0.17969,0.21875 0.25781,0.50391 0.21094,0.78516l-0.92578,5.82422c-0.21875,1.39063 0.57813,2.76563 1.89063,3.26953l5.50391,2.10938c0.26563,0.10547 0.47266,0.3125 0.57422,0.57813l2.11328,5.5c0.50391,1.31641 1.88281,2.11328 3.26953,1.89063l5.82422,-0.92187c0.27734,-0.04297 0.5625,0.03125 0.78516,0.21094l4.57813,3.70703c0.55078,0.44531 1.21875,0.66797 1.89063,0.66797c0.66797,0 1.33984,-0.22266 1.88672,-0.66797l4.58203,-3.70703c0.21875,-0.17969 0.50781,-0.25781 0.78516,-0.21484l5.82422,0.92578c1.38672,0.21875 2.76563,-0.57422 3.26953,-1.89062l2.10938,-5.50391c0.10547,-0.26172 0.3125,-0.47266 0.57813,-0.57422l5.5,-2.10937c1.31641,-0.50391 2.10938,-1.87891 1.89063,-3.26953l-0.92187,-5.82422c-0.04297,-0.27734 0.03125,-0.5625 0.21094,-0.78516l3.70703,-4.57812c0.88672,-1.09766 0.88672,-2.68359 0,-3.78125l-3.70703,-4.57812c-0.17969,-0.21875 -0.25781,-0.50781 -0.21094,-0.78516l0.92188,-5.82422c0.21875,-1.39062 -0.57422,-2.76562 -1.89062,-3.26953l-5.5,-2.11328c-0.26562,-0.10156 -0.47266,-0.30859 -0.57422,-0.57422l-2.11328,-5.50391c-0.50391,-1.3125 -1.87891,-2.10547 -3.26953,-1.89062l-5.82422,0.92578c-0.27734,0.04297 -0.5625,-0.03125 -0.78516,-0.21094l-4.57812,-3.70703c-0.55078,-0.44531 -1.21875,-0.66406 -1.89062,-0.66406zM31,2.91016c0.22266,0 0.44922,0.07422 0.62891,0.22266l4.58203,3.71094c0.66016,0.53125 1.51953,0.76563 2.35547,0.63281l5.82422,-0.92578c0.46094,-0.07422 0.92188,0.19141 1.08984,0.62891l2.11328,5.50391c0.30078,0.79297 0.92969,1.41797 1.72266,1.72266l5.50391,2.11328c0.4375,0.16797 0.70313,0.625 0.62891,1.08984l-0.92187,5.82422c-0.13281,0.83594 0.09766,1.69531 0.62891,2.35547l3.71094,4.58203c0.29688,0.36328 0.29688,0.89453 0,1.25781l-3.71094,4.58203c-0.53125,0.66016 -0.76172,1.51953 -0.62891,2.35547l0.92188,5.82422c0.07422,0.46484 -0.19141,0.92188 -0.62891,1.08984l-5.50391,2.11328c-0.79297,0.30078 -1.41797,0.92969 -1.72266,1.72266l-2.11328,5.50391c-0.16797,0.4375 -0.625,0.70313 -1.08984,0.62891l-5.82422,-0.92187c-0.83594,-0.13281 -1.69531,0.09766 -2.35547,0.62891l-4.58203,3.71094c-0.36328,0.29688 -0.89453,0.29688 -1.25781,0l-4.58203,-3.71094c-0.53516,-0.43359 -1.20703,-0.66797 -1.89062,-0.66797c-0.15625,0 -0.3125,0.01172 -0.46484,0.03906l-5.82422,0.92188c-0.46094,0.07422 -0.92187,-0.19141 -1.08984,-0.62891l-1.84766,-4.82031h0.26172c1.55078,0 2.92188,-0.72656 3.83594,-1.83594c0.10547,0.08203 0.22656,0.14453 0.35938,0.17969c0.74219,0.20313 1.91016,0.30078 2.82422,0.30078c0.21484,0 0.41797,-0.00391 0.59766,-0.01562l16.46484,-1.03125c1.73047,-0.10547 3.08203,-1.54687 3.08203,-3.27734c0,-0.80078 -0.28125,-1.55469 -0.80078,-2.15234c0.87891,-0.65234 1.4375,-1.69531 1.4375,-2.84375v-0.45703c0,-0.81641 -0.28125,-1.57031 -0.75,-2.16797c1.21484,-0.63281 2.01563,-1.89062 2.01563,-3.32422c0,-1.13672 -0.51172,-2.16016 -1.3125,-2.84375c0.80859,-0.69141 1.3125,-1.71875 1.3125,-2.85547v-0.20703c0,-1.94922 -1.58594,-3.46875 -3.53125,-3.46875h-12.01953l1.67578,-6.76953c0.35938,-1.44531 0.03906,-2.94531 -0.875,-4.11719c-0.91797,-1.17187 -2.29687,-1.84766 -3.78125,-1.84766h-0.20312c-0.39062,0 -0.75,0.23047 -0.91016,0.58984l-6.08594,13.38281c-0.88672,-0.80078 -2.04687,-1.23828 -3.33594,-1.23828h-7.43359c0,-0.16797 0,-0.40234 -0.02734,-0.56641l-0.92187,-5.82422c-0.07422,-0.46484 0.19141,-0.92187 0.62891,-1.08984l5.50391,-2.11328c0.79297,-0.30078 1.41797,-0.92969 1.72266,-1.72266l2.11328,-5.50391c0.16797,-0.4375 0.62891,-0.69922 1.08984,-0.62891l5.82422,0.92188c0.83984,0.13281 1.69531,-0.09766 2.35547,-0.62891l4.58203,-3.71094c0.18359,-0.14844 0.40625,-0.22266 0.62891,-0.22266zM36.03516,10.69141c-0.38281,0.05469 -0.71875,0.33203 -0.82422,0.73047l-0.51953,1.93359c-0.14453,0.53125 0.17188,1.08203 0.70703,1.22266c0.08594,0.02344 0.17578,0.03516 0.25781,0.03516c0.44141,0 0.84766,-0.29297 0.96875,-0.73828l0.51563,-1.93359c0.14453,-0.53516 -0.17187,-1.08203 -0.70312,-1.22266c-0.13672,-0.03906 -0.27344,-0.04687 -0.40234,-0.02734zM41.125,12.6875c-0.39062,-0.04687 -0.78516,0.13281 -0.98828,0.49219l-1,1.73047c-0.27734,0.47656 -0.11328,1.08984 0.36328,1.36719c0.15625,0.08984 0.32813,0.13281 0.5,0.13281c0.34375,0 0.67969,-0.17969 0.86328,-0.5l1,-1.73047c0.27734,-0.47656 0.11719,-1.08984 -0.36328,-1.36719c-0.12109,-0.07031 -0.24609,-0.10937 -0.375,-0.125zM25.89453,13.29688c0.70313,0.10938 1.33594,0.47656 1.78125,1.04688c0.53516,0.68359 0.71875,1.55859 0.50781,2.40234l-1.79687,7.1875h-1.12109c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1h15.20313c0.84375,0 1.53125,0.6875 1.53125,1.53516v0.20703c0,0.85547 -0.60937,1.57813 -1.45312,1.71875l-1.51172,0.25c-0.51172,0.08594 -0.875,0.55469 -0.83203,1.07422c0.04297,0.51563 0.47656,0.91406 1,0.91406h1.05859c0.95703,0 1.73828,0.78125 1.73828,1.74219c0,0.85547 -0.60937,1.57813 -1.45312,1.71875l-1.51172,0.25391c-0.51172,0.08594 -0.875,0.55078 -0.83203,1.07031c0.04688,0.51563 0.47656,0.91406 1,0.91406c0.84375,0 1.53125,0.6875 1.53125,1.53125v0.46094c0,0.72656 -0.51953,1.35938 -1.23437,1.50391l-1.12891,0.22266c-0.50391,0.10156 -0.85156,0.56641 -0.79687,1.07813c0.05078,0.51563 0.48047,0.90234 0.99219,0.90234h0.24609c0.34375,0 0.66797,0.13672 0.91016,0.375c0.24609,0.24609 0.37891,0.56641 0.37891,0.91016c0,0.67969 -0.53125,1.24219 -1.20703,1.28516l-16.46875,1.02734c-0.73828,0.05078 -2.04297,-0.03125 -2.72266,-0.20703c0.13281,-0.45312 0.23047,-0.92578 0.23047,-1.42187v-16.06641c0,-0.69141 -0.14062,-1.35156 -0.39453,-1.94922c0.125,-0.09766 0.23438,-0.21484 0.30469,-0.37109zM45.14063,15.85938c-0.25391,0 -0.50781,0.09375 -0.70312,0.29297l-1.41797,1.41016c-0.39062,0.39453 -0.39062,1.02344 0,1.41797c0.19531,0.19141 0.45313,0.28906 0.71094,0.28906c0.25391,0 0.51172,-0.09766 0.70703,-0.28906l1.41016,-1.41797c0.39453,-0.39062 0.39453,-1.01953 0,-1.41016c-0.19531,-0.19922 -0.44922,-0.29297 -0.70703,-0.29297zM48.19922,20.00781c-0.13281,0.01563 -0.25781,0.05859 -0.37891,0.12891l-1.73047,1c-0.48047,0.27344 -0.64453,0.88672 -0.36719,1.36328c0.1875,0.32031 0.51953,0.5 0.86719,0.5c0.16797,0 0.34375,-0.04297 0.5,-0.13672l1.73047,-1c0.47656,-0.27344 0.64063,-0.88672 0.36719,-1.36328c-0.20703,-0.35937 -0.60547,-0.53906 -0.98828,-0.49219zM50.45703,24.82813c-0.12891,-0.01562 -0.26172,-0.00781 -0.39453,0.03125l-1.93359,0.51563c-0.53516,0.14453 -0.85156,0.69141 -0.70703,1.22266c0.12109,0.44922 0.52344,0.74609 0.96484,0.74609c0.08594,0 0.17188,-0.01172 0.25781,-0.03516l1.93359,-0.51953c0.53516,-0.14453 0.85156,-0.69141 0.70703,-1.22656c-0.10547,-0.39844 -0.44141,-0.67969 -0.82812,-0.73437zM6.77344,25.875c0.08594,0.02734 0.17188,0.05859 0.26563,0.05859h7.89844c1.65234,0 3,1.34375 3,3v16.06641c0,1.65234 -1.34766,3 -3,3h-1.375c-0.04687,0 -0.08984,0.01953 -0.13672,0.02734c-0.22656,-0.17578 -0.46875,-0.33203 -0.74219,-0.43359l-5.50391,-2.11328c-0.4375,-0.17187 -0.70312,-0.62891 -0.62891,-1.08984l0.92578,-5.82422c0.13281,-0.83984 -0.10156,-1.69922 -0.63281,-2.35937l-3.71094,-4.57812c-0.29687,-0.36328 -0.29687,-0.89453 0,-1.25781zM49,30c-0.55078,0 -1,0.44922 -1,1c0,0.55078 0.44922,1 1,1h2c0.55078,0 1,-0.44922 1,-1c0,-0.55078 -0.44922,-1 -1,-1z"></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="details z-10 pl-[35px]">
                            <h5 className="title mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                              Project Level
                            </h5>
                            <p className="mb-0 text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                              Expensive
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style border-none p-0 mb-[30px] bg-white rounded-lg relative transition-all duration-300 ease-linear items-start flex">
                          <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="45"
                              height="45"
                              viewBox="0,0,256,256"
                            >
                              <g
                                fill="none"
                                fillRule="evenodd"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                              >
                                <g transform="scale(5.33333,5.33333)">
                                  <path
                                    d="M16.002,41.995v-7.995h-8c-1.657,0 -3,-1.343 -3,-2.999l-0.001,-22.998c-0.001,-0.552 0.448,-1.001 1,-1.001h25.001c0.551,0 1,0.449 1,1v9.995h10.001c0.551,0 1,0.449 0.999,1.001v22.999c0,1.656 -1.344,2.999 -3,2.999h-21c-1.657,-0.001 -3,-1.343 -3,-3.001z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M6.002,29.001l-0.001,-22.999h25.001v22.999c0,1.104 -0.896,2 -2,2h-21c-1.104,0 -2,-0.896 -2,-2z"
                                    fill="#ffffff"
                                  ></path>
                                  <path
                                    d="M5.002,29.002l-0.001,-22.999c-0.001,-0.552 0.448,-1.001 1,-1.001h25.001c0.551,0 1,0.449 1,1v22.999c0,1.657 -1.344,3 -3,3h-21c-1.657,0 -3,-1.343 -3,-2.999zM30.002,29.001v-21.999h-23.001l0.001,21.999c0,0.552 0.448,1 1,1h21c0.551,0 1,-0.448 1,-1z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M25.554,25.89c-4.177,-2.096 -7.485,-4.972 -10.308,-8.24c-0.361,-0.417 -0.315,-1.049 0.103,-1.411c0.417,-0.361 1.049,-0.315 1.411,0.103c2.695,3.119 5.803,5.808 9.692,7.76c0.493,0.248 0.693,0.849 0.445,1.343c-0.248,0.493 -0.85,0.693 -1.343,0.445z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M17.002,39.995v-8.999l14,-14h11.001l-0.001,22.999c0,1.104 -0.896,2 -2,2h-21c-1.104,0 -2,-0.896 -2,-2z"
                                    fill="#ffffff"
                                  ></path>
                                  <path
                                    d="M16.002,39.995v-8.999c0,-0.264 0.105,-0.519 0.292,-0.707l14,-14c0.188,-0.187 0.443,-0.293 0.708,-0.293h11.001c0.551,0 1,0.449 0.999,1.001v22.999c0,1.656 -1.344,2.999 -3,2.999h-21c-1.657,0 -3,-1.342 -3,-3zM41.002,39.995v-21.998h-9.587l-13.413,13.414v8.584c0,0.552 0.448,1 1,1h21c0.551,0 1,-0.448 1,-1z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M7.295,42.703c-0.391,-0.391 -0.391,-1.024 0,-1.415l2.293,-2.293l-2.293,-2.292c-0.391,-0.391 -0.391,-1.024 0,-1.415c0.391,-0.391 1.024,-0.391 1.415,0l3,3c0.391,0.391 0.391,1.024 0,1.415l-3,3c-0.391,0.391 -1.024,0.391 -1.415,0z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M39.29,12.711l-3,-3c-0.391,-0.391 -0.391,-1.024 0,-1.415l3,-3c0.391,-0.391 1.024,-0.391 1.415,0c0.391,0.391 0.391,1.024 0,1.415l-2.293,2.292l2.293,2.293c0.391,0.391 0.391,1.024 0,1.415c-0.391,0.391 -1.024,0.391 -1.415,0z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M24.627,36.933c-0.517,-0.195 -0.779,-0.772 -0.585,-1.288l4.512,-12c0.324,-0.861 1.549,-0.861 1.873,0l4.512,12c0.193,0.516 -0.068,1.093 -0.585,1.288c-0.516,0.193 -1.093,-0.068 -1.288,-0.585l-3.575,-9.509l-3.576,9.509c-0.194,0.517 -0.772,0.778 -1.288,0.585z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M25.802,32.995c0,-0.551 0.448,-1 1,-1h5.401c0.551,0 1,0.449 1,1c0,0.552 -0.449,1 -1,1h-5.401c-0.552,0 -1,-0.448 -1,-1z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M12.003,13.997c0,-0.551 0.448,-1 1,-1h12c0.551,0 1,0.449 1,1c0,0.552 -0.449,1 -1,1h-12c-0.552,0 -1,-0.448 -1,-1z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M18.003,12.995v-1c0,-0.551 0.448,-1 1,-1c0.551,0 1,0.449 1,1v1c0,0.552 -0.449,1 -1,1c-0.552,0 -1,-0.448 -1,-1z"
                                    fill="#1f4b3f"
                                  ></path>
                                  <path
                                    d="M12.181,25.566c-0.315,-0.453 -0.201,-1.077 0.252,-1.392c4.357,-3.025 7.613,-6.548 9.677,-10.629c0.249,-0.492 0.852,-0.691 1.344,-0.441c0.492,0.249 0.691,0.852 0.441,1.344c-2.243,4.433 -5.749,8.196 -10.323,11.371c-0.453,0.314 -1.077,0.2 -1.391,-0.253z"
                                    fill="#1f4b3f"
                                  ></path>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="details z-10 pl-[35px]">
                            <h5 className="title mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                              Languages
                            </h5>
                            <p className="mb-0 text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                              20
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-xl-4">
                        <div className="iconbox-style1 contact-style border-none p-0 mb-[30px] bg-white rounded-lg relative transition-all duration-300 ease-linear items-start flex">
                          <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="45"
                              height="45"
                              viewBox="0,0,256,256"
                            >
                              <g
                                fill="#1f4b3f"
                                fillRule="evenodd"
                                stroke="none"
                                strokeWidth="1"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="10"
                                strokeDasharray=""
                                strokeDashoffset="0"
                                fontFamily="none"
                                fontWeight="none"
                                fontSize="none"
                                textAnchor="none"
                              >
                                <g transform="scale(10.66667,10.66667)">
                                  <g>
                                    <path d="M1.5,15c0,-0.28 0.22,-0.5 0.5,-0.5h6c0.27,0 0.5,0.22 0.5,0.5v7c0,0.27 -0.23,0.5 -0.5,0.5h-6c-0.28,0 -0.5,-0.23 -0.5,-0.5zM2.5,15.5v6h5v-6z"></path>
                                    <path d="M7.5,12c0,-0.28 0.22,-0.5 0.5,-0.5h6c0.27,0 0.5,0.22 0.5,0.5v10c0,0.27 -0.23,0.5 -0.5,0.5h-6c-0.28,0 -0.5,-0.23 -0.5,-0.5zM8.5,12.5v9h5v-9z"></path>
                                    <path d="M13.5,9c0,-0.28 0.22,-0.5 0.5,-0.5h6c0.27,0 0.5,0.22 0.5,0.5v13c0,0.27 -0.23,0.5 -0.5,0.5h-6c-0.28,0 -0.5,-0.23 -0.5,-0.5zM14.5,9.5v12h5v-12z"></path>
                                    <path d="M17.5,6v3h-1v-3z"></path>
                                    <path d="M16.5,2c0,-0.28 0.22,-0.5 0.5,-0.5h5c0.2,0 0.38,0.12 0.46,0.3c0.07,0.18 0.03,0.4 -0.11,0.54l-1.65,1.64l1.64,1.64c0.14,0.14 0.18,0.35 0.1,0.54c-0.08,0.18 -0.26,0.3 -0.47,0.3h-5c-0.28,0 -0.5,-0.23 -0.5,-0.5v-4zM17.5,2.5v3h3.29l-1.15,-1.15c-0.2,-0.2 -0.2,-0.52 0,-0.71l1.14,-1.15h-3.3z"></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div className="details z-10 pl-[35px]">
                            <h5 className="title mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                              English Level
                            </h5>
                            <p className="mb-0 text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                              Professional
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="service-about">
                      <h4 className="text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                        Description
                      </h4>
                      <p className="text-[#222] mb-[30px] mt-0 mx-0 leading-[1.85]">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using &apos;Content here, content
                        here&apos;, making it look like readable English.{" "}
                      </p>
                      <p className="text-[#222] mb-[30px] mt-0 mx-0 leading-[1.85]">
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for &apos;lorem ipsum&apos; will uncover many web
                        sites still in their infancy. Various versions have
                        evolved over the years, sometimes by accident, sometimes
                        on purpose (injected humour and the like).
                      </p>
                      <hr className="opacity-100 mb-[60px]  mt-[60px] bg-[#e9e9e9] mx-0 border-0 border-t" />
                      <h4 className="mb-[30px] text-[20px] font-normal text-[#222] leading-[1.3125] mt-0">
                        Attachments
                      </h4>
                      <div className="row">
                        <div className="col-6 col-lg-3">
                          <div className="project-attach bg-[#5bbb7b1a] rounded-[4px] mb-[30px] pt-[20px] px-[20px] pb-[20px] relative">
                            <h6 className="title text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                              Project Brief
                            </h6>
                            <div className="flex w-full justify-between items-center cursor-pointer">
                              <p>PDF</p>
                              <BiCopy />
                            </div>
                            {/* <span className="icon flaticon-page" /> */}
                          </div>
                        </div>
                        <div className="col-6 col-lg-3">
                          <div className="project-attach bg-[#5bbb7b1a] rounded-[4px] mb-[30px] pt-[20px] px-[20px] pb-[20px] relative">
                            <h6 className="title text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                              Project Brief
                            </h6>
                            <div className="flex w-full justify-between items-center cursor-pointer">
                              <p>PDF</p>
                              <BiCopy />
                            </div>
                            {/* <span className="icon flaticon-page" /> */}
                          </div>
                        </div>
                      </div>
                      <hr className="opacity-100 mb-[60px]  mt-[60px] bg-[#e9e9e9] mx-0 border-0 border-t" />
                      <h4 className="mb-[30px] text-[20px] font-normal text-[#222] leading-[1.3125] mt-0">
                        Skills Required
                      </h4>
                      <div className="mb-[60px] flex flex-wrap">
                        {skills.map((item, i) => (
                          <a
                            key={i}
                            className={` flex items-center py-0 px-[14px] bg-gray-200 text-sm text-[#000] rounded-full border    
							mr-[10px]  leading-[28px] mb-2 cursor-pointer ${
                Number(item.length) === 7 ? "mr0" : "mr10"
              }`}
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                      <hr className="opacity-100 mb-[60px]  mt-[60px] bg-[#e9e9e9] mx-0 border-0 border-t" />
                      {/* Submit proposal */}
                      <div className="bsp_reveiw_wrt mt-[25px]">
                        <h4 className="mb-[30px] text-[20px] font-normal text-[#222] leading-[1.3125] mt-0">
                          Send Your Proposal
                        </h4>
                        <form className="comments_form max-[991.98px]:mb-[30px] mt-[30px]">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="mb-[20px]">
                                <label className="font-medium text-[#222] mb-2">
                                  Your hourly price
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-full border p-2 rounded-lg py-2 px-3  focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                                  placeholder="$99"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="mb-[20px]">
                                <label className="font-medium text-[#222] mb-2">
                                  Estimated Hours
                                </label>
                                <input
                                  type="text"
                                  className="form-control w-full border p-2 rounded-lg py-2 px-3  focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                                  placeholder={4}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="mb-4">
                                <label className="fw500 fz16 ff-heading dark-color mb-2">
                                  Cover Letter
                                </label>
                                <textarea
                                  className="pt-[15px] form-control w-full border p-2 rounded-lg py-2 px-3  focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                                  rows={6}
                                  placeholder="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <FileUpload />
                            </div>
                            <div className="col-md-12">
                              <div className="d-grid grid">
                                <a className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white cursor-pointer font-medium flex justify-center items-center text-lg">
                                  Submit a Proposal
                                  <FaArrowRightLong className="ml-[10px] -rotate-45 text-white" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Project cards */}

                      <hr className="opacity-100 mb-[60px]  mt-[60px] bg-[#e9e9e9] mx-0 border-0 border-t" />
                      <h4 className="mb-[30px] text-[20px] font-normal text-[#222] leading-[1.3125] mt-0">
                        Project Proposals (3)
                      </h4>
                      <div className="row">
                        {projectProposal.slice(0, 3).map((item, i) => (
                          <div key={i} className="col-md-6 col-lg-12">
                            {/* <ProjectProposalCard1 data={item} /> */}
                          </div>
                        ))}
                      </div>

                      {projects.map((project, index) => (
                        <div className="mb-7" key={index}>
                          <ProjectCard key={index} {...project} />
                        </div>
                      ))}
                      {/* <div>
                        <div className="w-full !mb-7">
                          <ProjectCard />
                        </div>
                        <div className="w-full !mb-7">
                          <ProjectCard />
                        </div>
                        <div className="w-full !mb-7">
                          <ProjectCard />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="column">
                  {isMatchedScreen ? (
                    <Sticky>
                      {({ style }) => (
                        <div className="scrollbalance-inner ">
                          <div className="blog-sidebar ms-lg-auto max-w-[370px]">
                            <ProjectPriceWidget />
                            {/* 
                            <ProjectContactWidget1 /> */}

                            <ServiceContactWidget />
                          </div>
                        </div>
                      )}
                    </Sticky>
                  ) : (
                    <div className="scrollbalance-inner">
                      <div className="blog-sidebar ms-lg-auto max-w-[370px]">
                        {/* <ProjectPriceWidget1 />
                        <ProjectContactWidget1 /> */}
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
