import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Navigation from "./Navigation.jsx";
import useStickyMenu from "./useStickyMenu.js";
import MobileNavigation from "./MobileNavigation.jsx";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { RiNotification3Line } from "react-icons/ri";

function NavbarF() {
  const navigate = useNavigate();
  const sticky = useStickyMenu(50);
  const [open, setOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("currentUserUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("currentUserUpdated", handleStorageChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      setCurrentUser(null); // Update state to reflect logout
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header
        className={`header-nav nav-homepage-style stricky main-menu animated bg-white border-b border-[#E9E9E9] py-[15px] px-0 max-[992px]:hidden lg-b:block  text-[15px] font-normal text-[#6B7177] leading-[28px] transition-all duration-300 ease-linear z-[99] ${
          sticky ? "slideInDown sticky top-0" : "slideIn"
        }`}
      >
        <nav className="relative">
          <div className="relative w-full px-4 mx-auto">
            <div className="items-center justify-between flex flex-wrap mt-0 -mx-3 ">
              <div className="!pr-0 max-w-full px-3 mr-0 !flex-initial !flex-shrink-0 !w-auto">
                <div className="flex items-center ">
                  <Link
                    className="header-logo logo1 outline-none 2xl-b:pr-[30px] border-r border-[#E9E9E9] cursor-pointer text-[#222] pr-[5px]"
                    to={
                      !currentUser.isSeller ? "/homeclient" : "/homefreelancer"
                    }
                  >
                    <span className="text-[#222] text-[20px] font-semibold mr-2">
                      FreelySlah
                    </span>
                  </Link>
                  <div className="home1_style ml-4">
                    <Navigation />
                  </div>
                </div>
              </div>
              <div className=" w-auto  max-w-full flex-initial !flex-shrink-0 px-3 mt-0 ">
                <div className="flex  items-center">
                  <a
                    className="login-info bdrl1 pl15-lg pl30 pl-[15px] xl-b:pl-[30px] border-l border-[#E9E9E9]  text-[15px] text-[#222] font-medium transition-all duration-500 ease-linear cursor-pointer outline-none "
                    data-bs-toggle="modal"
                    href="#exampleModalToggle"
                  >
                    <GoSearch className="text-[#222] text-[20px] cursor-pointer" />
                  </a>
                  {!currentUser?.isSeller && (
                    <Link
                      className={`mx-[15px] xl-b:mx-[30px] text-[15px]  text-[#222] font-medium transition-all duration-500 ease-linear cursor-pointer outline-none`}
                      to="/become-seller"
                    >
                      <span className="hidden xl-b:inline-block">Become a</span>{" "}
                      Seller
                    </Link>
                  )}
                  {!currentUser && (
                    <Link
                      className={`mx-[15px] xl-b:mx-[30px] text-[15px]  text-[#222] font-medium transition-all duration-500 ease-linear cursor-pointer outline-none `}
                      to="/login"
                    >
                      Sign in
                    </Link>
                  )}
                  {currentUser && (
                    <Link
                      className={`mx-[5px] xl-b:mx-[10px] text-[15px]  text-[#222] font-medium transition-all duration-500 ease-linear cursor-pointer outline-none hover:text-[#1F4B3F] hover:bg-[#e9e9e955] rounded-[50%] p-1 `}
                      to="/notifications"
                    >
                      <RiNotification3Line
                        className="text-[#222]
                        text-[20px] cursor-pointer hover:text-[#1F4B3F] hover:bg-[#e9e9e955] rounded-[50%]"
                      />
                    </Link>
                  )}
                  {!currentUser && (
                    <Link
                      className="ud-btn btn-thm btn-white relative add-joining text-[15px] h-[40px] py-[13px] px-[25px] xxs-b:py-[5px] xxs-b:px-[30px] font-medium transition-all duration-500 ease-linear cursor-pointer outline-none bg-[#5BBB7B] border-2 border-[#5BBB7B] text-white hover:!text-white hover:border-[#1F4B3F] "
                      to="/signup"
                    >
                      Join
                    </Link>
                  )}
                  {currentUser && (
                    <div
                      className="user flex items-center gap-[10px] cursor-pointer relative mr-10 "
                      onClick={() => setOpen(!open)}
                    >
                      <img
                        className="w-8 h-8 rounded-[50%] object-cover"
                        src={
                          currentUser.img || "https://via.placeholder.com/150"
                        }
                        alt=""
                      />
                      <span>
                        {currentUser?.displayName || currentUser?.fname}
                      </span>
                      {open && (
                        <div className="options absolute top-[50px] right-0 p-[20px] bg-white rounded-[10px] border border-[lightgray] flex flex-col gap-[10px]  w-[200px] font-light z-50">
                          {currentUser?.isSeller && (
                            <>
                              <Link className="link" to="/mygigs">
                                Gigs
                              </Link>
                              <Link className="link" to="/createservice">
                                Add new Gig
                              </Link>
                            </>
                          )}
                          <Link className="link" to="/orders">
                            Orders
                          </Link>
                          <Link className="link" to="/messages">
                            Messages
                          </Link>
                          <Link
                            className="link cursor-pointer"
                            onClick={handleLogout}
                          >
                            Logout
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MobileNavigation />
    </>
  );
}

export default NavbarF;
