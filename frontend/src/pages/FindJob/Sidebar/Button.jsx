import React from "react";

const Button = ({ onClickHandeler, value, title }) => {
  return (
    <button
      onClick={onClickHandeler}
      value={value}
      className={"px-2 py-1 border text-base button-hover"}
    >
      {title}
    </button>
  );
};

export default Button;
