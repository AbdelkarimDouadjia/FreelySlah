import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineEdit } from "react-icons/md";
import {
  FaGithub,
  FaStackOverflow,
  FaDribbble,
  FaTwitter,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import newRequest from "../../../utils/newRequest";

const ProfileSettings = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [experienceLevel, setExperienceLevel] = useState("intermediate");
  const [linkedAccounts, setLinkedAccounts] = useState({
    GitHub: true,
    StackOverflow: true,
    Dribbble: false,
    Twitter: false,
  });

  const toggleAccount = (account) => {
    setLinkedAccounts((prev) => ({
      ...prev,
      [account]: !prev[account],
    }));
  };

  const handleIDSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { userIdType, userIdNumber, userIssuedD, userExpiredD } =
      Object.fromEntries(formData);
    console.log(userIdType, userIdNumber, userIssuedD, userExpiredD);
    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        userIdType,
        userIdNumber,
        userIssuedD,
        userExpiredD,
      });
      updateUser(res.data);
      setIsEditing(false);
      navigate("/settings/profile-settings");
      toast.success("Information updated successfully!");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      toast.error(error);
    }
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
          <form onSubmit={handleIDSubmit} className="bg-white">
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
                name="userIdType"
                defaultValue={currentUser.userIdType}
              >
                <option value="">Select ID Type</option>
                <option value="Passport">Passport</option>
                <option value="Driver License">Driver&apos;s License</option>
                <option value="National ID">National ID</option>
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
                name="userIdNumber"
                defaultValue={currentUser.userIdNumber}
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
                name="userIssuedD"
                defaultValue={currentUser.userIssuedD}
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
                name="userExpiredD"
                defaultValue={currentUser.userExpiredD}
              />
            </div>
            <div className="flex items-center mt-7">
              <button
                className="px-5 py-2 !bg-[#0E9F6E] text-white rounded-3xl hover:bg-[#046c4e] mr-5"
                type="submit"
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
          </form>
        ) : (
          <div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">ID Type:</p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.userIdType || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                ID Number:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.userIdNumber || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Issued Date:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.userIssuedD || "N/A"}
              </p>
            </div>
            <div className="flex items-center mb-5">
              <p className="text-lg font-medium text-gray-800 mr-7">
                Expired Date:
              </p>
              <p className="text-lg font-medium text-gray-800">
                {currentUser.userExpiredD || "N/A"}
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
