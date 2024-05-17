import React, { useState } from "react";
import {
  FaSearch,
  FaChevronDown,
  FaBriefcase,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const SearchBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center w-full">
        <FaSearch className="text-gray-500 ml-4" />
        <input
          type="text"
          className="flex-grow p-2 ml-2 text-gray-700 focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center p-2 mx-4 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none"
        >
          <span className="mr-1">Jobs</span>
          <FaChevronDown />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 z-20 w-56 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
            <div className="flex flex-col p-2">
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <FaBriefcase className="mr-2" />
                Jobs
                <span className="ml-auto text-sm text-gray-500">
                  Apply to jobs posted by clients
                </span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <FaUsers className="mr-2" />
                Talent
                <span className="ml-auto text-sm text-gray-500">
                  Find freelancers and agencies
                </span>
              </a>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                <FaClipboardList className="mr-2" />
                Projects
                <span className="ml-auto text-sm text-gray-500">
                  See projects from other pros
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
