import React from "react";
import { Link } from "react-router-dom";
export default function FooterSocial() {
  return (
    <>
      <div className="social-widget text-center md:text-right  ">
        <div className="social-style1">
          <Link
            className="text-white mr-2 font-medium text-[17px] cursor-pointer transition-all duration-300 ease-linear"
            href="/"
          >
            Follow us
          </Link>
          <a className="cursor-pointer transition-all duration-300 ease-linear">
            <i className="fab fa-facebook-f text-white rounded-[50%] h-[40px] text-center w-[40px] transition-all duration-300 ease-linear font-normal" />
          </a>
          <a className="cursor-pointer transition-all duration-300 ease-linear">
            <i className="fab fa-twitter text-white rounded-[50%] h-[40px] text-center w-[40px] transition-all duration-300 ease-linear font-normal"/>
          </a>
          <a className="cursor-pointer transition-all duration-300 ease-linear">
            <i className="fab fa-instagram text-white rounded-[50%] h-[40px] text-center w-[40px] transition-all duration-300 ease-linear font-normal"/>
          </a>
          <a className="cursor-pointer transition-all duration-300 ease-linear">
            <i className="fab fa-linkedin-in text-white rounded-[50%] h-[40px] text-center w-[40px] transition-all duration-300 ease-linear font-normal"/>
          </a>
        </div>
      </div>
    </>
  );
}
