import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEdit } from "react-icons/md";
import {
  FaGithub,
  FaStackOverflow,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";

const ProfileSettings = () => {
  const [idType, setIdType] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [issuedDate, setIssuedDate] = useState("");
  const [expiredDate, setExpiredDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState("intermediate");
  const [linkedAccounts, setLinkedAccounts] = useState({
    GitHub: true,
    StackOverflow: true,
    Dribbble: false,
    Twitter: false,
  });

  const handleUpdate = () => {
    if (!idType) {
      toast.error("Please select your ID Type");
    } else if (!idNumber) {
      toast.error("Please enter your ID Number");
    } else if (!issuedDate) {
      toast.error("Please enter your Issued Date");
    } else if (!expiredDate) {
      toast.error("Please enter your Expired Date");
    } else {
      toast.success("Information updated successfully!");
      setIsEditing(false);
      // Handle the form submission logic
    }
  };

  const toggleAccount = (account) => {
    setLinkedAccounts((prev) => ({
      ...prev,
      [account]: !prev[account],
    }));
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl tracking-tighter font-medium mb-7">
        Profile Settings
      </h2>

      {/* Identity Verification */}
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <div className="full flex justify-between items-center mb-4">
          <h2 className="text-2xl font-medium tracking-tighter">
            Identity Verification
          </h2>
          <div className="flex items-center">
            {!isEditing && (
              <button
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9] mr-2"
                onClick={() => setIsEditing(true)}
              >
                <MdOutlineEdit />
              </button>
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="bg-white">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="id-type"
              >
                ID Type
              </label>
              <select
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="id-type"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option value="">Select ID Type</option>
                <option value="passport">Passport</option>
                <option value="driver_license">Driver&apos;s License</option>
                <option value="national_id">National ID</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="id-number"
              >
                ID Number
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="id-number"
                type="text"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="issued-date"
              >
                Issued Date
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="issued-date"
                type="date"
                value={issuedDate}
                onChange={(e) => setIssuedDate(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expired-date"
              >
                Expired Date
              </label>
              <input
                className="w-full border p-2 rounded-lg py-2 px-3 focus-within:border-[#3e3e3e5f] focus-within:outline-none hover:border-[#3e3e3e5f] focus:border-[#3e3e3e5f]"
                id="expired-date"
                type="date"
                value={expiredDate}
                onChange={(e) => setExpiredDate(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-7">
              <button
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                type="button"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="text-[#0E9F6E] font-medium hover:underline"
                type="button"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">ID Type:</p>
              <p className="text-lg font-medium text-gray-800">
                {idType || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                ID Number:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {idNumber || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Issued Date:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {issuedDate || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Expired Date:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {expiredDate || "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Experience Level */}
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <h2 className="text-2xl font-medium tracking-tighter mb-7">
          Experience Level
        </h2>
        <div className="flex justify-between">
          <button
            className={`border rounded-xl py-7 px-5 w-1/3 text-left ${
              experienceLevel === "entry" ? "border-[#0E9F6E]" : ""
            }`}
            onClick={() => setExperienceLevel("entry")}
          >
            <p className="text-lg font-medium mb-2">Entry level</p>
            <p className="text-gray-600">I am relatively new to this field</p>
          </button>
          <button
            className={`border rounded-xl py-7 px-5 w-1/3 mx-2 text-left ${
              experienceLevel === "intermediate" ? "border-[#0E9F6E]" : ""
            }`}
            onClick={() => setExperienceLevel("intermediate")}
          >
            <p className="text-lg font-medium mb-2">Intermediate</p>
            <p className="text-gray-600">
              I have substantial experience in this field
            </p>
          </button>
          <button
            className={`border rounded-xl py-7 px-5 w-1/3 text-left ${
              experienceLevel === "expert" ? "border-[#0E9F6E]" : ""
            }`}
            onClick={() => setExperienceLevel("expert")}
          >
            <p className="text-lg font-medium mb-2">Expert</p>
            <p className="text-gray-600">
              I have comprehensive and deep expertise in this field
            </p>
          </button>
        </div>
      </div>

      {/* Linked Accounts */}
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <h2 className="text-2xl font-medium tracking-tighter mb-7">
          Linked Accounts
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: "GitHub", icon: <FaGithub /> },
            { name: "StackOverflow", icon: <FaStackOverflow /> },
            { name: "Dribbble", icon: <FaDribbble /> },
            { name: "Twitter", icon: <FaTwitter /> },
          ].map((account) => (
            <div
              key={account.name}
              className={`flex justify-between items-center border rounded-xl px-5 py-3 cursor-pointer ${
                linkedAccounts[account.name] ? "border-[#0E9F6E]" : ""
              }`}
              onClick={() => toggleAccount(account.name)}
            >
              <div className="flex items-center">
                <div
                  className={`text-2xl mr-3 ${
                    linkedAccounts[account.name] ? "text-[#0E9F6E]" : ""
                  }`}
                >
                  {account.icon}
                </div>
                <p className="text-lg font-medium">{account.name}</p>
              </div>
              <div
                className={`text-2xl ${
                  linkedAccounts[account.name] ? "text-[#0E9F6E]" : ""
                }`}
              >
                {linkedAccounts[account.name] ? "✓" : "✕"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ProfileSettings;
