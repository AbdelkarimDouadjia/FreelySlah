import React, { useState } from "react";

function Test() {
  // const image = false;
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));

  const inputClassName =
    "block p-4 w-full text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500";
  const labelClassName =
    "mb-2 text-xs font-medium text-gray-900  dark:text-[#333]";
  console.log(userInfo.email[0].toUpperCase());

  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="flex flex-col items-center justify-center min-h-[80vh] gap-3">
              <div className="md-b:max-w-[500px] text-center">
                <h2 className="text-xl md-b:text-3xl">Welcome to FreelySlah</h2>
                <h4 className="text-base md-b:text-lg">
                  Please complete your profile to get started
                </h4>
                <div className="flex flex-col items-center w-full gap-5">
                  <div className="flex flex-col items-center cursor-pointer">
                    <label className={labelClassName} htmlFor="">
                      Select a profile Picture
                    </label>
                    <div
                      className={` bg-purple-500 h-36 w-36 flex items-center justify-center rounded-full relative`}
                    >
                      {userInfo.img ? (
                        <img
                          src={userInfo.img}
                          alt="profile"
                          className="rounded-full w-full"
                        />
                      ) : (
                        <span className="text-6xl text-white">
                          {userInfo.email[0].toUpperCase()}
                        </span>
                      )}
                      <div
                        className={`absolute h-full w-full rounded-full flex items-center justify-center   transition-all duration-100 ${
                          userInfo.img
                            ? "opacity-100  "
                            : "opacity-0 bg-slate-400 "
                        }`}
                      >
                        <span
                          className={` flex items-center justify-center  relative ${
                            userInfo.img ? "opacity-0" : "opacity-100 "
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-white absolute"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <input
                            type="file"
                            className="opacity-0 w-full h-full z-50 cursor-pointer"
                            multiple={true}
                            name="profileImage"
                            required
                            onChange={handleProfilePictureChange}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between flex-wrap w-full">
                    <div className="w-full text-center md-b:w-[44%] md-b:text-left ">
                      <label className={labelClassName} htmlFor="userName">
                        Please select a username
                      </label>
                      <input
                        className={`${inputClassName} w-1/3`}
                        type="text"
                        name="userName"
                        id="userName"
                        placeholder="Username"
                        required
                      />
                    </div>

                    <div className="w-full text-center md-b:w-[44%] md-b:text-left ">
                      <label className={labelClassName} htmlFor="givenName">
                        Please enter your given Name
                      </label>
                      <input
                        className={`${inputClassName} w-1/3`}
                        type="text"
                        name="givenName"
                        id="givenName"
                        placeholder="Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label className={labelClassName} htmlFor="description">
                      Description
                    </label>
                    <textarea
                      name="description"
                      id="description"
                      className={inputClassName}
                      placeholder="description"
                      required
                    ></textarea>
                  </div>
                  <div className="w-full flex flex-wrap justify-between">
                    {step !== 1 && (
                      <button
                        className="border w-fit text-lg font-semibold px-5 py-3  border-[#1DBF73] !bg-[#1DBF73] text-white rounded-md"
                        type="button"
                        onClick={prevStep}
                      >
                        Previous
                      </button>
                    )}
                    <button
                      className="border w-fit text-lg font-semibold px-5 py-3  border-[#1DBF73] !bg-[#1DBF73] text-white rounded-md"
                      type="button"
                      onClick={nextStep}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Step 2</h2>
            <h4 className="text-xl">This is step 2 of the registration form</h4>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Step 3</h2>
            <h4 className="text-xl">This is step 3 of the registration form</h4>
            <div className="flex flex-col items-center cursor-pointer">
              <label htmlFor="profilePicture">Select a profile picture</label>
              <input
                type="file"
                id="profilePicture"
                onChange={handleProfilePictureChange}
              />
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      default:
        return null;
    }
  };
  return <div>{renderStep()}</div>;
}

export default Test;

/*
import React, { useState } from "react";

const Test = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Welcome to Fiverr Clone</h2>
            <h4 className="text-xl">
              Please complete your profile to get started
            </h4>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Step 2</h2>
            <h4 className="text-xl">This is step 2 of the registration form</h4>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Step 3</h2>
            <h4 className="text-xl">This is step 3 of the registration form</h4>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Test;


*/

/*
import React, { useState } from "react";

const Test = () => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Welcome to Fiverr Clone</h2>
            <h4 className="text-xl">
              Please complete your profile to get started
            </h4>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Step 2</h2>
            <h4 className="text-xl">This is step 2 of the registration form</h4>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center justify-start min-h-[80vh] gap-3">
            <h2 className="text-3xl">Step 3</h2>
            <h4 className="text-xl">This is step 3 of the registration form</h4>
            <div className="flex flex-col items-center cursor-pointer">
              <label htmlFor="profilePicture">Select a profile picture</label>
              <input
                type="file"
                id="profilePicture"
                onChange={handleProfilePictureChange}
              />
            </div>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={prevStep}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStep()}</div>;
};

export default Test; */
