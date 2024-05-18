import React from "react";
import { Link } from "react-router-dom";
import { FiClock, FiPocket, FiMapPin } from "react-icons/fi";

const Cards = ({ data }) => {
  const {
    price,
    name,
    productTitle,
    category,
    _id,
    image,
    productLocation,
    description,
    rating,
    userImage, // Include this new field
  } = data;

  return (
    <div className="overflow-hidden relative bg-white rounded border border-[#e9e9e9] mb-[30px] transition-all duration-300 ease-linear">
      <Link to={`/profile/${_id}`} className="block">
        <img
          src={image}
          alt={name}
          style={{ width: "329px", height: "245px" }}
          className="w-full mx-auto rounded-md hover:scale-110 transform transition-all duration-300 ease-linear mt-5"
        />
        <div className="py-[25px] px-[30px]">
          <div className="text-[#6b7177] text-base flex flex-row gap-2 mt-1">
            <span className="flex items-center gap-1">
              <FiMapPin className="text-lg" />
              {productLocation || "Unknown Location"}
            </span>
            <span className="flex items-center gap-1">
              <FiPocket className="text-lg" />
              {price} DA
            </span>
          </div>
          <h4 className="text-[20px] font-lg text-[#222] font-semibold  mb-2.5">
            {productTitle} - {category}
          </h4>
          <h6 className="text-[13px] font-sm text-[#222] mb-2">
            {description}
          </h6>
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
          <div className="flex justify-between px-2 items-center">
            <div className="flex items-center space-x-3">
              <img
                src={userImage}
                onError={(e) => {
                  e.target.src = "default-image.jpg";
                }}
                alt={name}
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-black text-lg font-semibold">{name}</h3>
            </div>
            <button className="py-2 px-4 !bg-[#0E9F6E] hover:!bg-[#046c4e] text-white font-bold rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
