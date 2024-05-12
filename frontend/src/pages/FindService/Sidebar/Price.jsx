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
          value={250}
          title="< 250 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={300}
          title="< 300 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={400}
          title="< 400 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={500}
          title="< 500 DA"
          name="test"
        />
      </div>
    </div>
  );
};

export default Price;
