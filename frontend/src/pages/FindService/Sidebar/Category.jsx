import React from "react";
import InputField from "../InputField";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Category</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test1"
            id="test1"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <div className="text-[15px]">
          {" "}
          {/* Apply class only to this specific field */}
          <InputField
            handleChange={handleChange}
            value="Technology & Development"
            title="Technology & Development"
            name="test1"
          />
        </div>
        <InputField
          handleChange={handleChange}
          value="Creative & Design"
          title="Creative & Design"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Writing and Translation"
          title="Writing and Translation"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Arts & Entertainment"
          title="Arts & Entertainment"
          name="test1"
        />
      </div>
    </div>
  );
};

export default Category;
