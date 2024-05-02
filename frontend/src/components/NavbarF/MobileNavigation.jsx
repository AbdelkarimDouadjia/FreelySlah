import React from "react";
import { Link } from "react-router-dom";

const MobileNavigation = () => {
  return (
    <>
      <div className="mobilie_header_nav stylehome1">
        <div className="mobile-menu block lg-b:hidden ">
          <div className="header border-b border-[#E9E9E9] bg-transparent text-[15px] font-bold text-[#222] w-full h-[80px] leading-[80px] text-center block relative z-[1] py-0 px-[20px] lg-b:py-0 lg-b:px-[50px] ">
            <div className="menu_and_widgets">
              <div className="mobile_menu_bar align-items-cente items-center justify-between flex  ">
                <Link
                  className="mobile_logo cursor-pointer text-[#222] transition-all duration-500 ease-linear outline-none "
                  href="/"
                >
                  {/* <img
                    height={40}
                    width={133}
                    src="/src/assets/images/header-logo3.svg"
                    alt="Header Logo"
                    className="text-transparent align-middle "
                  /> */}
                  <span className="text-[#222] text-[20px] font-semibold mr-2">
                    FreelySlah
                  </span>
                </Link>
                <div className="right-side text-right flex items-center">
                  <Link
                    className="text-[#222] cursor-pointer transition-all duration-500 ease-linear"
                    href="/login"
                  >
                    Sign in
                  </Link>
                  <a
                    className="menubar ml-[30px] cursor-pointer text-[#222] outline-none"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasExample"
                    aria-controls="offcanvasExample"
                  >
                    <img
                      height={20}
                      width={20}
                      src="/src/assets/images/mobile-dark-nav-icon.svg"
                      alt="icon"
                      className="text-transparent align-middle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="posr">
              <div className="mobile_menu_close_btn">
                <span className="far fa-times" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
