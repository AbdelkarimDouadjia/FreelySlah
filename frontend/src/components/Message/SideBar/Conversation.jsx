import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-[#5BBB7B] rounded p-2 py-1 cursor-pointer hover:text-white mt-9">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="avatar"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between">
            <p className="font-bold text-black hover:text-white">Louiza</p>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-300 my-2" />
    </>
  );
};

export default Conversation;
