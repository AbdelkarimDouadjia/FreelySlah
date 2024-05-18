import React from "react";

const Testimonials = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC]">
      {/* Testimonial section */}
      <div className="py-10 flex flex-col md:flex-row-reverse justify-between items-center gap-12 text-black">
        <div className="md:w-1/2">
          <img src="/images/testimonial.png" alt="Customer Testimonial" />
        </div>
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug md:leading-snug">
            What Our <span className="text-[#0E9F6E]">Customers</span> Say About
            Us?
          </h2>
          <p className="text-xl text-[#4A4A4A]">
            Give Your Opinion.. Share Your Thoughts About Us.
          </p>
          <button className="btn bg-[#0E9F6E] text-white text-lg px-8 py-1 rounded-full border-none">
            Share Your Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
