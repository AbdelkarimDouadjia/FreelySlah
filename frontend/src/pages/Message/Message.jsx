import React from "react";
import MessageContainer from "../../components/Message/Container/MessageContainer";
import SideBar from "../../components/Message/SideBar/SideBar";

const Message = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-[#fcfcfc] border border-gray-800 bg-clip-padding  ml-5 mr-5 mb-10 mt-10">
      <div className="w-1/4 min-w-[200px]">
        {" "}
        {/* Adjust the width as needed */}
        <SideBar />
      </div>
      <div className="border-r border-black" />
      <div className="flex-grow">
        <MessageContainer />
      </div>
    </div>
  );
};

export default Message;
