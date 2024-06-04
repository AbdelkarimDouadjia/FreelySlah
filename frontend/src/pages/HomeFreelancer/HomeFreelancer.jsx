import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import ProjectCard from "../Project/components/ProjectCard";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "../../App.css";
import styles from "../../pages/Create Service/CreateService.module.css";

const HomeFreelancer = () => {
  const [isOnline, setIsOnline] = useState(true);
  const [salaryRange, setSalaryRange] = useState([19444, 100000]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [jobType, setJobType] = useState([]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [searchTriggered, setSearchTriggered] = useState(false);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
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

  const handleSalaryChange = (values) => {
    setSalaryRange(values);
  };

  const handleSearchClick = () => {
    setSearchTriggered(true);
  };

  // Dummy data for ProjectCard components
  const projects = [
    {
      title: "Building end-to-end crowdfunding application",
      type: "Remote work",
      salary: 12000,
      imageSrc: "/src/assets/images/icon/company1.svg",
      description:
        "Looking for an experienced developer for an ongoing project. You will work with an existing SCRUM team for this project...",
      tags: [
        { name: "Kotlin", bgColor: "#EBF5F9", textColor: "#70B8D7" },
        { name: "IOS Developer", bgColor: "#EBF9EF", textColor: "#50CF74" },
        { name: "Software Engineer", bgColor: "#EFEBF9", textColor: "#6D4BCD" },
      ],
      location: "New York, Manhattan",
      estimatedTime: "1 to 3 months",
      isPaymentVerified: true,
    },
    {
      title: "UX Copywriter for company profile landing page",
      type: "Fulltime",
      salary: 2200,
      imageSrc: "/src/assets/images/icon/company2.svg",
      description:
        "Seeking a creative UX Copywriter for our landing page. The ideal candidate will collaborate with our design team to deliver...",
      tags: [
        { name: "UX", bgColor: "#F9F2EB", textColor: "#CE894B" },
        { name: "Copywriting", bgColor: "#EBF0F9", textColor: "#4B77CE" },
        { name: "Marketing", bgColor: "#EBF9F4", textColor: "#3DCA97" },
      ],
      location: "San Francisco, CA",
      estimatedTime: "2 to 4 weeks",
      isPaymentVerified: false,
    },
    // Add more project objects here
  ];

  // Filtered projects based on search query and filters
  const filteredProjects = searchTriggered
    ? projects.filter((project) => {
        const query = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(query);
        const matchesDescription = project.description
          .toLowerCase()
          .includes(query);
        const matchesTags = project.tags.some((tag) =>
          tag.name.toLowerCase().includes(query)
        );
        const matchesLocation = project.location.toLowerCase().includes(query);

        return (
          (matchesTitle ||
            matchesDescription ||
            matchesTags ||
            matchesLocation) &&
          (selectedLocation === "" ||
            project.location.includes(selectedLocation)) &&
          (jobType.length === 0 || jobType.includes(project.type)) &&
          (experienceLevel.length === 0 ||
            experienceLevel.includes(project.estimatedTime)) &&
          project.salary >= salaryRange[0] &&
          project.salary <= salaryRange[1]
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
              setSalaryRange([0, 100000]);
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
              value="1 to 3 months"
              className="mr-2"
              checked={experienceLevel.includes("1 to 3 months")}
              onChange={handleExperienceChange}
            />
            <label htmlFor="entry">Entry Level (1 to 3 months)</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="intermediate"
              value="2 to 4 weeks"
              className="mr-2"
              checked={experienceLevel.includes("2 to 4 weeks")}
              onChange={handleExperienceChange}
            />
            <label htmlFor="intermediate">Intermediate (2 to 4 weeks)</label>
          </div>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input
              type="checkbox"
              id="expert"
              value="Expert"
              className="mr-2"
              checked={experienceLevel.includes("Expert")}
              onChange={handleExperienceChange}
            />
            <label htmlFor="expert">Expert</label>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Expected Salary</h3>
          <RangeSlider
            min={0}
            max={100000}
            step={1}
            value={salaryRange}
            onInput={handleSalaryChange}
            className="w-full custom-range-slider"
          />
          <div className="flex justify-between mt-8 px-8 items-center">
            <input
              type="number"
              value={salaryRange[0]}
              onChange={(e) =>
                setSalaryRange([Number(e.target.value), salaryRange[1]])
              }
              className="border border-gray-300 rounded p-2 w-24"
            />
            <span className="mx-2">-</span>
            <input
              type="number"
              value={salaryRange[1]}
              onChange={(e) =>
                setSalaryRange([salaryRange[0], Number(e.target.value)])
              }
              className="border border-gray-300 rounded p-2 w-24"
            />
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Job Specialties</h3>
          <div className={`${styles.checkboxContainer} mb-2`}>
            <input type="checkbox" id="design" className="mr-2" />
            <label htmlFor="design">Design</label>
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
        {filteredProjects.map((project, index) => (
          <div className="mb-7" key={index}>
            <ProjectCard key={index} {...project} />
          </div>
        ))}
      </div>

      <div className="lg:w-1/4 p-4">
        <div className="bg-white p-4 mb-4 rounded-2xl shadow flex items-center flex-col">
          <img
            src="/src/assets/images/avatar/Image.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <div className="text-center">
            <h3 className="text-lg font-bold">Abdelkarim Douadjia</h3>
            <p className="text-gray-500">Freelancer</p>
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
            <span className="bg-gray-100 text-gray-500 px-4 py-1 m-1 rounded-2xl">
              User Interface
            </span>
            <span className="bg-gray-100 text-gray-500 px-4 py-1 m-1 rounded-2xl">
              Research
            </span>
            <span className="bg-gray-100 text-gray-500 px-4 py-1 m-1 rounded-2xl">
              Motion Design
            </span>
            <span className="bg-gray-100 text-gray-500 px-4 py-1 m-1 rounded-2xl">
              Illustration
            </span>
            <span className="bg-gray-100 text-gray-500 px-4 py-1 m-1 rounded-2xl">
              3D Designer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFreelancer;
