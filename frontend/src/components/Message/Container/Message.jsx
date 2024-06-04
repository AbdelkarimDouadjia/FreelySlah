import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div className={`chat-bubble text-white pb-2 text-xl`}>سلام</div>
      <div className="chat-footer  text-gray-700 opacity-100 text-xs flex gap-1 items-center">
        14:45
      </div>
    </div>
  );
};

export default Message;
