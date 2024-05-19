import React, { useContext, useState, useEffect } from "react";
import AppContext from "./Context";
import "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequest from "../../utils/newRequest";

const FormFinish = () => {
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  // If the user is not found in the local storage, redirect to the login page
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const [error, setError] = useState(null);
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const name = updateContext.userName;
  console.log(updateContext);

  let res = updateContext;

  useEffect(() => {
    // Update currentUser in localStorage when userName is updated
    if (res && res.data) {
      const updatedUserInfo = { ...userInfo, ...res.data };
      localStorage.setItem("currentUser", JSON.stringify(updatedUserInfo));
    }
  }, [res, userInfo]);

  // Set the userProfile variable to the user profile
  const userProfile =
    [
      {
        userEducation: (updateContext.userEducation || []).map((education) => ({
          school: `${education.school}`,
          degree: `${education.degree}`,
          fieldOfStudy: `${education.areaOfStudy}`,
          startYear: `${education.dataSchoolFrom}`,
          endYear: `${education.dataSchoolTo}`,
          description: `${education.descEducation}`,
        })),
        // This is just an array of strings
        userSkills: (updateContext.userSkills || []).map((skill) => ({
          skill: `${skill}`,
        })),
        workExperience: (updateContext.workExperience || []).map((work) => ({
          title: `${work.jobRole}`,
          company: `${work.companyName}`,
          startYear: `${work.dateWorkFrom}`,
          endYear: `${work.dateWorkTo}`,
          description: `${work.descWork}`,
        })),
        userLanguages: (updateContext.userLanguages || []).map((language) => ({
          language: `${language.language}`,
          proficiency: `${language.proficiency}`,
        })),
      },
    ] || [];

  console.log(userProfile);


  const updateCurrentUser = (res) => {
    const updatedUserInfo = { ...userInfo, ...res };
    localStorage.setItem("currentUser", JSON.stringify(updatedUserInfo));

    // Emit a custom event to notify other components of the update
    const event = new CustomEvent("currentUserUpdated", {
      detail: updatedUserInfo,
    });
    window.dispatchEvent(event);
  };

  // In your finish function, make sure to call updateCurrentUser with the response data
  const finish = async () => {
    try {
      const storeImg = await updateContext.storeImg;
      const img = await updateContext.userImg;
      res = await newRequest.post("/stepper/welcome", {
        _id: `${userInfo._id}`,
        username: `${updateContext.userName}`,
        displayName: `${updateContext.userDisplayName}`,
        dob: `${updateContext.userDOB}`,
        desc: `${updateContext.userDescription}`,
        gender: `${updateContext.userGender}`,
        phone: `${updateContext.userPhone}`,
        isSeller: `${updateContext.isSeller}`,
        userIdType: `${updateContext.userIdType}`,
        userIdNumber: `${updateContext.userIdNumber}`,
        userIssuedD: `${updateContext.userIssuedD}`,
        userExpiredD: `${updateContext.userExpiredD}`,
        userOccupation: `${updateContext.userOccupation}`,
        freelancerType: `${updateContext.freelancerType}`,
        city: `${updateContext.city}`,
        state: `${updateContext.state}`,
        userProfile: userProfile ? userProfile : [],
        userStore: {
          storeImg: `${storeImg ? storeImg : ""}`,
          storeName: `${updateContext.userStoreName}`,
          storeLocation: `${updateContext.userStoreLocation}`,
          storeCat: `${updateContext.userStoreCategory}`,
          storeDesc: `${updateContext.userStoreDescription}`,
        },
        ...(img === null ? { img: `${userInfo.img}` } : { img: `${img}` }),
      });
      updateCurrentUser(res.data);
      toast.success("welcome", { position: "top-right" });
    } catch (err) {
      setError(err.response.data);
      toast.error(error, { position: "top-right" });
    }
  };

  return (
    <>
      <div className="scroll flex flex-col items-center justify-center gap-3 bg-[#F9F9F9] min-h-[84vh]">
        <form className="px-4 md-b:max-w-[700px] text-center" onSubmit={finish}>
          <div className="w-full flex items-center justify-center my-5 overflow-hidden ">
            <img
              className="done mx-auto w-40 h-40 z-20"
              src="/src/assets/success.png"
              alt="success"
            />
            <img
              className="done mx-auto w-72 h-64 absolute z-10"
              src="/src/assets/party.png"
              alt="success"
            />
          </div>
          <h2 className="text-lg md-b:text-xl font-bold !text-[#333] !z-30 relative">
            Congratulation {name} ! You are all set up now 👌
          </h2>
          <h4 className="text-xs text-[#00000099]">
            You have completed your profile set up successfully, you can now
            start using the FreelySlah ✨
          </h4>

          <button
            className="border mt-8 w-fit font-bold px-7 py-[5px] text-lg   border-[#1DBF73] !bg-[#0E9F6E]  hover:!bg-[#046c4e] text-white rounded-md   "
            type="submit"
          >
            Finish
          </button>
          {/* Handle notifications */}
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default FormFinish;
