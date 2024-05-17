import React from "react";

const Step2 = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Company's Details</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Company's Name
        </label>
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange("companyName")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Quote/Motto
        </label>
        <input
          type="text"
          name="quote"
          value={formData.quote}
          onChange={handleChange("quote")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Step2;
