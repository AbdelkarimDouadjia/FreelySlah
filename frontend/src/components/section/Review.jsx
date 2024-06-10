import React from "react";
import PropTypes from "prop-types";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => res.data),
  });

  return (
    <div className="flex-shrink-0 w-full max-w-full px-3 min-[992px]:flex-initial min-[992px]:flex-shrink-0 mt-6">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div>An error has occurred</div>
      ) : (
        <div className="max-[767px]:mb-[30px] text-center justify-start relative flex">
          <img
            height={60}
            width={60}
            src={data.img || "/src/assets/images/avatar/Image (3).jpg"}
            className="text-transparent align-middle "
            alt="comments-2.png"
          />
          <div className="ml-[20px]">
            <h6 className="mt-0 mb-0 text-[15px] font-medium text-[#222] leading-[1.3125]">
              {data.fname} {data.lname}
            </h6>
            <div className="text-left">
              <span className="text-left text-xs">{data.country}</span>
            </div>
            <div className="flex items-center">
              {Array(review.star)
                .fill()
                .map((item, i) => (
                  <i
                    className="fas fa-star review-color text-[#e1c03f] font-black"
                    key={i}
                  />
                ))}
              <span className="text-[#e1c03f] ml-1">{review.star}</span>
            </div>
          </div>
        </div>
      )}
      <p className="text-[#222] font-normal mx-0 leading-[1.85] mt-[20px] mb-[20px] ">
        {review.desc}
      </p>
      {/* <p className="text-[#222] font-normal mx-0 leading-[1.85] mt-[20px] mb-[20px] ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable. If you are going to use a passage of Lorem Ipsum, you need
          to be sure there isn&apos;t anything embarrassing hidden in the middle
          of text.
        </p> */}
      <div className="review_cansel_btns flex">
        <a className="text-[#697488] leading-[26px] tracking-normal mr-[30px] cursor-pointer outline-0 transition-all duration-300 ease-linear pb-[30px]">
          <i className="fas fa-thumbs-up mr-[10px] font-black" />
          Helpful
        </a>
        <a className="text-[#697488] leading-[26px] tracking-normal mr-[30px] cursor-pointer outline-0 transition-all duration-300 ease-linear">
          <i className="fas fa-thumbs-down mr-[10px] font-black " />
          Not helpful
        </a>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
