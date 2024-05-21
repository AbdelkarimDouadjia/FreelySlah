import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-[#0E9F6E] rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className=" gap-5 justify-between">
            <p className="font-bold text-black">louiza</p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-3" />
    </>
  );
};

export default Conversation;
