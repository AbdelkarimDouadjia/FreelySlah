import React, { useState } from "react";
import {
  FaFileUpload,
  FaTrash,
} from "react-icons/fa";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = () => {
    setUploading(true);
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      // Handle upload success or failure
    }, 2000);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <h4 className="text-[20px] font-normal text-[#222] leading-[1.3125] mt-0 mb-[30px]">
          Upload Files
        </h4>
        <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg">
          <label className="flex items-center justify-center h-full cursor-pointer">
            <FaFileUpload className="text-2xl text-[#5bbb7b] mr-2" />
            <span className="text-[#5bbb7b]">
              Drag & drop your files here or
            </span>
            <input
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
      </div>
      {files.length > 0 && (
        <div className="mb-4">
          <h5 className="text-[16px] font-medium text-[#222] mb-2">
            Uploaded Files
          </h5>
          <ul>
            {files.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b border-gray-200 py-2"
              >
                <span>{file.name}</span>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => {
                    const newFiles = files.filter((_, i) => i !== index);
                    setFiles(newFiles);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="text-right">
        <button
          className="bg-[#5bbb7b] text-white py-2 px-4 rounded-lg"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Attach files"}
        </button>
      </div>
    </div>
  );
};

export default FileUpload;
