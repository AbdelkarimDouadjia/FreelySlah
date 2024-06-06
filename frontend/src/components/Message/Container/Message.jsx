import React from "react";

const Message = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-start">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="avatar"
          />
        </div>
      </div>
      <div className="ml-4">
        <div className="bg-gray-700 text-white rounded-lg p-3 text-xl">
          سلام
        </div>
        <div className="text-gray-700 text-xs mt-1">14:45</div>
      </div>
    </div>
  );
};

export default Message;
