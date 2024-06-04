import React from "react";

const StoreAbout = () => {
  return (
    <div className="service-about mt-24  ml-24">
      <h4 className="text-[50px] font-medium text-[#222] leading-[1.3125] mt-0 mb-5">
        About Our Store
      </h4>
      <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
        Welcome with us, your premier destination for stylish and functional
        bags in Algeria. At Our Bag Store, we pride ourselves on curating a
        diverse selection of bags that cater to every taste and occasion.
      </p>
      <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
        Whether you're searching for the perfect handbag to complement your
        everyday look, a durable backpack for your adventures, or an elegant
        travel bag for your next getaway, we have something for everyone. Our
        collection features both local Algerian brands, celebrating our rich
        culture and heritage, as well as renowned international brands known for
        their quality and innovation.
      </p>
      <p className="text-[#222] font-normal leading-[1.85] mx-0 mt-0 mb-[30px]">
        Quality is our top priority, and we meticulously select each bag to
        ensure durability, functionality, and style. From luxurious leather
        pieces to eco-friendly alternatives, we offer options to suit every
        lifestyle and budget.
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
  );
};

export default StoreAbout;
