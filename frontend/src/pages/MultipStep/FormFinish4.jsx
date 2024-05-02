import React, { useContext, useState } from "react";
import AppContext from "./Context";
import "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequest from "../../utils/newRequest";

const FormFinish = () => {
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  //if there the user is not found in the local storage then we will redirect the user to the login page
  if (!userInfo) {
    navigate("/login");
  }

  const [error, setError] = useState(null);
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const name = updateContext.userName;
  console.log(updateContext);

  const finish = async () => {
    try {
      const img = await updateContext.userImg;
      console.log(img === undefined ? img : userInfo.img);
      //if the img promise is vide then we will use the old image from userInfo.img

      const res = await newRequest.post("/stepper/welcome", {
        _id: `${userInfo._id}`,
        username: `${updateContext.userName}`,
        displayName: `${updateContext.userDisplayName}`,
        dob: `${updateContext.userDOB}`,
        desc: `${updateContext.userDescription}`,
        gender: `${updateContext.userGender}`,
        phone: `${updateContext.userPhone}`,
        isSeller: `${updateContext.isSeller}`,
        userIdType: `${updateContext.userIdType}`,
        userIdNumber: `${updateContext.userIdNumber}`,
        userIssuedD: `${updateContext.userIssuedD}`,
        userExpiredD: `${updateContext.userExpiredD}`,
        userOccupation: `${updateContext.userOccupation}`,
        ...(img === null ? { img: `${userInfo.img}` } : { img: `${img}` }),
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      //   navigate("/");
      // Show success notification
      toast.success("welcome", { position: "top-right" });
    } catch (err) {
      setError(err.response.data);
      console.log(error);
      // Show error notification
      toast.error(error, {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <div className="scroll flex flex-col items-center justify-center gap-3 bg-[#F9F9F9] min-h-[84vh]">
        <form className="px-4 md-b:max-w-[700px] text-center">
          <div className="w-full flex items-center justify-center my-5 overflow-hidden ">
            <img
              className="done mx-auto w-40 h-40 z-20"
              src="/src/assets/success.png"
              alt="success"
            />
            <img
              className="done mx-auto w-72 h-64 absolute z-10"
              src="/src/assets/party.png"
              alt="success"
            />
          </div>
          <h2 className="text-lg md-b:text-xl font-bold !text-[#333] !z-30 relative">
            Congratulation {name} ! You are all set up now 👌
          </h2>
          <h4 className="text-xs text-[#00000099]">
            You have completed your profile set up successfully, you can now
            start using the FreelySlah ✨
          </h4>

          <button
            className="border mt-8 w-fit font-bold px-7 py-[5px] text-lg   border-[#1DBF73] !bg-[#0E9F6E]  hover:!bg-[#046c4e] text-white rounded-md   "
            type="submit"
            onClick={finish}
          >
			Finish
          </button>
          {/* Handle notifications */}
          <ToastContainer />
        </form>
      </div>
    </>
  );
};

export default FormFinish;
