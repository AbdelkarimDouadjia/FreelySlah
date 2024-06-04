// MessageContainer.js
import React, { useState, useRef } from "react";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import useOutsideAlerter from "./useOutsideAlerter"; // Make sure the path is correct

const MessageContainer = () => {
  const noChatSelected = false;
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  useOutsideAlerter(menuRef, () => setMenuVisible(false)); // Hook to handle outside clicks

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-[#5BBB7B] px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Jhon"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Louiza
              </span>
            </div>

            <button onClick={toggleMenu} className="text-white mb-2">
              <BsThreeDotsVertical size={30} />
            </button>
            {menuVisible && (
              <ul
                ref={menuRef}
                className="absolute right-20 mt-24 w-48 bg-white rounded shadow-lg"
              >
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                  onClick={() => alert("Visiting Profile...")}
                >
                  Visit Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                  onClick={() => alert("Deleting Conversation...")}
                >
                  Delete Conversation
                </li>
              </ul>
            )}
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Louiza </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
