import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa6";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Step4 from "./Step4.jsx";

Modal.setAppElement("#root");

const PostJob = () => {
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    jobTitle: "",
    location: "",
    category: "",
    experienceLevel: "",
    workModality: "",
    employmentType: "",
    companyName: "",
    quote: "",
    logo: "",
    socials: { linkedin: "", twitter: "", facebook: "" },
    hiringManager: { name: "", position: "", picture: "", portfolio: "" },
    aboutUs: "",
    roleOverview: "",
    keyResponsibilities: "",
    qualifications: "",
    skills: "",
    benefits: "",
    closingNote: "",
  });

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => {
    setModalIsOpen(false);
    setStep(1);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (input) => (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [input]: value });
  };

  const handleNestedChange = (section, input) => (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [section]: { ...formData[section], [input]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    closeModal();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} handleChange={handleChange} />;
      case 2:
        return <Step2 formData={formData} handleChange={handleChange} />;
      case 3:
        return (
          <Step3 formData={formData} handleNestedChange={handleNestedChange} />
        );
      case 4:
        return <Step4 formData={formData} handleChange={handleChange} />;
      default:
        return <Step1 formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div>
      <section className="pt90 pt60-md pb130 pb60-md my-[90px]">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="visible items-center flex flex-wrap -mx-3 mt-0">
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-3/4">
              <div className="max-[991px]:mb-[30px] relative">
                <h2 className="text-[48px] font-bold text-[#222] leading-[1.3125] mt-0 max-[575px]:text-[20px]">
                  Hi, {userInfo?.displayName || userInfo?.fname} 👋
                </h2>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-1/4 flex justify-end">
              <div className="mb-4 lg-b:text-right">
                <button
                  onClick={openModal}
                  className="cursor-pointer flex items-center justify-center mt-[20px] !py-3 !px-4 hover:text-white rounded-[60px] bg-[#0E9F6E] hover:bg-[#046c4e] text-white hover:border-none transition-all duration-300 ease-linear font-medium w-fit"
                >
                  <FaPlus className="text-2xl mr-[11px] font-light" />
                  Post a Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="p-8 bg-white rounded-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Create a Job Post
          </h2>
          {renderStep()}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                onClick={prevStep}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={nextStep}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                Post Job
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PostJob;
