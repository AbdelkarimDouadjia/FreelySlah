import React from "react";


const Step1 = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Job Details</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Job Title
        </label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange("jobTitle")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Company's Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange("location")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Step1;
