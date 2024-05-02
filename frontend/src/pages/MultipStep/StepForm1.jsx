import React, { useState } from "react";
import "./styles.module.css";
import AppContext from "./Context";
import FormOne1 from "./FormOne1";
import FormTwo2 from "./FormTwo2";
import FormThree3 from "./FormThree3.jsx";
import FormFinish4 from "./FormFinish4";
import Navbar from "../../components/NavbarF/NavbarF";
import MultiStep from "./MultiStep";

const StepForm1 = () => {
  const [step, setStep] = useState(0);
  const [username, setUserName] = useState(null);
  const [userDisplayName, setDisplayName] = useState(null);
  const [userDescription, setDescription] = useState(null);
  const [phone, setPhone] = useState(null);
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
  const [gender, setGender] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [userIdType, setIdType] = useState(null);
  const [userIdNumber, setIdNumber] = useState(null);
  const [userIssuedD, setIssuedD] = useState(null);
  const [userExpiredD, setExpiredD] = useState(null);
  const [img, setImg] = useState(null);
  const [userDOB, setDOB] = useState(null);
  const [isSeller, setIsSeller] = useState(false);

  const userDetails = {
    currentPage: step,
    userName: username,
    userDisplayName: userDisplayName,
    userDescription: userDescription,
    userPhone: phone,
    userCountry: country,
    userCity: city,
    userGender: gender,
    userOccupation: occupation,
    userIdType: userIdType,
    userIdNumber: userIdNumber,
    userIssuedD: userIssuedD,
    userExpiredD: userExpiredD,
    userDOB: userDOB,
    userImg: img,
    isSeller: isSeller,
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
  };

  return (
    <AppContext.Provider value={{ userDetails }}>
      <div className="main">
        <Navbar />

        {/* <ProgressBar /> */}
        {step === 0 && <MultiStep />}
        {step === 1 && <FormOne1 />}
        {step === 2 && <FormTwo2 />}
        {step === 3 && <FormThree3 />}
        {step === 4 && <FormFinish4 />}
      </div>
    </AppContext.Provider>
  );
};

export default StepForm1;
