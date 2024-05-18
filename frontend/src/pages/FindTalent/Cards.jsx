import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiPocket, FiMapPin } from "react-icons/fi";

const Cards = ({ data }) => {
  const {
    price,
    name,
    talentTitle,
    category,
    _id,
    image,
    talentLocation,
    employmentType,
    rating,
  } = data;

  return (
    <div className="overflow-hidden relative bg-white rounded border border-[#e9e9e9] mb-[30px] transition-all duration-300 ease-linear ">
      <Link to={`/profile/${_id}`} className="block">
        <img
          src={image}
          alt={name}
          className="w-full max-w-[150px] mx-auto rounded-md hover:scale-110 transform transition-all duration-300 ease-linear mt-5"
        />
        <div className="py-[25px] px-[30px]">
          {/* Removed text-center to align text to the left */}
          <div className="text-[#6b7177] text-base flex flex-row mb-2 gap-2 mt-1">
            <span className="flex items-center gap-1">
              <FiMapPin className="text-lg" />
              {talentLocation || "Unknown Location"}
            </span>
            <span className="flex items-center gap-1">
              <FiClock className="text-lg" />
              {employmentType || "Freelance"}
            </span>
            <span className="flex items-center gap-1">
              <FiPocket className="text-lg" />
              {price} DA
            </span>
          </div>
          <h4 className="text-[15px] font-semibold text-[#222] mb-2">
            {talentTitle} - {category}
          </h4>
          <div className="flex items-center text-yellow-400 text-sm mb-2">
            {[...Array(1)].map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.round(rating) ? "fas fa-star" : "far fa-star"
                }
              ></span>
            ))}
            <span className="ml-2 text-gray-600">{rating} / 5</span>
          </div>
          <div className="border-b-2 border-gray-500 my-4"></div>
          <div className="flex justify-between px-2">
            {/* Maintain flex for layout but removed centering within flexbox items */}
            <h3 className="text-black text-lg font-semibold">{name}</h3>
            <button className="py-2 px-4 !bg-[#0E9F6E]  hover:!bg-[#046c4e] text-white font-bold rounded">
              Contact Me
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
