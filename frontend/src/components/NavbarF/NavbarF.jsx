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
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoInformationCircleOutline,
  IoRefreshCircleOutline,
  IoBriefcaseOutline as IoBriefcase,
} from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
function NavbarF() {
  const navigate = useNavigate();
  const sticky = useStickyMenu(50);
  const [open, setOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: <IoCheckmarkCircleOutline className="text-green-500" />,
      message: "Delivery Successful to Toot",
      details: "Order #34567 had been placed.",
      time: "5 min",
    },
    {
      id: 2,
      icon: <IoRefreshCircleOutline className="text-blue-500" />,
      message: "Process refund from Micky",
      details: "Reference number #10321",
      time: "12 min",
    },
    {
      id: 3,
      icon: <IoInformationCircleOutline className="text-blue-500" />,
      message: "Survey Completed",
      details: "134 Customers Answers finished...",
      time: "17 min",
    },
    {
      id: 4,
      icon: <IoCloseCircleOutline className="text-red-500" />,
      message: "Payment failed from Sandra",
      details: "Reference number #10321",
      time: "23 min",
    },
    {
      id: 5,
      icon: <IoCheckmarkCircleOutline className="text-green-500" />,
      message: "Delivery Successful to Sandra",
      details: "Order #34567 had been placed.",
      time: "23 min",
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

  const [searchFilterOpen, setSearchFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Talent");
  const toggleSearchFilter = () => {
    setSearchFilterOpen(!searchFilterOpen);
  };

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setSearchFilterOpen(false);
  };

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
        className={`header-nav nav-homepage-style stricky main-menu animated bg-white  border-[#E9E9E9] py-[15px] border px-0 max-[992px]:hidden lg-b:block  text-[15px] font-normal text-[#6B7177] leading-[28px] transition-all duration-300 ease-linear z-[99] ${
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
                  <div className="relative mr-10">
                    <div className="flex items-center border border-gray-300 rounded-3xl hover:bg-[#E9E9E9]   group2 text-[#333] ">
                      <div className="px-2 py-1 outline-none w-[300px] hover:bg-[#F9F9F9] flex items-center justify-start group rounded-3xl  focus:bg-[#F9F9F9] focus:rounded-3xl  focus:shadow-md focus:border focus:border-[#A4A4A4] focus-within:border-2 focus-within:border-[#A4A4A4] focus-within:rounded-3xl focus-within:shadow-md">
                        <GoSearch className="text-[#222] text-[20px] mx-2" />
                        <input
                          type="text"
                          placeholder="Search"
                          className="outline-none bg-transparent group-hover:bg-[#F9F9F9] w-full placeholder:text-[#333] "
                        />
                      </div>
                      <div className="relative w-1/3">
                        <button
                          onClick={toggleSearchFilter}
                          className="flex items-center justify-center px-2 border-l border-gray-300 hover:bg-[#F9F9F9] hover:rounded-3xl py-1 group-hover:border-l-0 group-hover:border-r-0 w-full group-hover:rounded-3xl group-focus:rounded-3xl group-focus:border-r-0 group-focus:border-l-0 focus-within:border-2 focus-within:border-[#A4A4A4] focus-within:rounded-3xl focus-within:shadow-md"
                        >
                          {selectedFilter} <IoIosArrowDown className="ml-2" />
                        </button>
                        {searchFilterOpen && (
                          <div className="absolute right-0 mt-1 w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg z-50 text-base font-medium text-[#333]">
                            <ul>
                              <li
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                                onClick={() => selectFilter("Talent")}
                              >
                                <GoPeople className="mr-2 text-xl" />
                                <span>Talent</span>
                              </li>
                              <li
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                                onClick={() => selectFilter("Projects")}
                              >
                                <IoBriefcase className="mr-2" />
                                <span>Projects</span>
                              </li>
                              <li
                                className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center"
                                onClick={() => selectFilter("Product")}
                              >
                                <BsBoxSeam className="mr-2" />
                                <span>Product</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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
                  {/* Notification */}
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
                                  <Link to="#" className="flex items-start">
                                    <div className="mr-2">
                                      {notification.icon}
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-800">
                                        {notification.message}
                                      </p>
                                      <p className="text-xs text-gray-600">
                                        {notification.details}
                                      </p>
                                      <p className="text-xs text-gray-400">
                                        {notification.time}
                                      </p>
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
                  {/* user img */}
                  {currentUser && (
                    <div
                      className="user flex items-center gap-2 cursor-pointer relative mr-10"
                      onClick={() => setOpen(!open)}
                    >
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={
                          currentUser.img || "https://via.placeholder.com/150"
                        }
                        alt=""
                      />
                      <span>
                        {currentUser?.displayName || currentUser?.fname}
                      </span>
                      {/* Dropdown user start from here */}
                      {open && (
                        <div className="options absolute top-[50px] right-0 bg-white rounded-lg border border-gray-300 flex flex-col w-[250px] font-light z-50 shadow-md">
                          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
                            <img
                              className="w-12 h-12 rounded-full object-cover"
                              src={
                                currentUser.img ||
                                "https://via.placeholder.com/150"
                              }
                              alt=""
                            />
                            <div className="flex flex-col overflow-hidden">
                              <p className="font-medium text-gray-800 truncate">
                                {currentUser?.displayName || currentUser?.fname}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {currentUser?.email}
                              </p>
                            </div>
                          </div>
                          <div className="py-2">
                            {currentUser?.isSeller && (
                              <>
                                <Link
                                  className="link px-4 py-3 hover:bg-gray-100 flex items-center text-black text-base font-medium"
                                  to="/settings"
                                >
                                  <IoSettingsOutline className="mr-4 text-lg" />
                                  <span>Account Settings</span>
                                </Link>
                                <Link
                                  className="link px-4 py-3 hover:bg-gray-100 flex items-center text-black text-base font-medium"
                                  to="/mygigs"
                                >
                                  <IoBriefcaseOutline className="mr-4 text-lg" />
                                  <span>Manage Services</span>
                                </Link>
                                <Link
                                  className="link px-4 py-3 hover:bg-gray-100 flex items-center text-black text-base font-medium"
                                  to="/createservice"
                                >
                                  <IoAddCircleOutline className="mr-4 text-lg" />
                                  <span>Create new Service</span>
                                </Link>
                              </>
                            )}
                            <Link
                              className="link px-4 py-3 hover:bg-gray-100 flex items-center text-black text-base font-medium"
                              to="/orders"
                            >
                              <IoBagCheckOutline className="mr-4 text-lg" />
                              <span>Orders</span>
                            </Link>
                            <Link
                              className="link px-4 py-3 hover:bg-gray-100 flex items-center text-black text-base font-medium"
                              to="/messages"
                            >
                              <IoChatbubbleOutline className="mr-4 text-lg" />
                              <span>Messages</span>
                            </Link>
                            <button
                              className="link px-4 py-3 hover:bg-gray-100 flex items-center text-black text-base font-medium w-full text-left"
                              onClick={handleLogout}
                            >
                              <IoLogOutOutline className="mr-4 text-lg" />
                              <span>Log out</span>
                            </button>
                          </div>
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
