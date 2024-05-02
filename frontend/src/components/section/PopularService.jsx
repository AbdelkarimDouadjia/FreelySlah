import React from "react";
import { product } from "./product.js";
import PopularServiceCard from "./PopularServiceCard.jsx";
import PopularServiceSlideCard from "./PopularServiceSlideCard.jsx";

function PopulerService() {
  return (
    <>
      <section className="pb40-md pb70 mt70 mt0-lg relative py-[120px] px-0 my-[70px]  max-[991px]:pb-[40px] max-[991px]:py-[60px] max-[991px]:px-0 max-[1199px]:pt-0  ">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="fadeInUp  flex flex-wrap -mx-3 visible items-center ">
            <div className="flex-shrink-0 w-full max-w-full px-3  min-[992px]:flex-initial min-[992px]:flex-shrink-0 min-[992px]:w-full">
              <div className="main-title relative mb-[60px] max-[991px]:mb-[30px] max-[1199px]:mb-[30px] ">
                <h2 className="title text-[32px] font-bold text-[#222] laeding-[1.3125] mt-0 mb-2 max-[575px]:text-[20px] ">
                  People Who Viewed This Service Also Viewed
                </h2>
                <p className="paragraph text-[#222] mx-0 mt-0 mb-[15px] leading-[1.85] font-normal">
                  Give your visitor a smooth online experience with a solid UX
                  design
                </p>
              </div>
            </div>
          </div>
          <div className="row flex flex-wrap -mx-3">
            {product.slice(0, 4).map((item, i) => (
              <div key={i} className="flex-shrink-0 w-full max-w-full px-2 min-[576px]:flex-initial min-[576px]:flex-shrink-0 min-[576px]:w-1/2 min-[1200px]:w-1/4 ">
                {item.gallery ? (
                  <PopularServiceSlideCard style="listing-style1" data={item} />
                ) : (
                  <PopularServiceCard style="listing-style1" data={item} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PopulerService;
