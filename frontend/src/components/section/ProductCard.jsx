import React from "react";

import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const data = props.data;
  //const style = props.style;
  const isContentExpanded = false;

  const [isFavActive, setFavActive] = useState(false);
  //   const path = usePathname();

  return (
    <>
      <div className="listing-style overflow-hidden relative bg-white rounded border border-[#e9e9e9] mb-[30px] transition-all duration-300 ease-linear ">
        <div className="list-thumb overflow-hidden relative text-transparent transition-all duration-300 ease-linear w-full align-middle">
          <img
            style={{ width: "331px", height: "260px" }}
            className="w-full hover:scale-110 transform transition-all duration-300 ease-linear hover:rotate-3"
            src={data.img}
            alt="thumbnail"
          />
          <a
            onClick={() => setFavActive(!isFavActive)}
            className={`listing-fav fz12 bg-white text-[#222] rounded-[50%] h-[36px] leading-[36px] absolute right-[20px] top-[20px] text-center w-[36px] transition-all duration-300 ease-linear text-xs cursor-pointer outline-none shadow-sdp   ${
              isFavActive ? "ui-fav-active !bg-[#5bbb7b] text-white" : ""
            }`}
          >
            <span className="far fa-heart font-normal" />
          </a>
        </div>
        <div
          className={`list-content py-[25px] px-[30px] max-[340px]:py-[25px] max-[340px]:px-[10px] max-[1199px]:py-[25px] max-[1199px]:px-[10px] relative ${
            isContentExpanded ? "px-0" : ""
          }`}
        >
          <p className="list-text text-sm mb-1 mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal">
            {data.category}
          </p>
          <h5 className="list-title mb-[15px] text-[17px] font-medium text-[#222] text-[1.3125] mt-0">
            <Link
              href={`/service-single/${data.id}`}
              className="transition-all duration-300 cursor-pointer text-[#222] "
            >
              {data.productTitle.slice(0, 40)}
            </Link>
          </h5>
          <div className="items-center flex ">
            <i className="fas fa-star text-[10px] text-[#e1c03f] font-black mr-2" />
            <p className="text-sm mb-0 mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal">
              <span className="text-[#222] mr-2">{data.rating}</span>
              {data.review} reviews
            </p>
          </div>
          <hr className="bg-[#e9e9e9] opacity-100 my-2 mx-0 border-t-[1px] border-[#282727]" />
          <div className="list-meta mt-[15px] items-center justify-between flex ">
            <Link
              className="flex text-[#222] cursor-pointer transition-all duration-300 ease-linear"
              href="/"
            >
              <span className="relative mr-[10px] ">
                <img
                  height={30}
                  width={30}
                  className="rounded-circle wa text-transparent max-w-[50px] transition-all duration-300 ease-linear w-auto rounded-[50%]  align-middle "
                  src={data.author.img}
                  alt="Freelancer Photo"
                />
                <span className="online-badges top-0 right-[3px] h-[9px] w-[9px] bg-[#5bbb7b] border-2 border-white rounded-[50%] absolute max-[575px]:right-0 " />
              </span>
              <span className="text-sm cursor-pointer align-middle pt-1">
                {data.author.name}
              </span>
            </Link>
            <div className="budget">
              <p className="m-0 text-[#6b7177] leading-[1.85] font-sm text-[12px]">
                Starting at
                <span className="font-medium text-[15px] text-[#222] ml-1 ">
                  {data.price} DA
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  data: PropTypes.object,
  style: PropTypes.string,
};

ProductCard.defaultProps = {
  style: "",
};

export default ProductCard;
