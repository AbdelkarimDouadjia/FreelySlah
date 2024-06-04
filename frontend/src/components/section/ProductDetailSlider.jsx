import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const productImages = [
  "/src/assets/images/listingsP/p0.jpg",
  "/src/assets/images/listingsP/p1.jpg",
  "/src/assets/images/listingsP/p2.jpg",
  "/src/assets/images/listingsP/p3.jpg",
  "/src/assets/images/listingsP/p4.jpg",
  "/src/assets/images/listingsP/p0.jpg",
  "/src/assets/images/listingsP/p1.jpg",
  "/src/assets/images/listingsP/p2.jpg",
  "/src/assets/images/listingsP/p3.jpg",
  "/src/assets/images/listingsP/p4.jpg",
];

const ProductDetailSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div className="scrollbalance-inner  mt-24 ml-24">
        <div className="flex flex-wrap -mx-[12px]">
          <h2 className="title text-[32px] font-bold text-[#222] laeding-[1.3125] mt-0 mb-2 max-[575px]:text-[20px] ">
            Traveling Bag :
          </h2>
        </div>
        <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60 owl-loaded owl-drag  relative block !mb-[60px] w-[600px] z-[1] ">
          <div className=" p-[100px] max-[780.98px]:p-[10px] bg-trensparent rounded-[4px]">
            {showSwiper && (
              <Swiper
                loop={true}
                spaceBetween={10}
                navigation={{
                  prevEl: ".prev-btn",
                  nextEl: ".next-btn",
                }}
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {productImages.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img
                      style={{ width: "400px", height: "450px" }}
                      src={item}
                      alt="gallery"
                      className="w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <button
            type="button"
            className="prev-btn max-[767.98px]:h-[50px] max-[767.98px]:w-[50px] max-[767.98px]:leading-[50px] max-[767.98px]:text-[14px]  min-[768px]:left-[-30px] max-[767.98px]:left-4 flex items-center justify-center hover:!bg-[#5bbb7b] "
          >
            <FaArrowLeftLong />
          </button>
          <button
            type="button"
            className="next-btn max-[767.98px]:h-[50px] max-[767.98px]:w-[50px] max-[767.98px]:leading-[50px] max-[767.98px]:text-[14px]  min-[768px]:right-[-30px] max-[767.98px]:right-4 flex items-center justify-center hover:!bg-[#5bbb7b]"
          >
            {/* <i className="far fa-arrow-right-long" /> */}
            {/* <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/long-arrow-right.png"
              alt="long-arrow-right"
            /> */}
            <FaArrowRightLong />
          </button>
          {showSwiper && (
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={5}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper ui-service-gig-slder-bottom max-[767.98px]:hidden"
            >
              {productImages.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    height={200}
                    width={150}
                    src={item}
                    alt="image"
                    className="!w-full !rounded-[4px] cursor-pointer !h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailSlider;
