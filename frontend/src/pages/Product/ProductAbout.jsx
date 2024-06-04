import React from "react";

const ProductAbout = () => {
  return (
    <div>
      <div className="service-about mt-24  ml-24">
        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
          Welcome with us, your premier destination for stylish and functional
          Traveling Bag in Ain Defla. At Our Bag Store, we pride ourselves on
          curating a diverse selection of bags that cater to every taste and
          occasion.
        </p>
        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[20px]">
          1) Compact and versatile design.
        </p>
        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[20px]">
          {" "}
          2) Durable construction for long-lasting use.
        </p>
        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[20px]">
          {" "}
          3) Organized interior with multiple compartments.
        </p>
        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[20px]">
          {" "}
          4) Comfortable to carry with padded straps.
        </p>
        <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[20px]">
          5) Stylish and trendy design options.
        </p>
        <div className="flex items-start mb-[50px] flex-wrap gap-4">
          <div className="list1 max-[640px]:text-align ">
            <h6 className="text-[15px]  font-semibold text-[#222] leading-[1.3125] mt-0 mb-2 ">
              Visit Us
            </h6>
            <p className="text-[#222] font-normal  leading-[1.85] mb-[15px] text-[15px]">
              Ain Defla
            </p>
          </div>
          <div className="list1 sm:ml-20">
            <h6 className="text-[15px]  font-semibold text-[#222] leading-[1.3125] mt-0 mb-2 ">
              Delivery Time
            </h6>
            <p className="text-[#222] font-normal  leading-[1.85] mb-[15px] text-[15px]">
              1-3 Days
            </p>
          </div>
          <div className="list1 sm:ml-20">
            <h6 className="text-[15px]  font-semibold text-[#222] leading-[1.3125] mt-0 mb-2 ">
              Contact Us
            </h6>
            <p className="text-[#222] font-normal  leading-[1.85] mb-[15px] text-[15px]">
              +2136 15 88 65 57
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAbout;
