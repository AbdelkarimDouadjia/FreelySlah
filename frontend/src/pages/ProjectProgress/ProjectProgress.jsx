import React, { useState } from "react";

const ProgressProjectPage = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    return JSON.parse(localStorage.getItem("currentUser"));
  });
  const [progress, setProgress] = useState(50); // Example progress percentage
  const [files, setFiles] = useState([
    {
      name: "example.pdf",
      url: "#",
    },
  ]);
  const [newProgress, setNewProgress] = useState(progress);

  const handleUpload = (event) => {
    // Handle file upload logic here
    const uploadedFile = {
      name: event.target.files[0].name,
      url: URL.createObjectURL(event.target.files[0]),
    };
    setFiles([...files, uploadedFile]);
  };

  const handleProgressUpdate = () => {
    // Update the progress state with the new progress
    setProgress(newProgress);
  };

  return (
    <div className="w-full mx-auto min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] px-4 py-16 min-h-screen">
      <h1 className="text-5xl font-medium mb-8">Project Progress</h1>

      <div className="bg-white shadow-md border border-[#D9D9D9] rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Progress</h2>
        </div>
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-green-600 h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p>{progress}% completed</p>
        </div>

        {currentUser.isSeller && (
          <div className="mt-4">
            <label
              htmlFor="progress"
              className="block text-sm font-medium text-gray-700"
            >
              Update Progress
            </label>
            <div className="mt-1 flex">
              <input
                type="number"
                id="progress"
                name="progress"
                value={newProgress}
                onChange={(e) => setNewProgress(Number(e.target.value))}
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                min="0"
                max="100"
              />
              <button
                onClick={handleProgressUpdate}
                className="ml-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Update
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white shadow-md border border-[#D9D9D9] rounded-2xl p-6 mb-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Files</h2>
        </div>
        <div className="mt-4">
          {files.map((file, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <a
                href={file.url}
                download={file.name}
                className="text-green-600 hover:underline"
              >
                {file.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      {currentUser.isSeller && (
        <div className="bg-white shadow-md border border-[#D9D9D9] rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Upload Work</h2>
          </div>
          <div className="mt-4">
            <input
              type="file"
              onChange={handleUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-green-600 file:text-white
                hover:file:bg-green-500"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProgressProjectPage;
