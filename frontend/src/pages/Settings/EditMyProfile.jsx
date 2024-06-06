import React, { useState, useEffect, useContext } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Select from "react-select";
import { GoTrash } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import { PiPlusBold } from "react-icons/pi";
import { Tooltip } from "react-tooltip";
import { IoLink } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { CiImageOn } from "react-icons/ci";
import CircularProgress from "../Create Service/steps/CircularProgress.jsx";
import upload from "../../utils/upload.js";
import styles from "../Create Service/CreateService.module.css";

import { product } from "../../components/section/product";
import PopularServiceCard from "../../components/section/PopularServiceCard.jsx";
import { AuthContext } from "../../context/AuthContext.jsx";
import newRequest from "../../utils/newRequest.js";

const EditMyProfile = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("Overview");

  // Generate an array of years from 1950 to current year
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 + 1 },
    (_, index) => currentYear - index
  );

  // Language section
  const [showAddLanguageModal, setShowAddLanguageModal] = useState(false);
  const [showEditLanguageModal, setShowEditLanguageModal] = useState(false);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedProficiency, setSelectedProficiency] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [userLanguages, setUserLanguages] = useState([]);

  // Simulate fetching language options from an API
  const fetchLanguageOptions = async () => {
    return [
      { value: "English", label: "English" },
      { value: "Spanish", label: "Spanish" },
      { value: "French", label: "French" },
      { value: "German", label: "German" },
      { value: "Chinese", label: "Chinese" },
      { value: "Japanese", label: "Japanese" },
      // Add more languages as needed
    ];
  };

  const proficiencyOptions = [
    { value: "Beginner", label: "Beginner" },
    { value: "Conversational", label: "Conversational" },
    { value: "Fluent", label: "Fluent" },
    { value: "Native or Bilingual", label: "Native or Bilingual" },
  ];

  useEffect(() => {
    const getLanguageOptions = async () => {
      const options = await fetchLanguageOptions();
      setLanguageOptions(options);
    };
    getLanguageOptions();
  }, []);

  const handleAddLanguage = () => {
    if (!selectedLanguage || !selectedProficiency) {
      toast.error("Please select both language and proficiency level.");
      return;
    }

    const newLanguage = {
      language: selectedLanguage.value,
      proficiency: selectedProficiency.value,
    };

    setUserLanguages([...userLanguages, newLanguage]);

    setShowAddLanguageModal(false);
    setSelectedLanguage(null);
    setSelectedProficiency(null);
  };

  const handleEditLanguage = () => {
    if (!selectedProficiency) {
      toast.error("Please select a proficiency level.");
      return;
    }

    const updatedLanguages = [...userLanguages];
    updatedLanguages[editIndex].proficiency = selectedProficiency.value;

    setUserLanguages(updatedLanguages);

    setShowEditLanguageModal(false);
    setSelectedProficiency(null);
    setEditIndex(null);
  };

  const handleDeleteLanguage = (index) => {
    const updatedLanguages = [...userLanguages];
    updatedLanguages.splice(index, 1);
    setUserLanguages(updatedLanguages);
    toast.success("Language deleted successfully.");
  };

  const openEditLanguageModal = (index) => {
    setEditIndex(index);
    setSelectedProficiency({
      value: userLanguages[index].proficiency,
      label: userLanguages[index].proficiency,
    });
    setShowEditLanguageModal(true);
  };

  const getAvailableLanguages = () => {
    const addedLanguages = userLanguages.map((lang) => lang.language);
    return languageOptions.filter(
      (option) => !addedLanguages.includes(option.value)
    );
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#ffffff",
      borderColor: state.isFocused ? "#2525258a" : provided.borderColor,
      boxShadow: state.isFocused ? "0 0 0 1px #2525258a" : provided.boxShadow,
      "&:hover": {
        borderColor: state.isFocused
          ? "#2525258a"
          : provided["&:hover"].borderColor,
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "0.875rem", // Tailwind's text-sm
      color: "#BEB5C3",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "0.875rem", // Tailwind's text-sm
    }),
    input: (provided) => ({
      ...provided,
      outline: "none",
      border: "none",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#0E9F6E"
        : state.isFocused
        ? "#0E9F6E"
        : null,
      color: state.isSelected || state.isFocused ? "#ffffff" : provided.color,
      "&:hover": {
        backgroundColor: state.isSelected ? "#0E9F6E" : "#0e9f6f8d",
        color: "#ffffff",
      },
    }),
  };

  // Education Section
  const [showAddEducationModal, setShowAddEducationModal] = useState(false);
  const [showEditEducationModal, setShowEditEducationModal] = useState(false);
  const [school, setSchool] = useState("");
  const [dataSchoolFrom, setDataSchoolFrom] = useState("");
  const [dataSchoolTo, setDataSchoolTo] = useState("");
  const [degree, setDegree] = useState("");
  const [areaOfStudy, setAreaOfStudy] = useState("");
  const [descEducation, setDescEducation] = useState("");
  const [editEducationIndex, setEditEducationIndex] = useState(null);
  const [userEducation, setUserEducation] = useState([]);

  const handleAddEducation = () => {
    if (!school || !dataSchoolFrom || !dataSchoolTo) {
      toast.error("Please enter all required fields.");
      return;
    }

    const newEducation = {
      school,
      dataSchoolFrom,
      dataSchoolTo,
      degree,
      areaOfStudy,
      descEducation,
    };

    setUserEducation([...userEducation, newEducation]);

    setShowAddEducationModal(false);
    setSchool("");
    setDataSchoolFrom("");
    setDataSchoolTo("");
    setDegree("");
    setAreaOfStudy("");
    setDescEducation("");
  };

  const handleEditEducation = () => {
    if (!school || !dataSchoolFrom || !dataSchoolTo) {
      toast.error("Please enter all required fields.");
      return;
    }

    const updatedEducation = [...userEducation];
    updatedEducation[editEducationIndex] = {
      school,
      dataSchoolFrom,
      dataSchoolTo,
      degree,
      areaOfStudy,
      descEducation,
    };

    setUserEducation(updatedEducation);

    setShowEditEducationModal(false);
    setSchool("");
    setDataSchoolFrom("");
    setDataSchoolTo("");
    setDegree("");
    setAreaOfStudy("");
    setDescEducation("");
    setEditEducationIndex(null);
  };

  const handleDeleteEducation = (index) => {
    const updatedEducation = [...userEducation];
    updatedEducation.splice(index, 1);
    setUserEducation(updatedEducation);
    toast.success("Education deleted successfully.");
  };

  const openEditEducationModal = (index) => {
    setEditEducationIndex(index);
    setSchool(userEducation[index].school);
    setDataSchoolFrom(userEducation[index].dataSchoolFrom);
    setDataSchoolTo(userEducation[index].dataSchoolTo);
    setDegree(userEducation[index].degree);
    setAreaOfStudy(userEducation[index].areaOfStudy);
    setDescEducation(userEducation[index].descEducation);

    setShowEditEducationModal(true);
  };

  // Manage Skills
  const [skills, setSkills] = useState([]);
  const [showEditSkillsModal, setShowEditSkillsModal] = useState(false);
  const [newSkill, setNewSkill] = useState("");


  useEffect(() => {
    if (
      currentUser &&
      currentUser.userProfile &&
      currentUser.userProfile.length > 0
    ) {
      const userSkills = currentUser.userProfile[0].userSkills.map(
        (skillObj) => skillObj.skill
      );
      setSkills(userSkills);
    }
  }, [currentUser]);

  const handleAddSkill = async (e) => {
    e.preventDefault();
    if (newSkill.trim()) {
      const updatedSkills = [...skills, newSkill.trim()];

      try {
        const userUpdated = {
          ...currentUser,
          userProfile: [
            {
              ...currentUser.userProfile[0],
              userSkills: updatedSkills.map((skill) => ({ skill })),
            },
          ],
        };

        const res = await newRequest.put(`/users/${currentUser._id}`, userUpdated);
        updateUser(res.data);

        setSkills(updatedSkills);
        setNewSkill("");
        setShowEditSkillsModal(false);
        toast.success("Skill added successfully");
      } catch (err) {
        console.log(err);
        setError(err.response?.data?.message);
        toast.error(error);
      }
    }
  };
  const handleDeleteSkill = async (skillToDelete) => {
    const updatedSkills = skills.filter((skill) => skill !== skillToDelete);

    try {
      const userUpdated = {
        ...currentUser,
        userProfile: [
          {
            ...currentUser.userProfile[0],
            userSkills: updatedSkills.map((skill) => ({ skill })),
          },
        ],
      };

      const res = await newRequest.put(`/users/${currentUser._id}`, userUpdated);
      updateUser(res.data);

      setSkills(updatedSkills);
      toast.success("Skill deleted successfully");
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message);
      toast.error(error);
    }
  };
  //Work & Experience
  const [showAddWorkModal, setShowAddWorkModal] = useState(false);
  const [showEditWorkModal, setShowEditWorkModal] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [dateWorkFrom, setDateWorkFrom] = useState("");
  const [dateWorkTo, setDateWorkTo] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [descWork, setDescWork] = useState("");
  const [editWorkIndex, setEditWorkIndex] = useState(null);
  const [workExperience, setWorkExperience] = useState([]);

  const handleAddWork = () => {
    if (!companyName || !dateWorkFrom || !dateWorkTo) {
      toast.error("Please enter all required fields.");
      return;
    }

    const newWork = {
      companyName,
      dateWorkFrom,
      dateWorkTo,
      jobRole,
      descWork,
    };

    setWorkExperience([...workExperience, newWork]);

    setShowAddWorkModal(false);
    setCompanyName("");
    setDateWorkFrom("");
    setDateWorkTo("");
    setJobRole("");
    setDescWork("");
  };

  const handleEditWork = () => {
    if (!companyName || !dateWorkFrom || !dateWorkTo) {
      toast.error("Please enter all required fields.");
      return;
    }

    const updatedWork = [...workExperience];
    updatedWork[editWorkIndex] = {
      companyName,
      dateWorkFrom,
      dateWorkTo,
      jobRole,
      descWork,
    };

    setWorkExperience(updatedWork);

    setShowEditWorkModal(false);
    setCompanyName("");
    setDateWorkFrom("");
    setDateWorkTo("");
    setJobRole("");
    setDescWork("");
    setEditWorkIndex(null);
  };

  const handleDeleteWork = (index) => {
    const updatedWork = [...workExperience];
    updatedWork.splice(index, 1);
    setWorkExperience(updatedWork);
    toast.success("Work experience deleted successfully.");
  };

  const openEditWorkModal = (index) => {
    setEditWorkIndex(index);
    setCompanyName(workExperience[index].companyName);
    setDateWorkFrom(workExperience[index].dateWorkFrom);
    setDateWorkTo(workExperience[index].dateWorkTo);
    setJobRole(workExperience[index].jobRole);
    setDescWork(workExperience[index].descWork);

    setShowEditWorkModal(true);
  };

  // protfolio project
  const [products, setProducts] = useState([]);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectRole, setProjectRole] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  const [editingProjectIndex, setEditingProjectIndex] = useState(null);

  const handleAddProject = async () => {
    if (!projectTitle || !projectDescription || images.length === 0) {
      toast.error(
        "Please enter all required fields and upload at least one image."
      );
      return;
    }

    try {
      setUploading(true);

      const uploadedImageURLs = await Promise.all(
        images.map(async (image) => {
          if (image instanceof File) {
            const url = await upload(image);
            return url;
          }
          return image; // If it's already a URL, return it as is
        })
      );

      const newProject = {
        title: projectTitle,
        role: projectRole,
        description: projectDescription,
        images: uploadedImageURLs,
        coverImage: uploadedImageURLs[coverImage] || uploadedImageURLs[0],
      };

      setProducts([...products, newProject]);

      setShowAddProjectModal(false);
      setProjectTitle("");
      setProjectRole("");
      setProjectDescription("");
      setImages([]);
      setCoverImage(null);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Error uploading images. Please try again.");
      setUploading(false);
    }
  };

  const handleEditProject = async () => {
    if (!projectTitle || !projectDescription || images.length === 0) {
      toast.error(
        "Please enter all required fields and upload at least one image."
      );
      return;
    }

    try {
      setUploading(true);

      const uploadedImageURLs = await Promise.all(
        images.map(async (image) => {
          if (image instanceof File) {
            const url = await upload(image);
            return url;
          }
          return image.url; // If it's already a URL, return the URL
        })
      );

      const updatedProject = {
        ...products[editingProjectIndex],
        title: projectTitle,
        role: projectRole,
        description: projectDescription,
        images: uploadedImageURLs,
        coverImage: uploadedImageURLs[coverImage] || uploadedImageURLs[0],
      };

      const updatedProducts = [...products];
      updatedProducts[editingProjectIndex] = updatedProject;
      setProducts(updatedProducts);

      setShowEditProjectModal(false);
      setEditingProjectIndex(null);
      setProjectTitle("");
      setProjectRole("");
      setProjectDescription("");
      setImages([]);
      setCoverImage(null);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading images:", error);
      toast.error("Error uploading images. Please try again.");
      setUploading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) =>
        file.size <= 10 * 1024 * 1024 &&
        (file.type === "image/jpeg" || file.type === "image/png")
    );

    if (validFiles.length + images.length > 20) {
      toast.error("You can upload up to 20 images.");
    } else {
      setImages([...images, ...validFiles]);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    if (index === coverImage) {
      setCoverImage(null);
    }
  };

  const handleSetCoverImage = (index) => {
    setCoverImage(index);
  };

  const openEditProjectModal = (index) => {
    const project = products[index];
    setProjectTitle(project.title);
    setProjectRole(project.role);
    setProjectDescription(project.description);
    setImages(project.images.map((url) => ({ url })));
    setCoverImage(project.images.indexOf(project.coverImage));
    setEditingProjectIndex(index);
    setShowEditProjectModal(true);
  };

  const handleDeleteProject = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  //Occupation title
  const [showEditOccupationTitleModal, setShowEditOccupationTitleModal] =
    useState(false);
  const [occupationTitle, setOccupationTitle] = useState(
    "Full Stack Developer"
  );
  const [tempOccupationTitle, setTempOccupationTitle] =
    useState(occupationTitle);

  // Function to handle occupation title update
  const handleEditOccupationTitle = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { userOccupation } = Object.fromEntries(formData);

    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        userOccupation,
      });
      updateUser(res.data);
      setShowEditOccupationTitleModal(false);
      navigate("/editmyprofile");
      toast.success("Occupation title updated successfully");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      toast.error(error);
    }
  };

  // budget section
  const [showEditBudgetModal, setShowEditBudgetModal] = useState(false);
  const [hourlyRateFrom, setHourlyRateFrom] = useState(15);
  const [hourlyRateTo, setHourlyRateTo] = useState(30);

  // Temporary state for modal
  const [tempHourlyRateFrom, setTempHourlyRateFrom] = useState(hourlyRateFrom);
  const [tempHourlyRateTo, setTempHourlyRateTo] = useState(hourlyRateTo);

  const openEditBudgetModal = () => {
    setTempHourlyRateFrom(hourlyRateFrom);
    setTempHourlyRateTo(hourlyRateTo);
    setShowEditBudgetModal(true);
  };

  const handleSaveBudget = () => {
    setHourlyRateFrom(tempHourlyRateFrom);
    setHourlyRateTo(tempHourlyRateTo);
    toast.success("Hourly Rate updated successfully");
    setShowEditBudgetModal(false);
  };

  //profile description
  const [showEditProfileDescriptionModal, setShowEditProfileDescriptionModal] =
    useState(false);

  const handleEditProfileDescription = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { desc } = Object.fromEntries(formData);

    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        desc,
      });
      updateUser(res.data);
      setShowEditProfileDescriptionModal(false);
      navigate("/editmyprofile");
      toast.success("Profile description updated successfully");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      toast.error(error);
    }
  };

  // Hours per week section
  const [showEditAvailabilityModal, setShowEditAvailabilityModal] =
    useState(false);
  const [availability, setAvailability] = useState("More than 30 hrs/week");
  const [tempAvailability, setTempAvailability] = useState(availability);

  const handleEditAvailability = () => {
    setAvailability(tempAvailability);
    toast.success("Availability updated successfully");
    setShowEditAvailabilityModal(false);
  };

  //profile image
  const [profileImage, setProfileImage] = useState(
    "/src/assets/images/avatar/Image.jpg"
  );
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [newProfileImage, setNewProfileImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Online/offline status state
  const [isOnline, setIsOnline] = useState(currentUser.isOnline);

  const handleImageUploadProfile = async (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "image/jpeg" || file.type === "image/png") &&
      file.size <= 10 * 1024 * 1024
    ) {
      setNewProfileImage(file);
    } else {
      toast.error("Please upload a valid image (JPEG/PNG) under 10MB.");
    }
  };

  const handleSaveProfileImage = async (e) => {
    e.preventDefault();

    try {
      setUploading(true);
      const imageUrl = await upload(newProfileImage);
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        isOnline,
        img: imageUrl,
      });
      updateUser(res.data);
      setShowEditProfileModal(false);
      setNewProfileImage(null);
      navigate("/editmyprofile");
      toast.success("updated profile successfully");
    } catch (err) {
      console.log("Error uploading image:", err);
      setError(err.response.data.message);
      toast.error(error);
      toast.error("Error uploading image. Please try again.");
    } finally {
      setUploading(false);
    }
  };
  const renderContent = () => {
    switch (activeSection) {
      case "Overview":
        return (
          <>
            {/* Profile Overview Section */}
            <div className="mb-6 border-b border-[#D9D9D9] pb-7">
              <div className="flex items-center justify-between flex-wrap mb-3">
                <div className="flex flex-1 items-center justify-start">
                  <h3 className="text-2xl font-medium mr-2">
                    <input
                      type="text"
                      className="flex-1 z-10 w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 border-none outline-none text-xl font-medium overflow-ellipsis whitespace-nowrap"
                      defaultValue={currentUser.userOccupation}
                      value={currentUser.userOccupation}
                      readOnly
                    />
                  </h3>
                  <button
                    onClick={() => {
                      setShowEditOccupationTitleModal(true);
                    }}
                    className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                  >
                    <MdOutlineEdit />
                  </button>
                </div>
                <div className="flex items-center mb-4 flex-wrap">
                  <span className="font-medium text-lg">
                    ${hourlyRateFrom}.00 - ${hourlyRateTo}.00 /hr
                  </span>
                  <button
                    onClick={openEditBudgetModal}
                    className="mx-2 text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                  >
                    <MdOutlineEdit />
                  </button>
                  <button className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2">
                    <IoLink />
                  </button>
                </div>
              </div>
              <div className="flex items-start flex-wrap mb-4">
                <p className="text-gray-600 flex-1">{currentUser.desc}</p>
                <button
                  onClick={() => {
                    setShowEditProfileDescriptionModal(true);
                  }}
                  className="mx-2 text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                >
                  <MdOutlineEdit />
                </button>
              </div>
            </div>

            {/* Skills section */}
            <div className="mb-6 border-b border-[#D9D9D9] pb-7">
              <label className="block text-gray-800 text-2xl font-medium mb-3">
                Skills
              </label>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center py-0 px-[14px] bg-gray-200 text-sm text-[#000] rounded-full border"
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
          </>
        );
      case "Portfolio":
        return (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {products.map((item, i) => (
                <div key={i}>
                  <div className="relative group">
                    <div className="overflow-hidden relative text-transparent transition-all duration-300 ease-linear w-full align-middle">
                      <img
                        height={247}
                        width={311}
                        className="w-full hover:scale-110 transform transition-all duration-300 ease-linear hover:rotate-3 rounded-2xl shadow-xl"
                        src={item.coverImage}
                      />
                    </div>
                    <div className="absolute top-0 right-0 w-full h-full space-x-4 group-hover:bg-[#17171795] px-2 py-2 items-center justify-center hidden group-hover:flex cursor-pointer z-10 rounded-2xl shadow-xl">
                      <button
                        onClick={() => openEditProjectModal(i)}
                        className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-xl p-[6px] hover:bg-[#0E9F6E] hover:text-white bg-white"
                      >
                        <MdOutlineEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(i)}
                        className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#0E9F6E] text-xl p-[6px] hover:bg-[#0E9F6E] hover:text-white bg-white"
                      >
                        <GoTrash />
                      </button>
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold mt-2 text-[#0E9F6E] overflow-hidden overflow-ellipsis whitespace-nowrap">
                    {item.title}
                  </h4>
                </div>
              ))}
              <div className="flex items-center justify-center border-[#D9D9D9] border-2 p-4 cursor-pointer w-64 h-48 bg-[#F1F1F1] rounded-lg text-sm">
                <div
                  onClick={() => setShowAddProjectModal(true)}
                  className="w-full h-full text-center cursor-pointer flex flex-col items-center justify-center"
                >
                  <MdOutlineAddCircleOutline size={38} className="mb-2" />
                  <span>
                    Add a new portfolio project{" "}
                    <span className="text-[#0E9F6E] cursor-pointer font-medium">
                      here
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </>
        );
      case "Services":
        return (
          <>
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {product.map((item, i) => (
                <div key={i} className="relative group">
                  <PopularServiceCard data={item} className="rounded-4xl" />
                  <div className="absolute top-0 right-0 w-full h-[41%] space-x-4 bg-[#17171795] px-2 py-2 items-center justify-center hidden group-hover:flex cursor-pointer z-10 shadow-sm">
                    <button className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-xl p-[6px] hover:bg-[#0E9F6E] hover:text-white  bg-white">
                      <MdOutlineEdit />
                    </button>
                    <button className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#0E9F6E] text-xl p-[6px] hover:bg-[#0E9F6E] hover:text-white bg-white">
                      <GoTrash />
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-center border-[#D9D9D9] border-2 p-4 cursor-pointer w-64 h-48 bg-[#F1F1F1] rounded-lg text-sm">
                <Link
                  to="/createservice"
                  className="w-full h-full text-center cursor-pointer flex flex-col items-center justify-center"
                >
                  <MdOutlineAddCircleOutline size={38} className="mb-2" />
                  <span>
                    Add a new service{" "}
                    <span className="text-[#0E9F6E] cursor-pointer font-medium">
                      here
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </>
        );
      case "Resume":
        return (
          <>
            {/* Education Section */}
            <div className="mt-6 w-full border-b border-[#D9D9D9]">
              <div className="flex justify-between items-center w-full mb-5">
                <h2 className="text-lg md:text-xl font-bold text-[#333]">
                  Education
                </h2>
                <button
                  onClick={() => setShowAddEducationModal(true)}
                  className="text-[#0E9F6E] flex items-center justify-center border rounded-full border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white"
                >
                  <PiPlusBold />
                </button>
              </div>
              <div className="w-full mx-auto mt-5">
                {userEducation.length > 0 ? (
                  <div>
                    {userEducation.map((edu, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <div className="relative w-full">
                          <div className="pl-[50px] relative">
                            <div className="bg-[#f1fcfa] rounded-full text-[11px] font-bold h-[30px] leading-[30px] left-0 absolute text-center w-[30px] text-[#5bbb7b] before:absolute before:content-[''] before:border-l before:border-dashed before:border-[#5bbb7b] before:bottom-0 before:h-[140px] before:left-[15px] before:top-[40px] before:w-[1px]">
                              {/* Cool animation here */}
                              <div className="animation-circle"></div>
                            </div>
                            <div className="relative mb-[40px]">
                              <div className="xl-b:absolute xl-b:right-0 mb-[15px] relative">
                                <div className="flex flex-wrap">
                                  <button
                                    className="bg-[#e0f4f1] rounded-[4px] text-[#0E9F6E] h-[40px] leading-[45px] text-center w-[40px] mr-2 cursor-pointer transition-all duration-300 ease-linear flex justify-center items-center"
                                    id="edit"
                                    onClick={() =>
                                      openEditEducationModal(index)
                                    }
                                  >
                                    <Tooltip
                                      anchorSelect="#edit"
                                      className="ui-tooltip"
                                    >
                                      Edit
                                    </Tooltip>
                                    <MdOutlineEdit className="text-xl" />
                                  </button>
                                  <button
                                    className="bg-[#e0f4f1] rounded-[4px] text-[#0E9F6E] h-[40px] leading-[45px] text-center w-[40px] cursor-pointer transition-all duration-300 ease-linear flex justify-center items-center"
                                    id="delete"
                                    onClick={() => handleDeleteEducation(index)}
                                  >
                                    <Tooltip
                                      anchorSelect="#delete"
                                      className="ui-tooltip"
                                    >
                                      Delete
                                    </Tooltip>
                                    <GoTrash className="text-xl" />
                                  </button>
                                </div>
                              </div>
                              <span className="bg-[#e0f4f1] rounded-full inline-block text-[13px] py-[5px] px-[20px] text-[#222] font-medium leading-[28px]">
                                {edu.dataSchoolFrom} - {edu.dataSchoolTo}
                              </span>
                              <h5 className="mt-4 text-[17px] font-medium text-[#222] leading-[1.3125] mb-2">
                                {edu.degree}
                              </h5>
                              <h6 className="text-thm text-[#5bbb7b] text-[15px] font-medium leading-[1.3125] mt-0 mb-2">
                                {edu.school}
                              </h6>
                              <p className="my-0 mr-[15px] text-[#6b7177] leading-[1.85] font-normal">
                                {edu.descEducation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No education added</p>
                )}
              </div>
            </div>

            {/* Work & Experience Section */}
            <div className="mt-6 w-full border-b border-[#D9D9D9]">
              <div className="flex justify-between items-center w-full mb-5">
                <h2 className="text-lg md:text-xl font-bold text-[#333]">
                  Work & Experience
                </h2>
                <button
                  onClick={() => setShowAddWorkModal(true)}
                  className="text-[#0E9F6E] flex items-center justify-center border rounded-full border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white"
                >
                  <PiPlusBold />
                </button>
              </div>
              <div className="w-full mx-auto mt-5">
                {workExperience.length > 0 ? (
                  <div>
                    {workExperience.map((wrk, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center mb-2"
                      >
                        <div className="relative w-full">
                          <div className="pl-[50px] relative">
                            <div className="bg-[#0E9F6E] rounded-full text-[11px] font-bold h-[30px] leading-[30px] left-0 absolute text-center w-[30px] text-[#5bbb7b] before:absolute before:content-[''] before:border-l before:border-dashed before:border-[#5bbb7b] before:bottom-0 before:h-[140px] before:left-[15px] before:top-[40px] before:w-[1px]">
                              {/* Cool animation here */}
                              <div className="animation-circle2"></div>
                            </div>
                            <div className="relative mb-[40px]">
                              <div className="xl-b:absolute xl-b:right-0 mb-[15px] relative">
                                <div className="flex flex-wrap">
                                  <button
                                    className="bg-[#e0f4f1] rounded-[4px] text-[#0E9F6E] h-[40px] leading-[45px] text-center w-[40px] mr-2 cursor-pointer transition-all duration-300 ease-linear flex justify-center items-center"
                                    id={`edit-${index}`}
                                    onClick={() => openEditWorkModal(index)}
                                  >
                                    <Tooltip
                                      anchorSelect={`#edit-${index}`}
                                      className="ui-tooltip"
                                    >
                                      Edit
                                    </Tooltip>
                                    <MdOutlineEdit className="text-xl" />
                                  </button>
                                  <button
                                    className="bg-[#e0f4f1] rounded-[4px] text-[#0E9F6E] h-[40px] leading-[45px] text-center w-[40px] cursor-pointer transition-all duration-300 ease-linear flex justify-center items-center"
                                    id={`delete-${index}`}
                                    onClick={() => handleDeleteWork(index)}
                                  >
                                    <Tooltip
                                      anchorSelect={`#delete-${index}`}
                                      className="ui-tooltip"
                                    >
                                      Delete
                                    </Tooltip>
                                    <GoTrash className="text-xl" />
                                  </button>
                                </div>
                              </div>
                              <span className="bg-[#e0f4f1] rounded-full inline-block text-[13px] py-[5px] px-[20px] text-[#222] font-medium leading-[28px]">
                                {wrk.dateWorkFrom} - {wrk.dateWorkTo}
                              </span>
                              <h5 className="mt-4 text-[17px] font-medium text-[#222] leading-[1.3125] mb-2">
                                {wrk.jobRole}
                              </h5>
                              <h6 className="text-thm text-[#5bbb7b] text-[15px] font-medium leading-[1.3125] mt-0 mb-2">
                                {wrk.companyName}
                              </h6>
                              <p className="my-0 mr-[15px] text-[#6b7177] leading-[1.85] font-normal">
                                {wrk.descWork}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No Work added</p>
                )}
              </div>
            </div>
          </>
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-lg px-6">
        <div className="p-6">
          {/* Profile Overview */}
          <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={currentUser.img || "/src/assets/images/avatar/Image.jpg"}
                  alt="Profile"
                  className="w-28 h-28 rounded-full mr-4"
                />
                <span
                  className={`absolute top-[8px] left-[8px] w-4 h-4 rounded-full border-[3px] !border-white ${
                    currentUser.isOnline ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
                <button
                  className="absolute bottom-0 right-0 text-[#0E9F6E] flex items-center justify-center border rounded-full border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                  onClick={() => setShowEditProfileModal(true)}
                >
                  <MdOutlineEdit />
                </button>
              </div>
              <div>
                <h2 className="text-4xl font-semibold mb-4">
                  {currentUser.fname} {currentUser.lname[0]}.
                </h2>
                <div className="text-gray-600 flex items-center">
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  <span>
                    {currentUser.state} {currentUser.country} – 4:42 pm local
                    time
                  </span>
                  {/* <span>Ain Defla, Algeria – 4:42 pm local time</span> */}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-[#0E9F6E] border border-[#0E9F6E] rounded-full py-2 px-4 mr-2">
                See public view
              </button>
              <a
                href="/settings/profile-settings"
                className="bg-[#0E9F6E] text-white rounded-full py-2 px-4"
              >
                Profile settings
              </a>
            </div>
          </div>

          {/* Profile Details */}
          <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7">
            <div className="flex">
              {/* Left Column */}
              <div className="w-1/4 pr-6 border-r border-[#D9D9D9]">
                <div className="mb-6 border-b pb-7 border-[#D9D9D9] ">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium">View profile</h3>
                    <a
                      className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                      href="/settings/profile-settings"
                    >
                      <MdOutlineEdit />
                    </a>
                  </div>
                  <div className="bg-[#0E9F6E] text-white font-medium flex justify-between items-center text-left py-2 rounded-lg px-4">
                    <h4>All work</h4>
                    <MdKeyboardArrowRight />
                  </div>
                </div>

                {/* Hours per week section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Hours per week</h3>
                    <button
                      onClick={() => {
                        setTempAvailability(availability);
                        setShowEditAvailabilityModal(true);
                      }}
                      className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] "
                    >
                      <MdOutlineEdit />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span>{availability}</span>
                  </div>
                </div>

                {/* languages Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-medium ">Languages</h3>
                    <button
                      onClick={() => setShowAddLanguageModal(true)}
                      className="text-[#0E9F6E] flex items-center justify-center border rounded-full border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <div className="pl-1 w-full max-w-[450px] mx-auto mt-1">
                    {userLanguages.length > 0 ? (
                      <div className="text-sm w-full ">
                        {userLanguages.map((lang, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center mb-2"
                          >
                            <div>
                              <p className="font-semibold">
                                {lang.language}:{" "}
                                <span className="text-[#676767] font-normal">
                                  {lang.proficiency}
                                </span>
                              </p>
                            </div>
                            <div className="flex items-center">
                              <button
                                onClick={() => openEditLanguageModal(index)}
                                className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white mr-2"
                              >
                                <MdOutlineEdit />
                              </button>
                              <button
                                onClick={() => handleDeleteLanguage(index)}
                                className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white"
                              >
                                <GoTrash />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>No languages added</p>
                    )}
                  </div>
                </div>

                {/* Education Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-medium ">Education</h3>
                    <button
                      onClick={() => setShowAddEducationModal(true)}
                      className="text-[#0E9F6E] flex items-center justify-center border rounded-full border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white"
                    >
                      <PiPlusBold />
                    </button>
                  </div>
                  <div className="pl-1 w-full max-w-[450px] mx-auto mt-1">
                    <div className="w-full mx-auto">
                      {userEducation.length > 0 ? (
                        <div>
                          {userEducation.map((edu, index) => (
                            <div
                              key={index}
                              className="flex justify-between flex-wrap items-center mb-2 pr-2"
                            >
                              <div className="flex flex-col w-[80%]">
                                <div className="flex flex-wrap w-full text-md">
                                  <p className="font-semibold">
                                    {edu.school}:{" "}
                                  </p>
                                  <p className="pl-1">{edu.degree}</p>
                                </div>
                                <p className="text-[#676767] font-normal">
                                  {edu.dataSchoolFrom} - {edu.dataSchoolTo}
                                </p>
                              </div>
                              <div className="relative w-[20%]">
                                <div className="flex items-center">
                                  <button
                                    onClick={() =>
                                      openEditEducationModal(index)
                                    }
                                    className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white mr-2"
                                  >
                                    <MdOutlineEdit />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteEducation(index)}
                                    className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#0E9F6E] p-1 hover:bg-[#0E9F6E] hover:text-white"
                                  >
                                    <GoTrash />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p>No education added</p>
                      )}
                    </div>
                  </div>

                  {/* <div className="flex items-center mb-2">
                    <span>Codecademy: Front-End Engineer 2022-2023</span>
                    <button className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2">
                      <MdOutlineEdit />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span>
                      University of Djillali Bounaama: Bachelor of Computer
                      Applications 2020-2024
                    </span>
                    <button className="text-[#0E9F6E] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2">
                      <MdOutlineEdit />
                    </button>
                  </div> */}
                </div>

                {/* Linked Accounts Section */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Linked accounts</h3>

                  <div className="bg-[#F9F9F9] p-4 rounded-2xl mb-6">
                    <div className="flex  mb-4 flex-col border-b border-[#D9D9D9] pb-4">
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-lg font-medium">
                            GitHub
                            <span className="text-xs ml-2 text-gray-500">
                              Since 2022
                            </span>
                            <div className="text-sm text-gray-600 mt-0	">
                              Abdelkarim Douadjia
                            </div>
                          </div>

                          <img
                            src="/src/assets/images/avatar/Image.jpg"
                            alt="img_github"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>

                        <a
                          href="https://github.com/yourprofile"
                          className="text-gray-500 flex items-center mt-5 mb-3"
                        >
                          <IoLink />
                          <span className="ml-2 text-[#0E9F6E]">
                            View profile
                          </span>
                        </a>
                        <div className=" text-gray-500 flex items-center">
                          <CgProfile />{" "}
                          <span className="ml-2">75 followers</span>
                        </div>
                      </div>
                      <button className="flex items-center justify-start mt-3 text-gray-500 underline">
                        Unlink
                      </button>
                    </div>

                    <div className="flex  mb-4 flex-col">
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <div className="text-lg font-medium">
                            StackOverflow
                            <div className="text-sm text-gray-600 mt-0	">
                              Abdelkarim DOUADJIA
                            </div>
                          </div>

                          <img
                            src="/src/assets/images/avatar/Image.jpg"
                            alt="img_github"
                            className="w-8 h-8 rounded-full"
                          />
                        </div>

                        <a
                          href="https://github.com/yourprofile"
                          className="text-gray-500 flex items-center mt-5"
                        >
                          <IoLink />
                          <span className="ml-2 text-[#0E9F6E]">
                            View profile
                          </span>
                        </a>
                      </div>
                      <button className="flex items-center justify-start mt-3 text-gray-500 underline">
                        Unlink
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-3/4 pl-6">
                <div className="flex justify-around mb-6 border-[#D9D9D9] border-b">
                  <button
                    className={`px-4 py-2 ${
                      activeSection === "Overview"
                        ? "text-[#0E9F6E] border-b border-[#0E9F6E] font-medium z-10"
                        : "text-gray-[#D9D9D9]"
                    }`}
                    onClick={() => setActiveSection("Overview")}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeSection === "Portfolio"
                        ? "text-[#0E9F6E] border-b border-[#0E9F6E] font-medium z-10"
                        : "text-gray-[#D9D9D9]"
                    }`}
                    onClick={() => setActiveSection("Portfolio")}
                  >
                    Portfolio
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeSection === "Services"
                        ? "text-[#0E9F6E] border-b border-[#0E9F6E] font-medium z-10"
                        : "text-gray-[#D9D9D9]"
                    }`}
                    onClick={() => setActiveSection("Services")}
                  >
                    Services
                  </button>
                  <button
                    className={`px-4 py-2 ${
                      activeSection === "Resume"
                        ? "text-[#0E9F6E] border-b border-[#0E9F6E] font-medium z-10"
                        : "text-gray-[#D9D9D9]"
                    }`}
                    onClick={() => setActiveSection("Resume")}
                  >
                    Resume
                  </button>
                </div>
                <div>{renderContent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Language Modal */}
      {showAddLanguageModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Add Language</h3>
              <button
                onClick={() => setShowAddLanguageModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <label>Language</label>
              <Select
                options={getAvailableLanguages()}
                value={selectedLanguage}
                onChange={setSelectedLanguage}
                styles={customStyles}
                className=" w-full"
              />
            </div>
            <div className="mb-4">
              <label>Proficiency</label>
              <Select
                options={proficiencyOptions}
                value={selectedProficiency}
                styles={customStyles}
                onChange={setSelectedProficiency}
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAddLanguageModal(false)}
                className="px-4 py-2  mr-2 text-[#0E9F6E] "
              >
                Cancel
              </button>
              <button
                onClick={handleAddLanguage}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Language Modal */}
      {showEditLanguageModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Edit Language</h3>
              <button
                onClick={() => setShowEditLanguageModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>
            <div className="mb-4">
              <label>Proficiency</label>
              <Select
                options={proficiencyOptions}
                value={selectedProficiency}
                onChange={setSelectedProficiency}
                styles={customStyles}
                className="w-full"
              />
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditLanguageModal(false)}
                className="px-4 py-2  mr-2 text-[#0E9F6E] "
              >
                Cancel
              </button>
              <button
                onClick={handleEditLanguage}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Education Modal */}
      {showAddEducationModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Add education</h3>
              <button
                onClick={() => setShowAddEducationModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-x-auto min-h-[400px]">
              <div className="mb-7">
                <label>School</label>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
             focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Djillali Bounama University"
                />
              </div>
              <div className="flex justify-between flex-wrap w-full text-left mb-7">
                {/* Date Start Input */}
                <div className="w-[44%] mt-1 leading-normal">
                  <label htmlFor="date_start">Dates Attended (Optional)</label>
                  <select
                    id="date_start"
                    name="date_start"
                    className="block w-full input focus:outline-none focus:border-[#2525258a]  focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    value={dataSchoolFrom}
                    onChange={(e) => setDataSchoolFrom(e.target.value)}
                  >
                    <option value="">from</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-[44%] mt-1 leading-normal">
                  <label
                    htmlFor="date_end"
                    className="text-[#344054] bg-[#ffffff] text-xs font-normal mb-1 inline-block"
                  ></label>
                  <select
                    id="date_end"
                    name="date_end"
                    className="block w-full input focus:outline-none focus:border-[#2525258a] focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    onChange={(e) => setDataSchoolTo(e.target.value)}
                    value={dataSchoolTo}
                  >
                    <option value="">To (or expected graduation year)</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between flex-wrap w-full text-left mb-7">
                <div className="w-[44%] mt-1 leading-normal">
                  <label className="mb-4">Degree (Optional)</label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
             focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3]"
                    placeholder="Ex: Master of Philosophy (MPhil)"
                  />
                </div>

                <div className="w-[44%] mt-1 leading-normal">
                  <label>Area of Study (Optional)</label>
                  <input
                    type="text"
                    value={areaOfStudy}
                    onChange={(e) => setAreaOfStudy(e.target.value)}
                    className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
             focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3]"
                    placeholder="Ex: Computer Science"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full text-left !h-24">
                <label htmlFor="descEducation">Description (Optional)</label>
                <textarea
                  name="descEducation"
                  id="descEducation"
                  value={descEducation}
                  onChange={(e) => setDescEducation(e.target.value)}
                  className="block w-full !h-96 input focus:outline-none focus:border-[#2525258a] bg-white focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] !p-2 !h-24`}"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAddEducationModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEducation}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Education Modal */}
      {showEditEducationModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50 ">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Edit education</h3>
              <button
                onClick={() => setShowEditEducationModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-x-auto min-h-[400px]">
              <div className="mb-7">
                <label>School</label>
                <input
                  type="text"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
             focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Djillali Bounama University"
                  required
                />
              </div>
              <div className="flex justify-between flex-wrap w-full text-left mb-7">
                {/* Date Start Input */}
                <div className="w-[44%] mt-1 leading-normal">
                  <label htmlFor="date_start">Dates Attended (Optional)</label>
                  <select
                    id="date_start"
                    name="date_start"
                    className="block w-full input focus:outline-none focus:border-[#2525258a]  focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    value={dataSchoolFrom}
                    onChange={(e) => setDataSchoolFrom(e.target.value)}
                  >
                    <option value="">from</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-[44%] mt-1 leading-normal">
                  <label
                    htmlFor="date_end"
                    className="text-[#344054] bg-[#ffffff] text-xs font-normal mb-1 inline-block"
                  ></label>
                  <select
                    id="date_end"
                    name="date_end"
                    className="block w-full input focus:outline-none focus:border-[#2525258a] focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    onChange={(e) => setDataSchoolTo(e.target.value)}
                    value={dataSchoolTo}
                  >
                    <option value="">To (or expected graduation year)</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-between flex-wrap w-full text-left mb-7">
                <div className="w-[44%] mt-1 leading-normal">
                  <label className="mb-4">Degree (Optional)</label>
                  <input
                    type="text"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                    className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
             focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3]"
                    placeholder="Ex: Master of Philosofy (MPhil)"
                  />
                </div>

                <div className="w-[44%] mt-1 leading-normal">
                  <label>Area of Study (Optional)</label>
                  <input
                    type="text"
                    value={areaOfStudy}
                    onChange={(e) => setAreaOfStudy(e.target.value)}
                    className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
             focus-within:outline-none focus-within:border  placeholder:text-sm placeholder:text-[#BEB5C3]"
                    placeholder="Ex: Computer Science"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full text-left !h-24">
                <label htmlFor="descEducation">Description (Optional)</label>
                <textarea
                  name="descEducation"
                  id="descEducation"
                  value={descEducation}
                  onChange={(e) => setDescEducation(e.target.value)}
                  className="block w-full !h-96 input focus:outline-none focus:border-[#2525258a] bg-white focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] !p-2 !h-24`}"
                  placeholder="Description"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditEducationModal(false)}
                className="px-4 py-2  mr-2 text-[#0E9F6E] "
              >
                Cancel
              </button>
              <button
                onClick={handleEditEducation}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Skills Modal Done */}
      {showEditSkillsModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50 ">
          <form
            onSubmit={handleAddSkill}
            className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]"
          >
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
                  //defaultValue={skills}
                  name="userSkills"
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
                type="submit"
                className="px-5 py-2 !bg-[#0E9F6E] !text-white rounded-3xl hover:!bg-[#046c4e]"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Add Work Modal */}
      {showAddWorkModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Add Work</h3>
              <button
                onClick={() => setShowAddWorkModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-y-auto max-h-[400px]">
              <div className="mb-7">
                <label>Company name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Google"
                />
              </div>
              <div className="flex justify-between flex-wrap w-full text-left mb-7">
                {/* Date Start Input */}
                <div className="w-[44%] mt-1 leading-normal">
                  <label htmlFor="date_start">Dates Attended (Optional)</label>
                  <select
                    id="date_start"
                    name="date_start"
                    className="block w-full input focus:outline-none focus:border-[#2525258a] focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    value={dateWorkFrom}
                    onChange={(e) => setDateWorkFrom(e.target.value)}
                  >
                    <option value="">from</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Date End Input */}
                <div className="w-[44%] mt-1 leading-normal">
                  <label
                    htmlFor="date_end"
                    className="text-[#344054] bg-[#ffffff] text-xs font-normal mb-1 inline-block"
                  ></label>
                  <select
                    id="date_end"
                    name="date_end"
                    className="block w-full input focus:outline-none focus:border-[#2525258a] focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    value={dateWorkTo}
                    onChange={(e) => setDateWorkTo(e.target.value)}
                  >
                    <option value="">to</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Job Role Input */}
              <div className="mb-7">
                <label>Job Role (optional)</label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Sales manager"
                />
              </div>
              {/* Description Input */}
              <div className="mb-7">
                <label>Description (optional)</label>
                <textarea
                  value={descWork}
                  onChange={(e) => setDescWork(e.target.value)}
                  className="block p-4 h-24 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  rows={6}
                  placeholder="Ex: Explain here what was your responsibility"
                />
              </div>
            </div>
            {/* Add Work Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAddWorkModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddWork}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Work Modal */}
      {showEditWorkModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Edit Work</h3>
              <button
                onClick={() => setShowEditWorkModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-y-auto max-h-[400px]">
              <div className="mb-7">
                <label>Company name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Google"
                />
              </div>
              <div className="flex justify-between flex-wrap w-full text-left mb-7">
                {/* Date Start Input */}
                <div className="w-[44%] mt-1 leading-normal">
                  <label htmlFor="date_start">Dates Attended (Optional)</label>
                  <select
                    id="date_start"
                    name="date_start"
                    className="block w-full input focus:outline-none focus:border-[#2525258a] focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    value={dateWorkFrom}
                    onChange={(e) => setDateWorkFrom(e.target.value)}
                  >
                    <option value="">from</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Date End Input */}
                <div className="w-[44%] mt-1 leading-normal">
                  <label
                    htmlFor="date_end"
                    className="text-[#344054] bg-[#ffffff] text-xs font-normal mb-1 inline-block"
                  ></label>
                  <select
                    id="date_end"
                    name="date_end"
                    className="block w-full input focus:outline-none focus:border-[#2525258a] focus-within:outline-none placeholder:text-sm placeholder:text-[#BEB5C3] bg-[#ffffff]"
                    value={dateWorkTo}
                    onChange={(e) => setDateWorkTo(e.target.value)}
                  >
                    <option value="">to</option>
                    {years.map((year, index) => (
                      <option key={index} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Job Role Input */}
              <div className="mb-7">
                <label>Job Role (optional)</label>
                <input
                  type="text"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Sales manager"
                />
              </div>
              {/* Description Input */}
              <div className="mb-7">
                <label>Description (optional)</label>
                <textarea
                  value={descWork}
                  onChange={(e) => setDescWork(e.target.value)}
                  className="block p-4 h-24 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  rows={6}
                  placeholder="Ex: Explain here what was your responsibility"
                />
              </div>
            </div>
            {/* Edit Work Button */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditWorkModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                onClick={handleEditWork}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddProjectModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Add Portfolio Project</h3>
              <button
                onClick={() => setShowAddProjectModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-y-auto max-h-[400px]">
              <div className="mb-7">
                <label>Project Title</label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Amazing Project"
                />
              </div>
              <div className="mb-7">
                <label>Your Role (optional)</label>
                <input
                  type="text"
                  value={projectRole}
                  onChange={(e) => setProjectRole(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Developer, Designer"
                />
              </div>
              <div className="mb-7">
                <label>Project Description</label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="block p-4 h-24 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: This project is about..."
                />
              </div>
              <div className="flex items-center justify-center border-[#D9D9D9] border-2 p-4 cursor-pointer w-64 h-48 bg-[#F1F1F1] rounded-lg text-sm">
                <label className="w-full h-full text-center cursor-pointer flex flex-col items-center justify-center">
                  <CiImageOn size={38} className="mb-2" />
                  <span>
                    Drag image here or{" "}
                    <span className="text-[#0E9F6E] cursor-pointer font-medium">
                      browse
                    </span>
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="mt-4 flex items-center flex-wrap justify-between">
                {images.map((image, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Project Image ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg mr-4"
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => handleSetCoverImage(index)}
                      className={`ml-4 ${
                        coverImage === index
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {coverImage === index ? "Cover Image" : "Set as Cover"}
                    </button>
                  </div>
                ))}
              </div>
              {uploading && (
                <div className="flex justify-center mt-4">
                  <CircularProgress />
                </div>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowAddProjectModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProject}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                disabled={uploading}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Project Modal */}
      {showEditProjectModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Edit Portfolio Project</h3>
              <button
                onClick={() => setShowEditProjectModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-y-auto max-h-[400px]">
              <div className="mb-7">
                <label>Project Title</label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Amazing Project"
                />
              </div>
              <div className="mb-7">
                <label>Your Role (optional)</label>
                <input
                  type="text"
                  value={projectRole}
                  onChange={(e) => setProjectRole(e.target.value)}
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Ex: Developer, Designer"
                />
              </div>
              <div className="mb-7">
                <label>Project Description</label>
                <textarea
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  className="block p-4 w-full h-24 input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3]"
                  placeholder="Describe your project..."
                />
              </div>
              <div className="flex items-center justify-center border-[#D9D9D9] border-2 p-4 cursor-pointer w-64 h-48 bg-[#F1F1F1] rounded-lg text-sm">
                <label className="w-full h-full text-center cursor-pointer flex flex-col items-center justify-center">
                  <CiImageOn size={38} className="mb-2" />
                  <span>
                    Drag image here or{" "}
                    <span className="text-[#0E9F6E] cursor-pointer font-medium">
                      browse
                    </span>
                  </span>
                  <input
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              <div className="flex flex-wrap mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative mr-4 mb-4">
                    <img
                      src={
                        image instanceof File
                          ? URL.createObjectURL(image)
                          : image.url
                      }
                      alt="uploaded"
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <button
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    >
                      &times;
                    </button>
                    <button
                      onClick={() => handleSetCoverImage(index)}
                      className={`ml-4 ${
                        coverImage === index
                          ? "text-green-500"
                          : "text-gray-500"
                      }`}
                    >
                      {coverImage === index ? "Cover Image" : "Set as Cover"}
                    </button>
                  </div>
                ))}
              </div>
              {uploading && (
                <div className="flex justify-center mt-4">
                  <CircularProgress />
                </div>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditProjectModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                onClick={handleEditProject}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
                disabled={uploading}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Occupation Title Modal Done */}
      {showEditOccupationTitleModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <form
            onSubmit={handleEditOccupationTitle}
            className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Edit Occupation Title</h3>
              <button
                onClick={() => setShowEditOccupationTitleModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-x-auto min-h-fit">
              <div className="mb-7">
                <label className="text-[#333] font-medium text-xl mb-3">
                  Write a title for your occupation
                </label>
                <input
                  type="text"
                  className="block p-4 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                  focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                  name="userOccupation"
                  defaultValue={currentUser.userOccupation}
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditOccupationTitleModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 !bg-[#0E9F6E] !text-white rounded-3xl hover:!bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Budget Modal */}
      {showEditBudgetModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Edit Hourly Rate</h2>
              <button
                onClick={() => setShowEditBudgetModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="my-4 w-full">
              <div className="w-full mb-3 flex justify-between items-center">
                <div className="flex flex-col flex-start">
                  <span className="mr-2">From</span>
                  <div className="flex">
                    <input
                      type="number"
                      className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 w-1/2"
                      value={tempHourlyRateFrom}
                      onChange={(e) => setTempHourlyRateFrom(e.target.value)}
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
                      onChange={(e) => setTempHourlyRateTo(e.target.value)}
                    />
                    <span className="ml-2 flex items-center">$ /hr</span>
                  </div>
                </div>
              </div>
              <div className="w-full text-[10px] text-gray-500">
                This is the average rate for similar projects.
              </div>
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

      {/* Edit Profile Description Modal */}
      {showEditProfileDescriptionModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <form
            onSubmit={handleEditProfileDescription}
            className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">
                Edit Profile Description
              </h3>
              <button
                onClick={() => setShowEditProfileDescriptionModal(false)}
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
                  name="desc"
                  defaultValue={currentUser.desc}
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditProfileDescriptionModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 !bg-[#0E9F6E] !text-white rounded-3xl hover:!bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Edit Availability Modal */}
      {showEditAvailabilityModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 relative w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Availability</h2>
              <button
                onClick={() => setShowEditAvailabilityModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <h3 className="text-xl font-medium mb-1">Hours per week</h3>
            <p className="mb-4 text-sm text-gray-500">
              Knowing how much you can work helps Upwork find the right jobs for
              you.
            </p>
            <div>
              <p className="mt-4 mb-3 text-xl font-medium text-gray-800">
                I can currently work:
              </p>
              <div className="flex flex-col">
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    className={`${styles.customRadio} form-radio text-green-500 mr-2 `}
                    name="availability"
                    value="More than 30 hrs/week"
                    checked={tempAvailability === "More than 30 hrs/week"}
                    onChange={() =>
                      setTempAvailability("More than 30 hrs/week")
                    }
                  />
                  More than 30 hrs/week
                </label>
                <label className=" flex items-center mb-4">
                  <input
                    type="radio"
                    name="availability"
                    value="Less than 30 hrs/week"
                    checked={tempAvailability === "Less than 30 hrs/week"}
                    onChange={() =>
                      setTempAvailability("Less than 30 hrs/week")
                    }
                    className={`${styles.customRadio} form-radio text-green-500 mr-2 `}
                  />
                  Less than 30 hrs/week
                </label>
                <label className="flex items-center mb-4">
                  <input
                    type="radio"
                    className={`${styles.customRadio} form-radio text-green-500 mr-2 `}
                    name="availability"
                    value="As needed - open to offers"
                    checked={tempAvailability === "As needed - open to offers"}
                    onChange={() =>
                      setTempAvailability("As needed - open to offers")
                    }
                  />
                  As needed - open to offers
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    className={`${styles.customRadio} form-radio text-green-500 mr-2 `}
                    name="availability"
                    value="None"
                    checked={tempAvailability === "None"}
                    onChange={() => setTempAvailability("None")}
                  />
                  None
                </label>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditAvailabilityModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                onClick={handleEditAvailability}
                className="px-5 py-2 bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Profile Image Modal Done */}
      {showEditProfileModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center z-50">
          <form
            onSubmit={handleSaveProfileImage}
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Edit Profile Image</h3>
              <button
                onClick={() => setShowEditProfileModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col items-center">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleImageUploadProfile}
                className="hidden"
                id="profile-image-upload"
              />
              <label
                htmlFor="profile-image-upload"
                className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 w-64 h-64 cursor-pointer"
              >
                {newProfileImage ? (
                  <img
                    src={URL.createObjectURL(newProfileImage)}
                    alt="New profile"
                    className="w-full h-full object-cover rounded-md"
                  />
                ) : (
                  <>
                    <MdOutlineEdit size={48} className="text-gray-400" />
                    <span className="text-gray-500">
                      Click to upload new profile image
                    </span>
                  </>
                )}
              </label>
              {uploading && <div className="mt-4">Uploading...</div>}
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <label className="mr-2">Online Status:</label>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={isOnline}
                    onChange={() => setIsOnline(!isOnline)}
                    name="isOnline"
                    defaultValue={isOnline}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setShowEditProfileModal(false)}
                  className="px-4 py-2 mr-2 text-[#0E9F6E]"
                >
                  Cancel
                </button>
                <button
                  className="px-5 py-2 !bg-[#0E9F6E] !text-white rounded-3xl hover:!bg-[#046c4e]"
                  type="submit"
                  disabled={uploading}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default EditMyProfile;
