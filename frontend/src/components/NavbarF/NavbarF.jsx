import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import Navigation from "./Navigation.jsx";
import useStickyMenu from "./useStickyMenu.js";
import MobileNavigation from "./MobileNavigation.jsx";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { RiNotification3Line } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  IoBriefcaseOutline,
  IoAddCircleOutline,
  IoBagCheckOutline,
  IoChatbubbleOutline,
  IoSettingsOutline,
  IoLogOutOutline,
} from "react-icons/io5";


function NavbarF() {
  const navigate = useNavigate();
  const sticky = useStickyMenu(50);
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      user: "Frankie Sullivan",
      message: "This is looking great! Let's get started on it.",
      date: "Sep 20, 2024",
      time: "2:20pm",
      link: "/your-post",
    },
    {
      id: 2,
      user: "Amélie Laurent",
      message: "followed you",
      date: "Sep 20, 2024",
      time: "10:04am",
      link: "/followers",
    },
    {
      id: 3,
      user: "Mikah DiStefano",
      message: "uploaded 2 attachments",
      date: "Sep 19, 2024",
      time: "2:20pm",
      attachments: [
        { name: "Prototype recording 02.mp4", size: "16 MB", link: "#" },
        { name: "Prototype recording 01.mp4", size: "14 MB", link: "#" },
      ],
    },
  ]);

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
        className={`header-nav nav-homepage-style stricky main-menu animated bg-white  border-[#E9E9E9] py-[15px] px-0 max-[992px]:hidden lg-b:block  text-[15px] font-normal text-[#6B7177] leading-[28px] transition-all duration-300 ease-linear z-[99] ${
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
                    <div className="relative">
                      <div
                        className={`mx-[5px] xl-b:mx-[10px] text-[15px]  text-[#222] font-medium transition-all duration-500 ease-linear cursor-pointer outline-none hover:text-[#1F4B3F] hover:bg-[#e9e9e955] rounded-[50%] p-1 `}
                        onClick={() => setShowNotifications(!showNotifications)}
                      >
                        <RiNotification3Line className="text-[#222] text-[20px] cursor-pointer hover:text-[#1F4B3F] hover:bg-[#e9e9e955] rounded-[50%]" />
                      </div>
                      {showNotifications && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="absolute right-0 mt-2 w-[300px] bg-white border border-gray-200 rounded-lg shadow-lg z-50"
                        >
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-800">
                              Notifications
                            </h4>
                            <ul className="mt-4">
                              {notifications.map((notification) => (
                                <li key={notification.id} className="mb-2">
                                  <Link
                                    to={notification.link}
                                    className="flex items-start"
                                  >
                                    <div className="mr-2">
                                      <img
                                        className="w-8 h-8 rounded-full"
                                        src="https://via.placeholder.com/150"
                                        alt=""
                                      />
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-600">
                                        <strong>{notification.user}</strong>{" "}
                                        {notification.message}
                                      </p>
                                      <p className="text-xs text-gray-400">
                                        {notification.date} at{" "}
                                        {notification.time}
                                      </p>
                                      {notification.attachments && (
                                        <div className="mt-2">
                                          {notification.attachments.map(
                                            (attachment, index) => (
                                              <div
                                                key={index}
                                                className="flex items-center text-sm text-blue-500"
                                              >
                                                <svg
                                                  className="w-4 h-4 mr-1"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                >
                                                  <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 12V8a3 3 0 00-6 0v4m6 0a3 3 0 11-6 0m6 0L9 16.5M9 21v-4.5"
                                                  ></path>
                                                </svg>
                                                <span>
                                                  {attachment.name} (
                                                  {attachment.size})
                                                </span>
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <div className="text-center mt-4">
                              <Link
                                to="/notifications"
                                className="text-blue-500 hover:underline"
                              >
                                View all notifications
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
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
                        <div className="options absolute top-[50px] right-0 py-2 bg-white rounded-[10px] border border-[lightgray] flex flex-col gap-2 w-[200px] font-light z-50 shadow-lg">
                          {currentUser?.isSeller && (
                            <>
                              <Link
                                className="link px-4 py-2 hover:bg-[#e9e9e9] flex items-center text-[#333] text-lg font-medium"
                                to="/mygigs"
                              >
                                <IoBriefcaseOutline className="mr-2" />
                                <span>Gigs</span>
                              </Link>
                              <Link
                                className="link px-4 py-2 hover:bg-[#e9e9e9] flex items-center text-[#333] text-lg font-medium"
                                to="/createservice"
                              >
                                <IoAddCircleOutline className="mr-2" />
                                <span>Add new Gig</span>
                              </Link>
                            </>
                          )}
                          <Link
                            className="link px-4 py-2 hover:bg-[#e9e9e9] flex items-center text-[#333] text-lg font-medium"
                            to="/orders"
                          >
                            <IoBagCheckOutline className="mr-2" />
                            <span>Orders</span>
                          </Link>
                          <Link
                            className="link px-4 py-2 hover:bg-[#e9e9e9] flex items-center text-[#333] text-lg font-medium"
                            to="/messages"
                          >
                            <IoChatbubbleOutline className="mr-2" />
                            <span>Messages</span>
                          </Link>
                          <Link
                            className="link px-4 py-2 hover:bg-[#e9e9e9] flex items-center text-[#333] text-lg font-medium"
                            to="/settings"
                          >
                            <IoSettingsOutline className="mr-2" />
                            <span>Settings</span>
                          </Link>
                          <button
                            className="link px-4 py-2 hover:bg-[#e9e9e9] flex items-center text-[#333] text-lg font-medium"
                            onClick={handleLogout}
                          >
                            <IoLogOutOutline className="mr-2" />
                            <span>Log out</span>
                          </button>
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
