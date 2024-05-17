import React from "react";

const Step4 = ({ formData, handleChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Job Descriptions</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">About Us</label>
        <textarea
          name="aboutUs"
          value={formData.aboutUs}
          onChange={handleChange("aboutUs")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Role Overview
        </label>
        <textarea
          name="roleOverview"
          value={formData.roleOverview}
          onChange={handleChange("roleOverview")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Step4;
