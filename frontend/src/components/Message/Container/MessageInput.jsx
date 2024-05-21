import { IoSend } from "react-icons/io5";
const MessageInput = () => {
  return (
    <form className="px-4 my-3 flex items-center relative">
      <input
        type="text"
        className="border text-sm rounded-lg block w-full p-2.5 pl-3 pr-10 bg-gray-700 border-gray-600 text-white bg-gray-300"
        placeholder="Send a message"
      />
      <button
        type="submit"
        className="absolute inset-y-0 right-0 flex items-center pr-7 "
      >
        <IoSend className="text-gray-900 w-5 h-5" />
      </button>
    </form>
  );
};
export default MessageInput;
