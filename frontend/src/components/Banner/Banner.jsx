import React from "react";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-1 text-black">
        <div className="md:w-1/2">
          <img src="/images/banner.png" alt="Banner Image" />
        </div>
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            <span className="text-[#047857]">FreelySlah</span>
            ..Elevating Success through Hard Work and Innovation.
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Together, let's redefine what's possible in the world of work.
          </p>
          <button className="bg-[#047857] border-none btn text-white text-lg px-8 py-1 rounded-full items-center">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
