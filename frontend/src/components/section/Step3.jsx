import React from "react";

const Step3 = ({ formData, handleNestedChange }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Socials & Hiring Manager</h3>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={formData.socials.linkedin}
          onChange={handleNestedChange("socials", "linkedin")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">
          Hiring Manager Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.hiringManager.name}
          onChange={handleNestedChange("hiringManager", "name")}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      {/* Add more fields as necessary */}
    </div>
  );
};

export default Step3;
