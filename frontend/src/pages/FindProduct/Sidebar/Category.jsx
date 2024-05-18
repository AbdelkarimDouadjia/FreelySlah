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
        <InputField
          handleChange={handleChange}
          value="Accessories"
          title="Accessories"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Pants"
          title="Pants"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Electronics"
          title="Electronics"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Bag"
          title="Bag"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="T-shirt"
          title="T-shirt"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Product"
          title="Product"
          name="test1"
        />
        <InputField
          handleChange={handleChange}
          value="Hat"
          title="Hat"
          name="test1"
        />
      </div>
    </div>
  );
};

export default Category;
