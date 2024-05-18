import React from "react";
import InputField from "../InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <InputField
          handleChange={handleChange}
          value="Algiers"
          title="Algiers"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Blida"
          title="Blida"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Oran"
          title="Oran"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Ain Defla"
          title="Ain Defla"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="Annaba"
          title="Annaba"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
