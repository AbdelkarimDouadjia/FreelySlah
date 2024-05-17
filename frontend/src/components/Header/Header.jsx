import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isBrowseJobsMenuOpen, setIsBrowseJobsMenuOpen] = useState(false);
  const [isUsersMenuOpen, setIsUsersMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);

  const toggleHomeMenu = () => {
    setIsHomeMenuOpen(!isHomeMenuOpen);
    setIsBrowseJobsMenuOpen(false);
    setIsUsersMenuOpen(false);
    setIsPagesMenuOpen(false);
  };

  const toggleBrowseJobsMenu = () => {
    setIsBrowseJobsMenuOpen(!isBrowseJobsMenuOpen);
    setIsHomeMenuOpen(false);
    setIsUsersMenuOpen(false);
    setIsPagesMenuOpen(false);
  };

  const toggleUsersMenu = () => {
    setIsUsersMenuOpen(!isUsersMenuOpen);
    setIsHomeMenuOpen(false);
    setIsBrowseJobsMenuOpen(false);
    setIsPagesMenuOpen(false);
  };

  const togglePagesMenu = () => {
    setIsPagesMenuOpen(!isPagesMenuOpen);
    setIsHomeMenuOpen(false);
    setIsBrowseJobsMenuOpen(false);
    setIsUsersMenuOpen(false);
  };

  return (
    <>
      <header className="header-nav py-[7px] bg-[#ffffff] at-home20 main-menu border-0">
        <nav className="relative">
          <div className="container mx-auto custom-container custom-container2 realative">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 px-0 xl:px-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" to="/">
                      <img
                        width={133}
                        height={40}
                        src="/src/assets/images/header-logo-dark2.svg"
                        alt="Header Logo"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 px-0 xl:px-3">
                <ul className="ace-responsive-menu list-none m-0 p-0 bg-transparent w-auto max-[768px]:float-left max-[768px]:w-full">
                  <li
                    className={`visible_list menu-active home-menu-parent ${
                      isHomeMenuOpen ? "ui-active" : ""
                    }`}
                    onClick={toggleHomeMenu}
                  >
                    <a className="rounded-[60px] text-center py-[7px] px-[13px] font-medium max-[1199.98px]:px-2 max-[1399.98px]:px-[11px] list-items">
                      <span className="title">Home</span>{" "}
                      <span className="arrow ">
                        <FontAwesomeIcon icon={faArrowDown} />
                      </span>
                    </a>
                    {isHomeMenuOpen && (
                      <ul className="sub-menu home-menu bg-white rounded-xl shadow-header-shadow p-[15px] z-50 w-[260px] list-none clear-both m-0 absolute">
                        <li className="menu-active border-l-2 border-transparent px-[30px] w-[260px] transition-all duration-400 ease-in-out realtive list-none">
                          <a
                            href="/"
                            className="block text-base font-normal leading-10 cursor-pointer"
                          >
                            <span className="title">Home V1</span>
                          </a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className={`visible_list menu-active ${
                      isBrowseJobsMenuOpen ? "ui-active" : ""
                    }`}
                    onClick={toggleBrowseJobsMenu}
                  >
                    <a className="rounded-[60px] text-center py-[7px] px-[13px] font-medium max-[1199.98px]:px-2 max-[1399.98px]:px-[11px] list-items">
                      <span className="title">Browse Jobs</span>{" "}
                      <span className="arrow ">
                        <FontAwesomeIcon icon={faArrowDown} />
                      </span>
                    </a>
                    {isBrowseJobsMenuOpen && (
                      <ul className="sub-menu home-menu bg-white rounded-xl shadow-header-shadow p-[15px] z-50 w-[260px] hidden list-none clear-both m-0 absolute">
                        <li className="menu-active border-l-2 border-transparent px-[30px] w-[260px] transition-all duration-400 ease-in-out realtive list-none">
                          <a className="block text-base font-normal leading-10 cursor-pointer">
                            <span className="title">Services</span>
                            <span className="arrow "></span>
                          </a>
                          <ul className="sub-menu">
                            <li className="">
                              <a href="/service-1">Service v1</a>
                            </li>
                            {/* ... rest of the Services submenu items */}
                          </ul>
                        </li>
                        {/* ... rest of the Browse Jobs submenu items */}
                      </ul>
                    )}
                  </li>
                  <li
                    className={`visible_list menu-active ${
                      isUsersMenuOpen ? "ui-active" : ""
                    }`}
                    onClick={toggleUsersMenu}
                  >
                    <a className="list-item">
                      <span className="title">Users</span>{" "}
                      <span className="arrow "></span>
                    </a>
                    {isUsersMenuOpen && (
                      <ul className="sub-menu">
                        {/* ... Users submenu items */}
                      </ul>
                    )}
                  </li>
                  <li
                    className={`visible_list menu-active ${
                      isPagesMenuOpen ? "ui-active" : ""
                    }`}
                    onClick={togglePagesMenu}
                  >
                    <a className="list-item">
                      <span className="title">Pages</span>{" "}
                      <span className="arrow "></span>
                    </a>
                    {isPagesMenuOpen && (
                      <ul className="sub-menu">
                        {/* ... Pages submenu items */}
                      </ul>
                    )}
                  </li>
                  <li className="visible_list menu-active">
                    <a className="list-item" href="/contact">
                      <span className="title">Contact</span>
                    </a>
                  </li>
                </ul>{" "}
              </div>

              <div className="flex pr-0 ">
                <div className="flex items-center">
                  <Link className="login-info" to="/become-seller">
                    <span className="hidden xl:inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link
                    className="login-info mr-[10px] px-[30px] py-[5px] rounded-xl ml-[30px] border border-solid border-[#222222]"
                    to="/login"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn text-[15px] font-medium h-10 px-[30px] py-[5px] bg-[#5BBB7B] border-transparent border-2 border-solid rounded-xl text-white"
                    to="/signup"
                  >
                    Join
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <MobileNavigation2 /> */}
    </>
  );
};

export default Header;