import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { productF } from "../../components/section/productF.js";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../../components/section/ProductCard.jsx";
import { Link } from "react-router-dom";
import styles from "../../components/Card/TrandingService.module.css";
import {
  FaArrowLeftLong,
  FaArrowRightLong,
  FaArrowRight,
} from "react-icons/fa6";

const StoreProducts = () => {
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <section className="">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] mb-24">
          <div className="visible items-center flex flex-wrap -mx-3 mt-0 ">
            <div className="col-lg-9 flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-3/4 ">
              <div className="mb-[60px] max-[991px]:mb-[30px] relative ">
                <h2 className="text-[32px] font-bold text-[#222] leading-[1.3125] mt-0 mb-2 max-[575px]:text-[20px]  ">
                  Our Store's Products
                </h2>
                <p className="text-[#222] mx-0 mt-0 mb-[15px] leading-[1.85] font-normal text-base">
                  Most viewed and all-time top-selling products
                </p>
              </div>
            </div>
            <div className="!hidden flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:!block lg-b:flex-initial lg-b:!flex-shrink-0 lg-b:w-1/4  ">
              <div className="flex flex-wrap mt-0 -mx-3 !justify-end ">
                <div className="flex-initial flex-shrink-0 w-auto max-w-full px-3 mt-0">
                  <button
                    className={`${styles.swiper__btn} btn__prev__009 cursor-pointer rounded-none`}
                  >
                    <FaArrowLeftLong />
                  </button>
                </div>
                <div className="flex-initial flex-shrink-0 w-auto max-w-full px-3 mt-0">
                  <div className="swiper__pagination swiper__pagination__009 bottom-[10px] left-0 w-full "></div>
                </div>
                <div className="flex-initial flex-shrink-0 w-auto max-w-full px-3 mt-0">
                  <button
                    className={`${styles.swiper__btn} btn__next__009 cursor-pointer rounded-none`}
                  >
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-0 -mx-3  ">
            <div className="col-lg-12 flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-full">
              {showSwiper && (
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  freeMode={true}
                  loop={true}
                  className="mySwiper"
                  navigation={{
                    prevEl: ".btn__prev__009",
                    nextEl: ".btn__next__009",
                  }}
                  pagination={{
                    el: ".swiper__pagination__009",
                    clickable: true,
                  }}
                  modules={[Navigation, Pagination]}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      slidesPerGroup: 1,
                    },
                    768: {
                      slidesPerView: 2,
                      slidesPerGroup: 2,
                    },
                    992: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                  }}
                >
                  {productF.slice(0, 8).map((item, i) => (
                    <SwiperSlide key={i}>
                      <ProductCard data={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <div className="!mt-[20px] text-center">
                <Link
                  className="ud-btn2 font-semibold text-[15px] relative text-center transition-all duration-300 ease-linear text-[#222] cursor-pointer hover:text-[#0e9f6e] flex items-center justify-center mt-[20px] py-2"
                  href="/service-single"
                >
                  All Products
                  <FaArrowRight className="ml-[10px] text-base font-light" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreProducts;
