import React from "react";
import { Link } from "react-router-dom";
import "./HeaderT.css";

const Header = () => {
  return (
    <>
      <header className="header-nav py-[7px] bg-[#ffffff] at-home20 main-menu border-0">
        <nav className="relative">
          <div className="container mx-auto custom-container custom-container2 realative">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 px-0 xl:px-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="logos">
                    <Link className="header-logo logo1" href="/">
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
                  <div className="flex items-center gap-5 ">
                    <Link href="/">
                      <h3 className="font-[500]">Home</h3>
                    </Link>
                    <Link href="/">
                      <h3 className="font-[500]">Browse Products</h3>
                    </Link>
                    <Link href="/">
                      <h3 className="font-[500]">Blog</h3>
                    </Link>
                    <Link href="/">
                      <h3 className="font-[500]">Feedback</h3>
                    </Link>
                    <div>
                      <div>
                        <h3 className="relative font-[500]">
                          <div className="flex items-center gap-1  cursor-pointer">
                            <span className="">Others</span>
                            <span>
                              <i className="ri-arrow-down-s-line text-xl mt-1 inline-block"></i>
                            </span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  </div>
                </ul>{" "}
              </div>

              <div className="flex pr-0 ">
                <div className="flex items-center">
                  <Link className="login-info" href="/become-seller">
                    <span className="hidden xl:inline-block">Become a</span>{" "}
                    Seller
                  </Link>
                  <Link
                    className="login-info mr-[10px] px-[30px] py-[5px] rounded-xl ml-[30px] border border-solid border-[#222222]"
                    href="/login"
                  >
                    Sign in
                  </Link>
                  <Link
                    className="ud-btn text-[15px] font-medium h-10 px-[30px] py-[5px] bg-[#5BBB7B] border-transparent border-2 border-solid rounded-xl text-white"
                    href="/signup"
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
