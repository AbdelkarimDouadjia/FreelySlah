// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white p-4 relative">
      <nav className="space-y-4">
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Billing</h3>
          <ul className="space-y-2 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full before:bg-[#D9D9D9]">
            <li className="py-[7px]">
              <NavLink
                to="/settings/billing-payments"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Billing & Payments
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-7">
            User Settings
          </h3>
          <ul className="space-y-2 relative pl-4 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.60px] before:h-full before:bg-[#D9D9D9]">
            <li className="py-[7px]">
              <NavLink
                to="/settings/contact-info"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Contact Info
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/profile-settings"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Profile Settings
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/editmyprofile"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                My Profile
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/get-paid"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Get Paid
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/password-security"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Password & Security
              </NavLink>
            </li>
            {/*<li className="py-[7px]">
              <NavLink
                to="/settings/tax-information"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Tax Information
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/tax-forms"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Tax Forms
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/my-teams"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                My Teams
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/connected-services"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Connected Services
              </NavLink>
            </li>
            <li className="py-[7px]">
              <NavLink
                to="/settings/notification-settings"
                className={({ isActive }) =>
                  isActive
                    ? "text-green-600 font-medium relative before:absolute	 text-base before:-left-4 before:top-0 before:bottom-0 before:w-[1.65px] before:bg-green-600 before:h-full py-[7px]"
                    : "text-gray-500 hover:text-green-600 font-medium text-base relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1.65px] before:h-full py-[7px] before:bg-transparent"
                }
              >
                Notification Settings
              </NavLink>
              </li>*/}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
