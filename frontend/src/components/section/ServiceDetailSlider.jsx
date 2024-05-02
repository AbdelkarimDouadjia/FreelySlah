import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


const gigImages = [
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
  "/src/assets/images/listings/service-details-1.jpg",
];

const ServiceDetailSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showSwiper, setShowSwiper] = useState(false);
  useEffect(() => {
    setShowSwiper(true);
  }, []);

  return (
    <>
      <div className="scrollbalance-inner">
        <div className="flex flex-wrap -mx-[12px]">
          <div className="flex-shrink-0 w-full max-w-full px-3 min-[576px]:flex-initial min-[576px]:shrink-0 min-[576px]:w-1/3 min-[768px]:w-1/3">
            <div className="iconbox-style1 bg-[#fff] rounded-lg realtive transition-all duration-300 ease-linear flex items-start  border-none p-0! mb-[30px]  ">
              <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="64"
                  height="64"
                  viewBox="0 0 98 98"
                >
                  <path d="M 65.654297 3.984375 A 1.4 1.4 0 0 0 65.400391 4 L 55.900391 4 C 54.800391 4 54 4.4996094 54 5.5996094 L 54 11 L 32 11 L 32 5.5996094 C 32 4.4996094 30.699609 4 29.599609 4 L 20.099609 4 C 18.999609 4 18 4.4996094 18 5.5996094 L 18 11 L 11.900391 11 C 7.5003906 11 4 14.1 4 18.5 L 4 76.5 C 4 80.9 7.5003906 84 11.900391 84 L 45.300781 84 A 27.5 27.5 0 0 0 94.300781 67 A 28.6 28.6 0 0 0 82 44 L 82 18.5 C 82 14.1 78.099219 11 73.699219 11 L 67 11 L 67 5.5996094 A 1.4 1.4 0 0 0 65.654297 3.984375 z M 22 8 L 28 8 L 28 17 L 22 17 L 22 8 z M 58 8 L 63 8 L 63 17 L 58 17 L 58 8 z M 11.900391 15 L 18 15 L 18 18.800781 A 2.3 2.3 0 0 0 20.099609 21 L 29.599609 21 A 2.6 2.6 0 0 0 32 18.800781 L 32 15 L 54 15 L 54 18.800781 A 2.1 2.1 0 0 0 55.900391 21 L 65.400391 21 C 66.500391 21 67 19.900781 67 18.800781 L 67 15 L 73.699219 15 C 75.899219 15 78 16.3 78 18.5 L 78 31 L 8 31 L 8 18.5 C 8 16.3 9.7003906 15 11.900391 15 z M 8 35 L 78 35 L 78 41.900391 A 30 30 0 0 0 66.900391 39.5 A 27.5 27.5 0 0 0 42.699219 80 L 11.900391 80 C 9.7003906 80 8 78.7 8 76.5 L 8 35 z M 65.523438 43.425781 A 23.5 23.5 0 0 1 90.099609 67 A 23.4 23.4 0 0 1 66.699219 90.400391 A 23.5 23.5 0 0 1 65.523438 43.425781 z M 64.941406 53 A 2 2 0 0 0 63 55 L 63 69 A 2.4 2.4 0 0 0 65.400391 71 L 76.099609 71 A 2 2 0 0 0 76.099609 67 L 67 67 L 67 55 A 2 2 0 0 0 64.941406 53 z"></path>
                </svg>
              </div>
              <div className="pl-[35px] ">
                <h5 className="mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Delivery Time
                </h5>
                <p className="text-[#222] font-normal mx-0 my-0 leading-[1.85]">
                  1-3 Days
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-full px-3 min-[576px]:flex-initial min-[576px]:shrink-0 min-[576px]:w-1/3 min-[768px]:w-1/3 ">
            <div className="iconbox-style1 bg-[#fff] rounded-lg realtive transition-all duration-300 ease-linear flex items-start  border-none p-0! mb-[30px]">
              <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="55"
                  height="55"
                  viewBox="0 0 24 24"
                  className=" font-thin "
                >
                  <path d="M 17 1 C 16.44 1 16 1.44 16 2 L 15.970703 1.9609375 L 15.970703 5.9609375 C 15.970703 6.0137193 15.992178 6.0587445 16 6.109375 L 16 8 L 14 8 C 13.44 8 13 8.44 13 9 L 13 11 L 8 11 C 7.44 11 7 11.44 7 12 L 7 14 L 2 14 C 1.44 14 1 14.44 1 15 L 1 22 C 1 22.55 1.44 23 2 23 L 8 23 L 14 23 L 20 23 C 20.55 23 21 22.55 21 22 L 21 9 C 21 8.44 20.55 8 20 8 L 18 8 L 18 6.9609375 L 21.970703 6.9609375 C 22.380703 6.9609375 22.740391 6.7196094 22.900391 6.3496094 C 23.060391 5.9796094 22.969453 5.5495313 22.689453 5.2695312 L 21.400391 3.9804688 L 22.699219 2.6894531 C 22.979219 2.4094531 23.069922 1.979375 22.919922 1.609375 C 22.759922 1.239375 22.4 1 22 1 L 17 1 z M 17.980469 2.9804688 L 19.570312 2.9804688 L 19.279297 3.2792969 C 18.879297 3.6692969 18.879297 4.2992187 19.279297 4.6992188 L 19.580078 5 L 18 5 L 18 3 L 17.980469 2.9804688 z M 15 10 L 19 10 L 19 21 L 15 21 L 15 12 L 15 10 z M 9 13 L 13 13 L 13 21 L 9 21 L 9 15 L 9 13 z M 3 16 L 7 16 L 7 21 L 3 21 L 3 16 z"></path>
                </svg>
              </div>
              <div className="pl-[35px]">
                <h5 className="mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                  English Level
                </h5>
                <p className="text-[#222] font-normal mx-0 my-0 leading-[1.85]">
                  Professional
                </p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-full px-3 min-[576px]:flex-initial min-[576px]:shrink-0 min-[576px]:w-1/3 min-[768px]:w-1/3">
            <div className="iconbox-style1 bg-[#fff] rounded-lg realtive transition-all duration-300 ease-linear flex items-start  border-none p-0! mb-[30px]">
              <div className="icon flex-shrink-0 text-[#1f4b3f] inline-block text-[40px] relative z-[1]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25 1 C 16.160156 1 9 8.160156 9 17 C 9 24.308594 12.859375 32.164063 16.65625 38.25 C 20.453125 44.335938 24.25 48.65625 24.25 48.65625 C 24.441406 48.871094 24.714844 48.996094 25 48.996094 C 25.285156 48.996094 25.558594 48.871094 25.75 48.65625 C 25.75 48.65625 29.550781 44.246094 33.34375 38.125 C 37.136719 32.003906 41 24.167969 41 17 C 41 8.160156 33.839844 1 25 1 Z M 25 3 C 32.761719 3 39 9.238281 39 17 C 39 23.433594 35.363281 31.082031 31.65625 37.0625 C 28.550781 42.074219 25.921875 45.300781 25 46.40625 C 24.070313 45.308594 21.441406 42.152344 18.34375 37.1875 C 14.640625 31.25 11 23.589844 11 17 C 11 9.238281 17.238281 3 25 3 Z M 25 11 C 21.144531 11 18 14.144531 18 18 C 18 21.855469 21.144531 25 25 25 C 28.855469 25 32 21.855469 32 18 C 32 14.144531 28.855469 11 25 11 Z M 25 13 C 27.773438 13 30 15.226563 30 18 C 30 20.773438 27.773438 23 25 23 C 22.226563 23 20 20.773438 20 18 C 20 15.226563 22.226563 13 25 13 Z"></path>
                </svg>
              </div>
              <div className="pl-[35px]">
                <h5 className="mb-[5px] text-[17px] font-medium text-[#222] leading-[1.3125] mt-0">
                  Location
                </h5>
                <p className="text-[#222] font-normal mx-0 my-0 leading-[1.85]">
                  New York
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-single-sldier vam_nav_style slider-1-grid owl-carousel owl-theme mb60 owl-loaded owl-drag  relative block !mb-[60px] w-full z-[1] ">
          <div className=" p-[50px] max-[767.98px]:p-[30px] bg-[#404040] rounded-[4px] mb-3">
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
                {gigImages.map((item, i) => (
                  <SwiperSlide key={i}>
                    <img
                      height={554}
                      width={929}
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
              {gigImages.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    height={120}
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

export default ServiceDetailSlider;
