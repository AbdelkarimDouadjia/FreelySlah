import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const ServiceBanner = ({ query, handleInputChange }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-20 py-14 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="flex flex-col items-center">
        {" "}
        {/* Added for vertical centering */}
        <h1 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug mt-24 text-black">
          Find Any<span className="text-[#0E9F6E]"> Service</span> Here!
        </h1>
        <p className="text-lg text-black/70 mb-8">
          Multiple of Services in Different domains are here for you..
        </p>
        <form className="w-full flex justify-center">
          <div className="flex justify-start md:flex-row flex-col md:gap-0 gap-4">
            <div className="flex md:rounded-s-md rounded shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600  w-full relative">
              {" "}
              {/* Added relative here */}
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Search Service.."
                className="block flex-1 border-0 bg-transparent py-3 pl-10 pr-10 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 w-full" // Adjusted padding left and added w-full
                onChange={handleInputChange}
                value={query}
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />{" "}
              {/* Adjusted positioning */}
            </div>
            <button
              type="submit"
              style={{ backgroundColor: "#0E9F6E", color: "white" }}
              className="ml-1 py-2 px-8 text-white border-0 md:rounded-s-none rounded btn text-lg items-center"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceBanner;
