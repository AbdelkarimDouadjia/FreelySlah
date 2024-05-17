import React, { useEffect, useState } from "react";

//import HeighestRetedCard1 from "../card/HighestRatedCard1";
import { freelancer } from "./product";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import FreelancerCard from "../Card/FreelancerCard.jsx";

const HighestRated = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="pt90 pt60-md pb130 pb60-md">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="visible items-center flex flex-wrap -mx-3 mt-0">
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-3/4 ">
              <div className="mb-[60px] max-[991px]:mb-[30px] relative ">
                <h2 className="text-[32px] font-bold text-[#222] leading-[1.3125] mt-0 mb-2 max-[575px]:text-[20px] ">
                  Highest Rated Freelancers
                </h2>
                <p className="text-[#222] mx-0 mt-0 mb-[15px] leading-[1.85] font-normal text-base">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-1/4 ">
              <div className="mb-4 lg-b:text-right">
                <Link
                  className="ud-btn2 text-[#222] cursor-pointer flex items-center justify-end mt-[20px] py-2 hover:text-[#0e9f6e]"
                  href="/freelancer-1"
                >
                  All Freelancers
                  <FaArrowRight className="ml-[10px] text-base font-light" />
                </Link>
              </div>
            </div>
          </div>
          <div className=" !relative flex flex-wrap mt-0 -mx-3 ">
            <div className="w-full max-w-full mx-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-full">
              <div className="flex-shrink-0 w-full max-w-full mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-full">
                {showSwiper && (
                  <Swiper
                    spaceBetween={30}
                    navigation={{
                      prevEl: ".unique-3-pre",
                      nextEl: ".unique-3-next",
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"
                    loop={true}
                    pagination={{
                      el: ".unique-3-pagi",
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      992: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {freelancer.map((item, index) => (
                      <SwiperSlide key={index}>
                        <FreelancerCard
                          btnClass={
                            "ud-btn !rounded-[90px] font-medium !border-2 text-[#222]  bg-[#FFF]  max-[339px]:py-[13px] max-[339px]:px-[25px] before:bg-[#222] hover:before:bg-[#222] hover:text-[#FFF] hover:bg-[#222] flex items-center justify-center"
                          }
                          data={item}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>
            </div>
            <button
              type="button"
              className="prev-btn pre-slide3 unique-3-pre cursor-pointer left-4 md-b:left-[-30px] flex items-center justify-center "
            >
              <MdArrowBackIos />
            </button>
            <button
              type="button"
              className="next-btn next-slide3 unique-3-next cursor-pointer right-4 md-b:right-[-30px]  flex items-center justify-center"
            >
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighestRated;
