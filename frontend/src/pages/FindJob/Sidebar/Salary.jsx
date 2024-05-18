import React from "react";
import Button from "./Button";
import InputField from "../InputField";

const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Price</h4>
      {/*<div className="flex mb-4">
        <Button onClickHandeler={handleClick} value="" title="Hourly" />
        <Button onClickHandeler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandeler={handleClick} value="Yearly" title="Yearly" />
  </div>*/}
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
          value={30}
          title="< 30 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80 DA"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100 DA"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
