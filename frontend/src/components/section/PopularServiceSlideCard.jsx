import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function PopularServiceSlideCard(props) {
  const data = props.data;
  //const style = props.style;
  const isContentExpanded = false;

  const [isFavActive, setFavActive] = useState(false);
  //   const path = usePathname();
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div className="listing-style overflow-hidden relative bg-white rounded border border-[#e9e9e9] mb-[30px] transition-all duration-300 ease-linear ">
        <div className="list-thumb overflow-hidden relative text-transparent transition-all duration-300 ease-linear w-full align-middle">
          <div className="listing-thumbIn-slider position-relative navi_pagi_bottom_center slider-1-grid relative">
            <div className="item">
              {showSwiper && (
                <Swiper
                  navigation={{
                    prevEl: ".btn__prev__005",
                    nextEl: ".btn__next__005",
                  }}
                  modules={[Navigation, Pagination]}
                  className="mySwiper touch-pan-y mx-auto relative overflow-hidden list-none p-0 z-[1] "
                  loop={true}
                  pagination={{
                    el: ".swiper__pagination__005",
                    clickable: true,
                  }}
                >
                  {data?.gallery?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        height={247}
                        width={331}
                        className="w-full object-cover"
                        src={item}
                        alt="thumbnail"
                      />
                    </SwiperSlide>
                  ))}
                  <div className="swiper__parent absolute bottom-[14px] z-[9] left-[50%] translate-x-[-50%]">
                    <div className="justify-center flex flex-wrap -m-3">
                      <div className="flex-initial !flex-shrink-0 w-auto max-w-full px-3">
                        <button className="swiper__btn swiper__btn-2 btn__prev__005 text-white bg-transparent border-none text-sm h-auto leading-normal m-0 p-0 w-auto transition-all duration-300 ease-linear rounded-none cursor-pointer">
                          <FaArrowLeftLong className="font-normal" />
                        </button>
                      </div>
                      <div className="flex-initial !flex-shrink-0 w-auto max-w-full px-3">
                        <div className="swiper__pagination swiper__pagination-2 swiper__pagination__005 bottom-[10px] left-0 w-full"></div>
                      </div>
                      <div className="flex-initial !flex-shrink-0 w-auto max-w-full px-3">
                        <button className="swiper__btn swiper__btn-2 btn__next__005 text-white bg-transparent border-none text-sm h-auto leading-normal m-0 p-0 w-auto transition-all duration-300 ease-linear rounded-none cursor-pointer">
                          <FaArrowRightLong className="font-normal" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Swiper>
              )}
              <a
                onClick={() => setFavActive(!isFavActive)}
                className={`listing-fav fz12 bg-white text-[#222] rounded-[50%] h-[36px] leading-[36px] absolute right-[20px] top-[20px] text-center w-[36px] transition-all duration-300 ease-linear text-xs cursor-pointer outline-none shadow-sdp z-[100]   ${
                  isFavActive ? "ui-fav-active !bg-[#5bbb7b] text-white" : ""
                }`}
              >
                <span className="far fa-heart font-normal" />
              </a>
            </div>
          </div>
        </div>
        <div
          className={`list-content py-[25px] px-[30px] max-[340px]:py-[25px] max-[340px]:px-[10px] max-[1199px]:py-[25px] max-[1199px]:px-[10px] relative ${
            isContentExpanded ? "px-0" : ""
          }`}
        >
          <p className="list-text text-sm mb-1 mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal">
            {data.category}
          </p>
          <h5 className="list-title mb-[15px] text-[17px] font-medium text-[#222] text-[1.3125] mt-0">
            <Link
              href={`/service-single/${data.id}`}
              className="transition-all duration-300 cursor-pointer text-[#222] "
            >
              {data.title.slice(0, 40) + "..."}
            </Link>
          </h5>
          <div className="items-center flex ">
            <i className="fas fa-star text-[10px] text-[#e1c03f] font-black mr-2" />
            <p className="text-sm mb-0 mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal">
              <span className="text-[#222] mr-2">{data.rating}</span>
              {data.review} reviews
            </p>
          </div>
          <hr className="bg-[#e9e9e9] opacity-100 my-2 mx-0 border-t-[1px] border-[#282727]" />
          <div className="list-meta mt-[15px] items-center justify-between flex ">
            <Link
              className="flex text-[#222] cursor-pointer transition-all duration-300 ease-linear"
              href="/"
            >
              <span className="relative mr-[10px] ">
                <img
                  height={30}
                  width={30}
                  className="rounded-circle wa text-transparent transition-all duration-300 ease-linear w-auto rounded-[50%]  align-middle"
                  src={data.author.img}
                  alt="Freelancer Photo"
                />
                <span className="online-badges top-0 right-[3px] h-[9px] w-[9px] bg-[#5bbb7b] border-2 border-white rounded-[50%] absolute max-[575px]:right-0 " />
              </span>
              <span className="text-sm cursor-pointer align-middle pt-1">
                {data.author.name}
              </span>
            </Link>
            <div className="budget">
              <p className="m-0 text-[#6b7177] leading-[1.85] font-normal text-[14px]">
                Starting at
                <span className="font-medium text-[14px] text-[#222] ml-1 ">
                  {data.price}DA
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

PopularServiceSlideCard.propTypes = {
  data: PropTypes.object,
  style: PropTypes.string,
};

PopularServiceSlideCard.defaultProps = {
  style: "",
};

export default PopularServiceSlideCard;
