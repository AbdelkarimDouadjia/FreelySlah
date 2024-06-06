import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDollarSign } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoIosAttach } from "react-icons/io";
import newRequest from "../../utils/newRequest";
import { Link } from "react-router-dom";

const categories = {
  "Web Design": ["UI/UX Design", "Responsive Design"],
  "Software Development": ["Frontend Development", "Backend Development"],
  Writing: ["Content Writing", "Technical Writing"],
  Marketing: ["SEO", "Social Media"],
};

const JobPostingPage = () => {
  // Edit Job Title Modal
  const [showEditJobTitleModal, setShowEditJobTitleModal] = useState(false);
  const [jobTitle, setJobTitle] = useState(
    "Build responsive WordPress site with booking/payment functionality"
  );
  const [tempJobTitle, setTempJobTitle] = useState(jobTitle);

  const handleEditJobTitle = () => {
    setJobTitle(tempJobTitle);
    toast.success("Job title updated successfully");
    setShowEditJobTitleModal(false);
  };

  // Edit Job Description Modal
  const [showEditJobDescriptionModal, setShowEditJobDescriptionModal] =
    useState(false);
  const [jobDescription, setJobDescription] = useState(
    "my work is about something I can’t tell you about it right now"
  );
  const [tempJobDescription, setTempJobDescription] = useState(jobDescription);

  const handleEditJobDescription = () => {
    setJobDescription(tempJobDescription);
    toast.success("Job description updated successfully");
    setShowEditJobDescriptionModal(false);
  };

  // Edit Job Category Modal
  const [showEditJobCategoryModal, setShowEditJobCategoryModal] =
    useState(false);
  const [jobCategory, setJobCategory] = useState("Web Design");
  const [jobSubCategory, setJobSubCategory] = useState("UI/UX Design");

  // Temporary state for modal
  const [tempJobCategory, setTempJobCategory] = useState(jobCategory);
  const [tempJobSubCategory, setTempJobSubCategory] = useState(jobSubCategory);

  const openEditJobCategoryModal = () => {
    setTempJobCategory(jobCategory);
    setTempJobSubCategory(jobSubCategory);
    setShowEditJobCategoryModal(true);
  };

  const handleEditJobCategory = () => {
    setJobCategory(tempJobCategory);
    setJobSubCategory(tempJobSubCategory);
    toast.success("Job category updated successfully");
    setShowEditJobCategoryModal(false);
  };

  // Manage Skills
  const [skills, setSkills] = useState(["Framer", "CSS", "PHP", "Web Design"]);
  const [showEditSkillsModal, setShowEditSkillsModal] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
      toast.success("Skill added successfully");
    }
    setShowEditSkillsModal(false);
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
    toast.success("Skill deleted successfully");
  };

  // State for budget modal
  const [showEditBudgetModal, setShowEditBudgetModal] = useState(false);
  const [budgetType, setBudgetType] = useState("hourly");
  const [hourlyRateFrom, setHourlyRateFrom] = useState(15);
  const [hourlyRateTo, setHourlyRateTo] = useState(30);
  const [fixedPrice, setFixedPrice] = useState(0);

  // Temporary state for modal
  const [tempBudgetType, setTempBudgetType] = useState(budgetType);
  const [tempHourlyRateFrom, setTempHourlyRateFrom] = useState(hourlyRateFrom);
  const [tempHourlyRateTo, setTempHourlyRateTo] = useState(hourlyRateTo);
  const [tempFixedPrice, setTempFixedPrice] = useState(fixedPrice);

  const openEditBudgetModal = () => {
    setTempBudgetType(budgetType);
    setTempHourlyRateFrom(hourlyRateFrom);
    setTempHourlyRateTo(hourlyRateTo);
    setTempFixedPrice(fixedPrice);
    setShowEditBudgetModal(true);
  };

  const handleSaveBudget = () => {
    setBudgetType(tempBudgetType);
    setHourlyRateFrom(tempHourlyRateFrom);
    setHourlyRateTo(tempHourlyRateTo);
    setFixedPrice(tempFixedPrice);
    toast.success("Budget updated successfully");
    setShowEditBudgetModal(false);
  };

  // State for scope modal
  const [showEditScopeModal, setShowEditScopeModal] = useState(false);
  const [scopeDuration, setScopeDuration] = useState("1 to 3 months");
  const [scopeLevel, setScopeLevel] = useState("Intermediate level");
  const [scopeHiring, setScopeHiring] = useState(
    "Not planning to hire full time"
  );

  // Temporary state for modal
  const [tempScopeDuration, setTempScopeDuration] = useState(scopeDuration);
  const [tempScopeLevel, setTempScopeLevel] = useState(scopeLevel);
  const [tempScopeHiring, setTempScopeHiring] = useState(scopeHiring);

  const openEditScopeModal = () => {
    setTempScopeDuration(scopeDuration);
    setTempScopeLevel(scopeLevel);
    setTempScopeHiring(scopeHiring);
    setShowEditScopeModal(true);
  };

  const handleSaveScope = () => {
    setScopeDuration(tempScopeDuration);
    setScopeLevel(tempScopeLevel);
    setScopeHiring(tempScopeHiring);
    toast.success("Scope updated successfully");
    setShowEditScopeModal(false);
  };

  const finish = async () => {
    try {
      await newRequest.post("/project", {});

      toast.success("Job posted successfully");
    } catch (error) {
      toast.error("Failed to post job");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-10">
      <div className="w-full max-w-4xl flex justify-between items-center mb-7 ">
        <h1 className="text-2xl font-semibold">Project details</h1>
        <div className="flex items-center justify-end ">
          <Link to="/manageprojects">
            <button
              onClick={finish}
              className="cursor-pointer  !py-2 !px-4 hover:text-white rounded-[60px] !bg-[#0E9F6E] hover:!bg-[#046c4e] text-white hover:border-none transition-all duration-300 ease-linear font-medium w-fit"
            >
              Post this Project
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-4xl bg-white shadow-md border border-[#D9D9D9] rounded-2xl">
        {/* Project title */}
        <div className="border-b border-[#D9D9D9] p-5 ">
          <div className="flex justify-between">
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 border-none outline-none text-xl font-medium"
              value={jobTitle}
              readOnly
            />
            <div className="flex items-center">
              <button
                onClick={() => {
                  setTempJobTitle(jobTitle);
                  setShowEditJobTitleModal(true);
                }}
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9]  mr-2"
              >
                <MdOutlineEdit />
              </button>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="border-b border-[#D9D9D9] p-5 ">
          <div className="flex justify-between">
            <p className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 border-none  text-sm outline-none">
              {jobDescription}
            </p>
            <div className="flex items-center">
              <button
                onClick={() => {
                  setTempJobDescription(jobDescription);
                  setShowEditJobDescriptionModal(true);
                }}
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9]  mr-2"
              >
                <MdOutlineEdit />
              </button>
            </div>
          </div>
        </div>

        <div className="border-b border-[#D9D9D9] p-5 ">
          {/* Job category section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium">
              Category
            </label>
            <div className="flex items-center">
              <p className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 border-none outline-none">
                {jobCategory} - {jobSubCategory}
              </p>
              <div className="flex items-center">
                <button
                  onClick={openEditJobCategoryModal}
                  className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9]  mr-2"
                >
                  <MdOutlineEdit />
                </button>
              </div>
            </div>
          </div>

          {/* Skills section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium">
              Skills
            </label>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center py-0 px-[12px] bg-white text-sm text-[#676767] rounded-full border border-[#676767]"
                >
                  {skill}
                  <button
                    onClick={() => handleDeleteSkill(skill)}
                    className="ml-2 text-[#676767] text-xl"
                  >
                    &times;
                  </button>
                </span>
              ))}
              <button
                onClick={() => setShowEditSkillsModal(true)}
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9]"
              >
                <MdOutlineEdit />
              </button>
            </div>
          </div>

          {/* Scope section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium">
              Scope
            </label>
            <div className="flex items-center">
              <input
                type="text"
                className="w-full p-2"
                value={`${scopeDuration}, ${scopeLevel}, ${scopeHiring}`}
                readOnly
              />
              <div className="flex items-center ml-2">
                <button
                  onClick={openEditScopeModal}
                  className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                >
                  <MdOutlineEdit />
                </button>
              </div>
            </div>
          </div>

          {/* Budget section */}
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-medium">
              Budget
            </label>
            <div className="flex items-center justify-start">
              <p className="w-full p-2 rounded-md focus:outline-none focus:border-green-500">
                {budgetType === "hourly"
                  ? `$${hourlyRateFrom}.00 - $${hourlyRateTo}.00 /hr`
                  : `$${fixedPrice}`}
              </p>
              <div className="flex items-center">
                <button
                  onClick={openEditBudgetModal}
                  className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9]  mr-2"
                >
                  <MdOutlineEdit />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Attach a File */}
        <div className="p-5">
          <label className="block text-gray-900 mb-3 text-lg font-medium">
            Attach a File
          </label>
          <div className="relative inline-block hover:bg-[#F9F9F9] cursor-pointer">
            <button className="flex items-center justify-center border border-[#108A00] rounded-3xl px-4 py-2 transition-all duration-150 ease-in-out hover:bg-[#F9F9F9]">
              <IoIosAttach className="text-[#108A00] text-xl mr-2" />
              <span className="text-[#108A00] text-sm font-medium">
                Attach file
              </span>
            </button>
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <span className="block text-gray-500 text-sm mt-2 text-right">
            Max file size: 5MB
          </span>
        </div>

        {/* Edit Title Modal */}
        {showEditJobTitleModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center ">
            <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">Edit Job Title</h3>
                <button
                  onClick={() => setShowEditJobTitleModal(false)}
                  className="text-gray-600 hover:text-gray-900 !text-5xl"
                >
                  &times;
                </button>
              </div>
              <div className="px-3 overflow-x-auto min-h-fit">
                <div className="mb-7">
                  <label className="text-[#333] font-medium text-xl mb-3">
                    Write a title for your job post
                  </label>
                  <input
                    type="text"
                    className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                     focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={tempJobTitle}
                    onChange={(e) => setTempJobTitle(e.target.value)}
                  />
                </div>

                <div>
                  <h6 className="mb-2">Example titles</h6>
                  <ul className="list-disc list-inside text-[#222] text-xs">
                    <li>
                      Build responsive WordPress site with booking/payment
                      functionality
                    </li>
                    <li>Need a logo for my new business</li>
                    <li>Design a new homepage for my website</li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowEditJobTitleModal(false)}
                  className="px-4 py-2 mr-2 text-[#0E9F6E]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditJobTitle}
                  className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Description Modal */}
        {showEditJobDescriptionModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center ">
            <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">Edit Description</h3>
                <button
                  onClick={() => setShowEditJobDescriptionModal(false)}
                  className="text-gray-600 hover:text-gray-900 !text-5xl"
                >
                  &times;
                </button>
              </div>
              <div className="px-3 overflow-x-auto min-h-fit">
                <div className="mb-7">
                  <textarea
                    className="block p-2 input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                     focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600 w-full h-24 hover:border-[#DEBE1A]
                    focus:border-[#DEBE1A] border-[1px] border-[#E6E6E6]"
                    value={tempJobDescription}
                    onChange={(e) => setTempJobDescription(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowEditJobDescriptionModal(false)}
                  className="px-4 py-2 mr-2 text-[#0E9F6E]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditJobDescription}
                  className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Category Modal */}
        {showEditJobCategoryModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">Edit Category</h3>
                <button
                  onClick={() => setShowEditJobCategoryModal(false)}
                  className="text-gray-600 hover:text-gray-900 !text-5xl"
                >
                  &times;
                </button>
              </div>
              <div className="px-3 overflow-x-auto min-h-fit">
                <div className="mb-7">
                  <label className="text-[#333] font-medium text-xl mb-3">
                    Category
                  </label>
                  <select
                    className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={tempJobCategory}
                    onChange={(e) => {
                      setTempJobCategory(e.target.value);
                      setTempJobSubCategory(categories[e.target.value][0]);
                    }}
                  >
                    {Object.keys(categories).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-7">
                  <label className="text-[#333] font-medium text-xl mb-3">
                    Specialty
                  </label>
                  <select
                    className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={tempJobSubCategory}
                    onChange={(e) => setTempJobSubCategory(e.target.value)}
                  >
                    {categories[tempJobCategory].map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowEditJobCategoryModal(false)}
                  className="px-4 py-2 mr-2 text-[#0E9F6E]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditJobCategory}
                  className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Skills Modal */}
        {showEditSkillsModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center ">
            <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">Add Skill</h3>
                <button
                  onClick={() => setShowEditSkillsModal(false)}
                  className="text-gray-600 hover:text-gray-900 !text-5xl"
                >
                  &times;
                </button>
              </div>
              <div className="px-3 overflow-x-auto min-h-fit">
                <div className="mb-7 ">
                  <input
                    type="text"
                    className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowEditSkillsModal(false)}
                  className="px-4 py-2  mr-2 text-[#0E9F6E] "
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddSkill}
                  className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Budget Modal */}
        {showEditBudgetModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 relative md-b:w-[650px] w-[75%]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">Edit Budget</h2>
                <button
                  onClick={() => setShowEditBudgetModal(false)}
                  className="text-gray-600 hover:text-gray-900 !text-5xl"
                >
                  &times;
                </button>
              </div>
              <div className="flex flex-wrap justify-between w-full">
                <div className="custom-control w-full md-b:w-2/5 md-b:mr-5 border-2 border-transparent outline-1 outline hover:outline-[#b7b1b1] outline-[#e9e9e9] rounded-[7px] pt-[16px] px-[10px] pb-[15px] relative cursor-pointer transition-all duration-150 ease-in-out hover:!bg-[#fafafa] hover:!border-1 hover:!border-[#0e9f6e] focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3] mb-4 flex items-center">
                  <label className="w-full items-center flex !flex-row-reverse justify-between">
                    <input
                      type="radio"
                      className="form-radio text-green-500"
                      name="budgetType"
                      value="hourly"
                      checked={tempBudgetType === "hourly"}
                      onChange={() => setTempBudgetType("hourly")}
                    />
                    <div className="flex flex-col">
                      <GoClock className="ml-2 mr-1 text-black text-xl mb-3" />
                      <span className="ml-2">Hourly rate</span>
                    </div>
                  </label>
                </div>

                <div className="custom-control w-full md-b:w-2/5 md-b:mr-5 border-2 border-transparent outline-1 outline hover:outline-[#b7b1b1] outline-[#e9e9e9] rounded-[7px] pt-[16px] px-[10px] pb-[15px] relative cursor-pointer transition-all duration-150 ease-in-out hover:!bg-[#fafafa] hover:!border-1 hover:!border-[#0e9f6e] focus:outline-none focus:border-[#0e9f6e] focus-within:outline-none focus-within:border-[#0e9f6e] placeholder:text-sm placeholder:text-[#BEB5C3] mb-4 flex items-center">
                  <label className="w-full items-center flex !flex-row-reverse justify-between">
                    <input
                      type="radio"
                      className="form-radio text-green-500"
                      name="budgetType"
                      value="fixed"
                      checked={tempBudgetType === "fixed"}
                      onChange={() => setTempBudgetType("fixed")}
                    />
                    <div className="flex flex-col">
                      <FaDollarSign className="ml-2 mr-1k text-xl text-[#2b2b2b] mb-3" />
                      <span className="ml-2">Fixed price</span>
                    </div>
                  </label>
                </div>

                {tempBudgetType === "hourly" && (
                  <div className="my-4 w-full">
                    <div className="w-full mb-3 flex justify-between items-center">
                      <div className="flex flex-col flex-start">
                        <span className="mr-2">From</span>
                        <div className="flex">
                          <input
                            type="number"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 w-1/2"
                            value={tempHourlyRateFrom}
                            onChange={(e) =>
                              setTempHourlyRateFrom(e.target.value)
                            }
                          />
                          <div className="ml-2 flex items-center">$ /hr</div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-start">
                        <span className="mr-2">To</span>
                        <div className="flex">
                          <input
                            type="number"
                            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 w-1/2"
                            value={tempHourlyRateTo}
                            onChange={(e) =>
                              setTempHourlyRateTo(e.target.value)
                            }
                          />
                          <span className="ml-2 flex items-center">$ /hr</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full text-[10px] text-gray-500">
                      This is the average rate for similar projects.
                    </div>
                  </div>
                )}
                {tempBudgetType === "fixed" && (
                  <div className="my-4">
                    <div className="text-gray-500 text-sm mb-4">
                      Set a price for the project and pay at the end, or you can
                      divide the project into milestones and pay as each
                      milestone is completed.
                    </div>
                    <div className="text-sm">
                      <h4 className="font-medium">
                        What is the best cost estimate for your project?
                      </h4>
                      <p className="text-gray-500 mb-4">
                        You can negotiate this cost and create milestones when
                        you chat with your freelancer.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 w-1/3"
                        value={tempFixedPrice}
                        onChange={(e) => setTempFixedPrice(e.target.value)}
                      />
                      <span className="ml-2">$</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowEditBudgetModal(false)}
                  className="px-4 py-2 mr-2 text-[#0E9F6E]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveBudget}
                  className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Edit Scope Modal */}
        {showEditScopeModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">Edit Scope</h3>
                <button
                  onClick={() => setShowEditScopeModal(false)}
                  className="text-gray-600 hover:text-gray-900 !text-5xl"
                >
                  &times;
                </button>
              </div>
              <div className="px-3 overflow-x-auto min-h-fit">
                <div className="mb-7">
                  <label className="text-[#333] font-medium text-xl mb-3">
                    Duration
                  </label>
                  <select
                    className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={tempScopeDuration}
                    onChange={(e) => setTempScopeDuration(e.target.value)}
                  >
                    <option value="More than 6 months">
                      More than 6 months
                    </option>
                    <option value="3 to 6 months">3 to 6 months</option>
                    <option value="1 to 3 months">1 to 3 months</option>
                  </select>
                </div>
                <div className="mb-7">
                  <label className="text-[#333] font-medium text-lg mb-3">
                    What level of experience will it need?
                  </label>
                  <select
                    className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={tempScopeLevel}
                    onChange={(e) => setTempScopeLevel(e.target.value)}
                  >
                    <option value="Entry level">Entry level</option>
                    <option value="Intermediate level">
                      Intermediate level
                    </option>
                    <option value="Expert level">Expert level</option>
                  </select>
                </div>
                <div className="mb-7">
                  <label className="text-[#333] font-medium text-xl mb-3">
                    Hiring Plan
                  </label>
                  <select
                    className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                    value={tempScopeHiring}
                    onChange={(e) => setTempScopeHiring(e.target.value)}
                  >
                    <option value="Not planning to hire full time">
                      Not planning to hire full time
                    </option>
                    <option value="Planning to hire full time">
                      Planning to hire full time
                    </option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setShowEditScopeModal(false)}
                  className="px-4 py-2 mr-2 text-[#0E9F6E]"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveScope}
                  className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer />
      </div>
    </div>
  );
};

export default JobPostingPage;
