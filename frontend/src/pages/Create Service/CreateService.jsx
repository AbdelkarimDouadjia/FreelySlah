import React, { useState } from "react";
import Overview from "./steps/Overview";
import Pricing from "./steps/Pricing";
import DescriptionFAQ from "./steps/DescriptionFAQ";
import Requirements from "./steps/Requirements";
import Gallery from "./steps/Gallery";
import Publish from "./steps/Publish";

const CreateService = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (step < 6) {
      nextStep();
    } else {
      alert("Form submitted!");
      // Handle form submission logic
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-md shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-sm">
            {Array.from({ length: 6 }, (_, i) => (
              <span
                key={i}
                className={`font-bold ${
                  step === i + 1 ? "text-green-500" : "text-gray-400"
                }`}
              >
                {i + 1}{" "}
                {
                  [
                    "Overview",
                    "Pricing",
                    "Description & FAQ",
                    "Requirements",
                    "Gallery",
                    "Publish",
                  ][i]
                }
              </span>
            ))}
          </div>
          <button className="bg-white border border-gray-300 rounded px-4 py-2">
            Save
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {step === 1 && <Overview />}
          {step === 2 && <Pricing />}
          {step === 3 && <DescriptionFAQ />}
          {step === 4 && <Requirements />}
          {step === 5 && <Gallery />}
          {step === 6 && <Publish />}
          <div className="flex justify-between mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="!bg-green-700 text-black px-4 py-2 rounded"
              >
                Back
              </button>
            )}
            <button
              type="submit"
              className="!bg-blue-500 text-black px-4 py-2 rounded"
            >
              {step < 6 ? "Next" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
