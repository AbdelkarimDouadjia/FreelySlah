import React, { useContext, useState } from "react";
import { MdOutlineEdit, MdOutlineCheck } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../../Create Service/CreateService.module.css";
import { AuthContext } from "../../../context/AuthContext";
import newRequest from "../../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const PasswordSecurity = () => {
  const { currentUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const [showEditPasswordModal, setShowEditPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [containsNumber, setContainsNumber] = useState(false);
  const [containsSymbol, setContainsSymbol] = useState(false);

  const openEditPasswordModal = () => {
    setShowEditPasswordModal(true);
  };

  const handleEditPassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }

    const formData = new FormData(e.target);
    const { password } = Object.fromEntries(formData);

    try {
      const res = await newRequest.put(`/users/${currentUser._id}`, {
        password,
      });
      updateUser(res.data);
      // Implement your password update logic here
      setShowEditPasswordModal(false);
      navigate("/settings/password-security");
      toast.success("Password updated successfully");
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
      toast.error(error);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);

    // Check for numbers and symbols
    const containsNum = /\d/.test(value);
    const containsSym = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    setContainsNumber(containsNum);
    setContainsSymbol(containsSym);

    // Check password strength
    if (value.length >= 8 && containsNum && containsSym) {
      setPasswordStrength("Strong");
    } else {
      setPasswordStrength("Not strong");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl tracking-tighter font-medium mb-4">
        Password & security
      </h2>
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <h3 className="text-2xl font-medium tracking-tighter mb-2">
          Authentication options
        </h3>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-xl font-medium mb-3">Password</h4>
              <div className="flex text-lg items-center text-green-600 mb-3">
                <MdOutlineCheck className="border rounded-[50%] border-green-600 !font-bold text-xl text-green-600 p-[2px] mr-2" />
                Password has been set
              </div>
              <p className="text-gray-500 text-md pl-8 pr-2">
                You currently use{" "}
                <a href="#" className="text-blue-600 underline">
                  Google Sign-in
                </a>{" "}
                to login. We will only ask for your FreelySlah password if we
                need to verify your identity.
              </p>
            </div>
            <div className="flex items-center">
              <button
                onClick={openEditPasswordModal}
                className="text-[#209211] flex items-center justify-center border rounded-[50%] border-[#E6E6E6] text-lg p-[5px] hover:bg-[#F9F9F9]  mr-2"
              >
                <MdOutlineEdit />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Password Modal */}
      {showEditPasswordModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <form
            onSubmit={handleEditPassword}
            className="bg-white rounded-xl shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-w-[740px]"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-3xl font-semibold">Edit Password</h3>
              <button
                onClick={() => setShowEditPasswordModal(false)}
                className="text-gray-600 hover:text-gray-900 !text-5xl"
              >
                &times;
              </button>
            </div>
            <div className="px-3 overflow-x-auto min-h-fit">
              {/* <div className="mb-7">
                <label className="text-[#333] font-medium text-xl mb-3">
                  Old Password
                </label>
                <input
                  type="password"
                  className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div> */}
              <div className="mb-7">
                <div className="flex justify-between items-center">
                  <label className="text-[#333] font-medium text-xl mb-3">
                    New Password
                  </label>
                  <div className="flex items-center">
                    <div
                      className={`${styles.checkboxContainer} flex items-center mb-2 justify-center`}
                    >
                      <input
                        type="checkbox"
                        checked={showNewPassword}
                        onChange={() => setShowNewPassword(!showNewPassword)}
                        className="mr-2 flex-1"
                      />
                    </div>
                    <label className="text-sm">Show new password</label>
                  </div>
                </div>
                <input
                  type={showNewPassword ? "text" : "password"}
                  className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  name="password"
                />
                <div className="mt-2 flex items-center">
                  <span
                    className={`text-sm ${
                      passwordStrength === "Strong"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {passwordStrength}
                  </span>
                  <div className="flex items-center ml-auto">
                    <span
                      className={`text-sm ${
                        containsNumber ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      Numbers
                    </span>
                    <span
                      className={`text-sm ml-2 ${
                        containsSymbol ? "text-green-600" : "text-yellow-600"
                      }`}
                    >
                      Symbols
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <label className="text-[#333] font-medium text-xl mb-3">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="block p-2 w-full input bg-[#ffffff] focus:outline-none focus:border-[#2525258a] 
                   focus-within:outline-none focus-within:border placeholder:text-sm placeholder:text-[#BEB5C3] text-gray-600"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowEditPasswordModal(false)}
                className="px-4 py-2 mr-2 text-[#0E9F6E]"
              >
                Cancel
              </button>
              <button
                //onClick={handleEditPassword}
                className="px-5 py-2 !bg-[#0E9F6E] !text-white rounded-3xl hover:!bg-[#046c4e]"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default PasswordSecurity;
