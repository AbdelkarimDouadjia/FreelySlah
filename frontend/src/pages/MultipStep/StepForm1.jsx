import React, { useState, useEffect } from "react";
import "./styles.module.css";
import AppContext from "./Context";
import FormOne1 from "./FormOne1";
import FormTwo2 from "./FormTwo2";
import FormThree3 from "./FormThree3.jsx";
import FormFinish4 from "./FormFinish4";
import Navbar from "../../components/NavbarF/NavbarF";
import MultiStep from "./MultiStep";
import FormFreelancer from "./FormFreelancer.jsx";
import { useNavigate } from "react-router-dom";
import FormFive5 from "./FormFive5.jsx";


const StepForm1 = () => {
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  // if userInfo has no description then navigate to login page
  useEffect(() => {
    if (userInfo.desc !== null && userInfo.isSeller === true) {
      navigate("/");
    } else if (userInfo.desc === null && userInfo.isSeller === false) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const [step, setStep] = useState(0);
  const [username, setUserName] = useState(null);
  const [userDisplayName, setDisplayName] = useState(null);
  const [userDescription, setDescription] = useState(null);
  const [phone, setPhone] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [userIdType, setIdType] = useState(null);
  const [userIdNumber, setIdNumber] = useState(null);
  const [userIssuedD, setIssuedD] = useState(null);
  const [userExpiredD, setExpiredD] = useState(null);
  const [img, setImg] = useState(null);
  const [userDOB, setDOB] = useState(null);
  const [isSeller, setIsSeller] = useState(null);
  const [freelancerType, setFreelancerType] = useState(null);
  const [userLanguages, setLanguages] = useState([]);
  const [userSkills, setSkills] = useState([]);
  const [userEducation, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);

  const userDetails = {
    currentPage: step,
    userName: username,
    userDisplayName: userDisplayName,
    userDescription: userDescription,
    userPhone: phone,
    userCountry: country,
    userGender: gender,
    userOccupation: occupation,
    userIdType: userIdType,
    userIdNumber: userIdNumber,
    userIssuedD: userIssuedD,
    userExpiredD: userExpiredD,
    userDOB: userDOB,
    userImg: img,
    isSeller: isSeller,
    freelancerType: freelancerType,
    userLanguages: userLanguages,
    userSkills: userSkills,
    userEducation: userEducation,
    workExperience: workExperience,
    city: city,
    state: state,
    setUserName,
    setDisplayName,
    setPhone,
    setStep,
    setCountry,
    setCity,
    setGender,
    setOccupation,
    setIdType,
    setIdNumber,
    setIssuedD,
    setExpiredD,
    setDescription,
    setImg,
    setDOB,
    setIsSeller,
    setFreelancerType,
    setLanguages,
    setSkills,
    setEducation,
    setWorkExperience,
    setState,
  };

  return (
    <AppContext.Provider value={{ userDetails }}>
      <div className="main">
        <Navbar />

        {/* <ProgressBar /> */}
        {step === 0 && <MultiStep />}
        {step === 1 && <FormFreelancer />}
        {step === 2 && <FormOne1 />}
        {step === 3 && <FormFive5 />}
        {step === 4 && <FormTwo2 />}
        {step === 5 && <FormThree3 />}
        {step === 6 && <FormFinish4 />}
      </div>
    </AppContext.Provider>
  );
};

export default StepForm1;
