import React from "react";
import InputField from "../InputField";

const Price = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Price</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test2"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value={20}
          title="< 20 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={40}
          title="< 40 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50 DA"
          name="test"
        />
      </div>
    </div>
  );
};

export default Price;
