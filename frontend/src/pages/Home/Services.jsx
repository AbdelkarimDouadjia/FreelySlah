import React from "react";

const Services = () => {
  return (
    <div className="py-24 max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
      {/* Services section */}
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-2 text-black">
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug md:leading-snug">
            Discover Our <span className="text-[#047857]">Services</span>..Find
            Your Work Place.
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Here You Can Find Any Job You Want..
          </p>
          <button className="btn bg-[#047857] text-white text-lg px-8 py-1 rounded-full border-none">
            Explore Now!
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/images/sevice.jpg"
            alt="Service Presentation"
            className="max-w-[520px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
