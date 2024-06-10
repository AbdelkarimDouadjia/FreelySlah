import React, { useContext, useState } from "react";
import { GoSearch } from "react-icons/go";
import ProjectCard from "../Project/components/ProjectCard";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "../../App.css";
import styles from "../../pages/Create Service/CreateService.module.css";
import { AuthContext } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import newRequest from "../../utils/newRequest";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const categories = {
  "Web Design": ["UI/UX Design", "Responsive Design"],
  "Software Development": ["Frontend Development", "Backend Development"],
  Writing: ["Content Writing", "Technical Writing"],
  Marketing: ["SEO", "Social Media"],
};

const HomeFreelancer = () => {
  const navigate = useNavigate();
  const handleCardClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };
  const { currentUser, updateUser } = useContext(AuthContext);
  const [isOnline, setIsOnline] = useState(currentUser.isOnline);

  const { isLoading, error, data } = useQuery({
    queryKey: ["projects"],
    queryFn: () => newRequest.get("/projects").then((res) => res.data),
  });
  console.log(data);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [jobType, setJobType] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [budgetType, setBudgetType] = useState("");
  const [hourlyBudgetRange, setHourlyBudgetRange] = useState([0, 1000]);
  const [fixedBudgetRange, setFixedBudgetRange] = useState([0, 100000]);
  const [duration, setDuration] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [availableSkills, setAvailableSkills] = useState([]);

  const toggleStatus = async () => {
    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        isOnline: !isOnline,
      });
      updateUser(res.data);
      // Implement your status update logic here
      setIsOnline(!isOnline);
      isOnline
        ? toast.error("You are now invisible")
        : toast.success("You are now online");
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    const value = event.target.value;
    setJobType(
      jobType.includes(value)
        ? jobType.filter((type) => type !== value)
        : [...jobType, value]
    );
  };

  const handleExperienceChange = (event) => {
    const value = event.target.value;
    setExperienceLevel(
      experienceLevel.includes(value)
        ? experienceLevel.filter((level) => level !== value)
        : [...experienceLevel, value]
    );
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubCategoryChange = (event) => {
    setSelectedSubCategory(event.target.value);
  };

  const handleSkillsChange = (event) => {
    const value = event.target.value;
    setSelectedSkills(
      selectedSkills.includes(value)
        ? selectedSkills.filter((skill) => skill !== value)
        : [...selectedSkills, value]
    );
  };

  const handleBudgetTypeChange = (event) => {
    setBudgetType(event.target.value);
  };

  const handleHourlyBudgetChange = (values) => {
    setHourlyBudgetRange(values);
  };

  const handleFixedBudgetChange = (values) => {
    setFixedBudgetRange(values);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchTriggered(true);
  };

  const projects = data;

  const filteredProjects = searchTriggered
    ? projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDescription = project.description
          .toLowerCase()
          .includes(query);
        const matchesTags = project.skills.some((skill) =>
          skill.toLowerCase().includes(query)
        );
        const matchesLocation = project.location
          ? project.location.toLowerCase().includes(query)
          : false;

        return (
          (matchesTitle ||
            matchesDescription ||
            matchesTags ||
            matchesLocation) &&
          (selectedLocation === "" ||
            (project.location &&
              project.location.includes(selectedLocation))) &&
          (jobType.length === 0 || jobType.includes(project.type)) &&
          (experienceLevel.length === 0 ||
            experienceLevel.includes(project.scopeLevel)) &&
          (selectedCategory === "" || project.category === selectedCategory) &&
          (selectedSubCategory === "" ||
            project.subCategory === selectedSubCategory) &&
          (selectedSkills.length === 0 ||
            selectedSkills.every((skill) => project.skills.includes(skill))) &&
          (budgetType === "" ||
            (budgetType === "fixed" &&
              project.budgetType === "fixed" &&
              project.fixedPrice >= fixedBudgetRange[0] &&
              project.fixedPrice <= fixedBudgetRange[1]) ||
            (budgetType === "hourly" &&
              project.budgetType === "hourly" &&
              project.hourlyRate >= hourlyBudgetRange[0] &&
              project.hourlyRate <= hourlyBudgetRange[1])) &&
          (duration === "" || project.scopeDuration === duration)
        );
      })
    : projects;

  return (
    <div className="flex flex-col lg:flex-row p-4 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 mx-2 mt-4 rounded-lg shadow-lg w-full lg:w-1/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-medium">Filter</h2>
          <button
            className="text-red-500 border border-red-500 px-4 py-2 rounded-lg hover:bg-gray-100"
            onClick={() => {
              setSelectedLocation("");
              setJobType([]);
              setExperienceLevel([]);
              setSelectedCategory("");
              setSelectedSubCategory("");
              setSelectedSkills([]);
              setBudgetType("");
              setHourlyBudgetRange([0, 1000]);
              setFixedBudgetRange([0, 100000]);
              setDuration("");
              setSearchQuery("");
              setSearchTriggered(false);
            }}
          >
            Clear all
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Locations</h3>
          <select
            className="w-full border p-2 rounded-lg py-2 px-3  focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
            value={selectedLocation}
            onChange={handleLocationChange}
          >
            <option value="">Select a location</option>
            <option value="Kiev, Ukraine">Kiev, Ukraine</option>
            <option value="New York, Manhattan">New York, Manhattan</option>
            <option value="San Francisco, CA">San Francisco, CA</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Job Type</h3>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="fulltime"
              value="Fulltime"
              className="mr-2"
              checked={jobType.includes("Fulltime")}
              onChange={handleJobTypeChange}
            />
            <label htmlFor="fulltime">Fulltime Job</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="parttime"
              value="Part-time"
              className="mr-2"
              checked={jobType.includes("Part-time")}
              onChange={handleJobTypeChange}
            />
            <label htmlFor="parttime">Part-time Job</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="remote"
              value="Remote work"
              className="mr-2"
              checked={jobType.includes("Remote work")}
              onChange={handleJobTypeChange}
            />
            <label htmlFor="remote">Remote</label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Experience Levels</h3>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="entry"
              value="Entry level"
              className="mr-2"
              checked={experienceLevel.includes("Entry level")}
              onChange={handleExperienceChange}
            />
            <label htmlFor="entry">Entry Level</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="intermediate"
              value="Intermediate level"
              className="mr-2"
              checked={experienceLevel.includes("Intermediate level")}
              onChange={handleExperienceChange}
            />
            <label htmlFor="intermediate">Intermediate Level</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="expert"
              value="Expert level"
              className="mr-2"
              checked={experienceLevel.includes("Expert level")}
              onChange={handleExperienceChange}
            />
            <label htmlFor="expert">Expert Level</label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Category</h3>
          <select
            className="w-full border p-2 rounded-lg py-2 px-3  focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select a category</option>
            <option value="Web Design">Web Design</option>
            <option value="Software Development">Software Development</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Subcategory</h3>
          <select
            className="w-full border p-2 rounded-lg py-2 px-3  focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
            value={selectedSubCategory}
            onChange={handleSubCategoryChange}
          >
            <option value="">Select a subcategory</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Frontend Development">Frontend Development</option>
            {/* Add more options here */}
          </select>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Skills</h3>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="skill1"
              value="Skill 1"
              className="mr-2"
              checked={selectedSkills.includes("Skill 1")}
              onChange={handleSkillsChange}
            />
            <label htmlFor="skill1">Skill 1</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="skill2"
              value="Skill 2"
              className="mr-2"
              checked={selectedSkills.includes("Skill 2")}
              onChange={handleSkillsChange}
            />
            <label htmlFor="skill2">Skill 2</label>
          </div>
          {/* Add more skills checkboxes here */}
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Budget Type</h3>
          <div className={`${styles.radioContainer} mb-2`}>
            <input
              type="radio"
              id="fixed"
              name="budgetType"
              value="fixed"
              className="mr-2"
              checked={budgetType === "fixed"}
              onChange={handleBudgetTypeChange}
            />
            <label htmlFor="fixed">Fixed Price</label>
          </div>
          <div className={`${styles.radioContainer} mb-2`}>
            <input
              type="radio"
              id="hourly"
              name="budgetType"
              value="hourly"
              className="mr-2"
              checked={budgetType === "hourly"}
              onChange={handleBudgetTypeChange}
            />
            <label htmlFor="hourly">Hourly Rate</label>
          </div>
        </div>
        {budgetType === "hourly" && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Hourly Budget Range</h3>
            <RangeSlider
              min={0}
              max={1000}
              step={1}
              value={hourlyBudgetRange}
              onInput={handleHourlyBudgetChange}
              className="w-full custom-range-slider"
            />
            <div className="flex justify-between mt-8 px-8 items-center">
              <input
                type="number"
                value={hourlyBudgetRange[0]}
                onChange={(e) =>
                  setHourlyBudgetRange([
                    Number(e.target.value),
                    hourlyBudgetRange[1],
                  ])
                }
                className="border border-gray-300 rounded p-2 w-24"
              />
              <span className="mx-2">-</span>
              <input
                type="number"
                value={hourlyBudgetRange[1]}
                onChange={(e) =>
                  setHourlyBudgetRange([
                    hourlyBudgetRange[0],
                    Number(e.target.value),
                  ])
                }
                className="border border-gray-300 rounded p-2 w-24"
              />
            </div>
          </div>
        )}
        {budgetType === "fixed" && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Fixed Budget Range</h3>
            <RangeSlider
              min={0}
              max={100000}
              step={1}
              value={fixedBudgetRange}
              onInput={handleFixedBudgetChange}
              className="w-full custom-range-slider"
            />
            <div className="flex justify-between mt-8 px-8 items-center">
              <input
                type="number"
                value={fixedBudgetRange[0]}
                onChange={(e) =>
                  setFixedBudgetRange([
                    Number(e.target.value),
                    fixedBudgetRange[1],
                  ])
                }
                className="border border-gray-300 rounded p-2 w-24"
              />
              <span className="mx-2">-</span>
              <input
                type="number"
                value={fixedBudgetRange[1]}
                onChange={(e) =>
                  setFixedBudgetRange([
                    fixedBudgetRange[0],
                    Number(e.target.value),
                  ])
                }
                className="border border-gray-300 rounded p-2 w-24"
              />
            </div>
          </div>
        )}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Duration</h3>
          <div className={`${styles.radioContainer} mb-2`}>
            <input
              type="radio"
              id="moreThan6Months"
              name="duration"
              value="more than 6 months"
              className="mr-2"
              checked={duration === "more than 6 months"}
              onChange={handleDurationChange}
            />
            <label htmlFor="moreThan6Months">More than 6 months</label>
          </div>
          <div className={`${styles.radioContainer} mb-2`}>
            <input
              type="radio"
              id="threeToSixMonths"
              name="duration"
              value="3 to 6 months"
              className="mr-2"
              checked={duration === "3 to 6 months"}
              onChange={handleDurationChange}
            />
            <label htmlFor="threeToSixMonths">3 to 6 months</label>
          </div>
          <div className={`${styles.radioContainer} mb-2`}>
            <input
              type="radio"
              id="oneToThreeMonths"
              name="duration"
              value="1 to 3 months"
              className="mr-2"
              checked={duration === "1 to 3 months"}
              onChange={handleDurationChange}
            />
            <label htmlFor="oneToThreeMonths">1 to 3 months</label>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 p-4">
        <div className="bg-[#268D61] text-white mb-4 rounded-lg p-6">
          <h2 className="text-[26px] font-semibold mb-2">
            Are you looking for a dream job?
          </h2>
          <p className="mb-4 text-[#E7F2EE]">
            Derrida is a place where you can find your dream job in various
            skills. More than 10,000 jobs are available here
          </p>
          <div className="flex">
            <div className="flex-grow flex items-center justify-start p-1 rounded-lg w-full bg-[#51A481] relative">
              <GoSearch className="text-white text-[20px] mx-2" />
              <input
                type="text"
                placeholder="Search your dream job here"
                className="text-white outline-none bg-[#51A481] w-full h-full placeholder-white"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <button
              onClick={handleSearchClick}
              className="ml-2 font-bold bg-white !text-[#36956D] py-4 rounded-lg px-8 flex w-fit whitespace-nowrap"
            >
              Search Job
            </button>
          </div>
        </div>

        {/* Render filtered ProjectCard components */}
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          "Something went wrong!"
        ) : (
          filteredProjects.map((project, index) => (
            <div className="mb-7" key={index}>
              <ProjectCard key={index} data={project} />
            </div>
          ))
        )}
      </div>

      <div className="lg:w-1/4 p-4">
        <div className="bg-white p-4 mb-4 rounded-2xl shadow flex items-center flex-col">
          <img
            src={currentUser.img}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <div className="text-center">
            <h3 className="text-lg font-bold">
              {currentUser.fname} {currentUser.lname}
            </h3>
            <p className="text-gray-500">
              {currentUser.isSeller ? "Freelancer" : "Client"}
            </p>
          </div>
          <div className="mt-4">
            <button
              onClick={toggleStatus}
              className={`relative inline-flex items-center h-10 !w-56 rounded-full transition-colors duration-300 hover:bg-gray-200 border border-[#D9D9D9]`}
            >
              <span
                className={`absolute left-0 h-10 w-28 bg-[#268D61] rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                  isOnline ? "" : "translate-x-28"
                }`}
              />
              <span
                className={`absolute left-6 text-md font-medium transition-opacity duration-300 ease-in-out ${
                  isOnline ? "text-white" : "text-[#268D61]"
                }`}
              >
                Online
              </span>
              <span
                className={`absolute right-6 text-md font-medium transition-opacity duration-300 ease-in-out ${
                  isOnline ? "text-[#268D61]" : "text-white"
                }`}
              >
                Invisible
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white p-6 mb-4 rounded-2xl shadow">
          <h3 className="text-lg font-bold mb-2">Skill & Expertise</h3>
          <div className="flex flex-wrap">
            {currentUser.userProfile[0].userSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#D9F9E4] text-[#268D61] text-sm px-4 py-1 rounded-2xl mr-2 mb-2"
              >
                {skill.skill}
              </span>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomeFreelancer;
