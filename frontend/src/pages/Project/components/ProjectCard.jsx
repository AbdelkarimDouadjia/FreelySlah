import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { toast } from "react-toastify"; // Adjust this import according to your project structure
import newRequest from "../../../utils/newRequest";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
//import Project from "../../../../../api/models/project.model";

const ProjectCard = (props) => {
  console.log(props.data);
  const {
    title,
    description,
    category,
    subCategory,
    skills,
    budgetType,
    hourlyRateFrom,
    hourlyRateTo,
    fixedPrice,
    scopeDuration,
    scopeLevel,
    scopeHiring,
    location,
    isPaymentVerified,
    userId,
  } = props.data;
  const id = props.data._id;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [userProject, setUserProject] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const projectUser = async () => {
      try {
        const res = await newRequest.get(`/users/${userId}`);
        setUserProject(res.data);
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.message);
      }
    };

    projectUser();
  }, [userId]);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    const savedProjects =
      JSON.parse(localStorage.getItem("savedProjects")) || [];
    if (!isBookmarked) {
      const newProject = {
        title,
        description,
        category,
        subCategory,
        skills,
        budgetType,
        fixedPrice,
        scopeDuration,
        scopeLevel,
        scopeHiring,
        location,
        isPaymentVerified,
        imageSrc: userProject.img,
      };
      localStorage.setItem(
        "savedProjects",
        JSON.stringify([...savedProjects, newProject])
      );
    } else {
      const updatedProjects = savedProjects.filter(
        (project) => project.title !== title
      );
      localStorage.setItem("savedProjects", JSON.stringify(updatedProjects));
    }
  };

  const skillColors = [
    { bgColor: "#EBF5F9", textColor: "#70B8D7" },
    { bgColor: "#EBF9EF", textColor: "#50CF74" },
    { bgColor: "#EFEBF9", textColor: "#6D4BCD" },
    { bgColor: "#F9F2EB", textColor: "#CE894B" },
    { bgColor: "#EBF0F9", textColor: "#4B77CE" },
    { bgColor: "#EBF9F4", textColor: "#3DCA97" },
  ];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * skillColors.length);
    return skillColors[randomIndex];
  };

  return (
    <div className="relative w-full bg-white rounded-xl shadow overflow-hidden border border-[#EAECEE]">
      <div className="absolute top-4 right-4">
        <button
          onClick={handleBookmark}
          className={`text-gray-500 hover:text-gray-700 border border-[#EAECEE] p-3 rounded-lg ${
            isBookmarked ? "bg-[#E9F4EF]" : ""
          }`}
        >
          {isBookmarked ? (
            <BsBookmarkFill className="w-4 h-4 !text-[#268D61]" />
          ) : (
            <BsBookmark className="w-4 h-4" />
          )}
        </button>
      </div>
      <div className="md:flex px-8 pt-8">
        <div className="w-fit p-4 pl-0">
          <img
            className="h-14 !max-w-14 object-cover rounded-md"
            src={userProject.img}
            alt="User"
          />
        </div>
        <div className="pt-4">
          <button
            className="uppercase text-xl text-black font-semibold w-fit"
            onClick={() => navigate(`/project/${id}`)}
          >
            {title}
          </button>
          <p className="block mt-1 text-xs leading-tight font-medium text-[#77859A]">
            <span className="font-bold">
              $
              {budgetType === "fixed"
                ? fixedPrice
                : `${hourlyRateFrom} - ${hourlyRateTo}`}
            </span>{" "}
            - {budgetType} - Est. Time: {scopeDuration}
          </p>
        </div>
      </div>
      <div className="p-8 pt-0">
        <p className="mt-2 text-[#222222c1] text-sm font-semibold leading-5">
          {description}
        </p>
        <div className="mt-4 flex items-center flex-wrap">
          {skills.map((skill, index) => {
            const { bgColor, textColor } = getRandomColor();
            return (
              <span
                key={index}
                className={`inline-block rounded-md px-3 py-1 text-sm font-semibold mr-2 mb-2`}
                style={{ backgroundColor: bgColor, color: textColor }}
              >
                {skill}
              </span>
            );
          })}
        </div>
        <div className="mt-4 flex items-center">
          {isPaymentVerified ? (
            <div className="text-sm text-gray-500 mr-4">
              <VscVerifiedFilled className="inline-block text-[#1F8EF4] mr-1 text-lg" />
              Payment Verified
            </div>
          ) : (
            <div className="text-sm text-gray-500 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 48 48"
                className="inline-block bg-red-500 mr-1 text-md rounded-full"
              >
                <path
                  fill="#f44336"
                  d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
                ></path>
                <path
                  fill="#fff"
                  d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
                ></path>
                <path
                  fill="#fff"
                  d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
                ></path>
              </svg>
              Payment Not Verified
            </div>
          )}
          <div className="flex items-center text-lg">
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
            <AiFillStar className="text-yellow-500" />
          </div>
          <div className="text-sm text-gray-500 ml-4 font-semibold">
            <FaMapMarkerAlt className="inline-block text-gray-400 mr-1" />
            {userProject.state}, {userProject.city}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.object,
};

ProjectCard.defaultProps = {
  data: {},
};

export default ProjectCard;
