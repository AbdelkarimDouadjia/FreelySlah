import React, { useContext, useState } from "react";
import AppContext from "./Context";
import "./styles.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import newRequest from "../../utils/newRequest";

const FormFinish = () => {
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));
  const [error, setError] = useState(null);
  const myContext = useContext(AppContext);
  const updateContext = myContext.userDetails;

  const name = updateContext.userName;

  const finish = async () => {
    console.log(updateContext.img);
    //if the userContext.userImg is not a promise
    //then we can directly use it
    // if (!updateContext.userImg.then) {
    //   updateContext.userImg = userInfo.img;
    // }

    try {
      await newRequest.post("/stepper/welcome", {
        _id: `${userInfo._id}`,
        username: `${updateContext.userName}`,
        displayName: `${updateContext.userDisplayName}`,
        dob: `${updateContext.userDOB}`,
        desc: `${updateContext.userDescription}`,
        gender: `${updateContext.userGender}`,
        //this is promise so we need to wait for the promise to resolve, so we use await
        img: `${
          updateContext.userImg.then ? updateContext.userImg : userInfo.img
        }`,
        phone: `${updateContext.userPhone}`,
        userIdType: `${updateContext.userIdType}`,
        userIdNumber: `${updateContext.userIdNumber}`,
        userIssuedD: `${updateContext.userIssuedD}`,
        userExpiredD: `${updateContext.userExpiredD}`,
        userOccupation: `${updateContext.userOccupation}`,
      });
      // navigate("/");
      // Show success notification
      toast.success("Signup successful!", { position: "top-right" });
    } catch (err) {
      setError(err.response.data);
      // Show error notification
      toast.error(error || "Signup failed. Please try again.", {
        position: "top-right",
      });
    }
  };
  return (
    <div className="container">
      <p>Successfully Submitted</p>
      <p>Thanks for {name} your details</p>
      <img
        className="done text-center"
        src="https://www.svgrepo.com/show/13650/success.svg"
        alt="successful"
      />
      <button className="doneSubmit" onClick={finish}>
        Done
      </button>

      {/* Handle notifications */}
      <ToastContainer />
    </div>
  );
};

export default FormFinish;
