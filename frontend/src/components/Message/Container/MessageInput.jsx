import { IoSend } from "react-icons/io5";
import { AiOutlinePaperClip } from "react-icons/ai";
import React, { useState } from "react";

const MessageInput = () => {
  const [files, setFiles] = useState([]);

  const handleAttachmentClick = () => {
    document.getElementById("file-input").click();
  };

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((currentFiles) => currentFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending files", files);
    setFiles([]);
    document.getElementById("file-input").value = null;
  };

  return (
    <form
      className="px-4 my-3 flex flex-col items-center relative"
      onSubmit={handleSubmit}
    >
      <input
        type="file"
        id="file-input"
        style={{ display: "none" }}
        multiple
        onChange={handleFileChange}
      />
      <div className="flex flex-wrap justify-start items-center w-full mb-2 p-2 gap-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-200 text-black px-2 py-1 rounded"
          >
            <span className="text-sm truncate max-w-xs">{file.name}</span>
            <button
              type="button"
              onClick={() => removeFile(index)}
              className="ml-2 text-red-500"
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center">
        <button
          type="button"
          className="absolute left-0 flex items-center pl-5"
          onClick={handleAttachmentClick}
        >
          <AiOutlinePaperClip className="text-gray-900 w-6 h-6 sm:w-8 sm:h-8" />
        </button>
        <input
          type="text"
          placeholder="Send a message…"
          className="input input-bordered rounded-full p-2.5 mr-12 ml-10 bg-gray-300 border border-black flex-1 text-sm sm:text-base"
        />
        <button
          type="submit"
          className="absolute right-0 flex items-center pr-7"
        >
          <IoSend className="text-gray-900 w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
