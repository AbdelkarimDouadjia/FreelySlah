import React from "react";

const GigForm = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-4xl bg-white p-6 rounded-md shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-sm mb-4 sm:mb-0">
            <span className="text-green-500 font-bold">1</span>
            <span>Overview</span>
            <span className="text-gray-400"> &gt; </span>
            <span>2 Pricing</span>
            <span className="text-gray-400"> &gt; </span>
            <span>3 Description & FAQ</span>
            <span className="text-gray-400"> &gt; </span>
            <span>4 Requirements</span>
            <span className="text-gray-400"> &gt; </span>
            <span>5 Gallery</span>
            <span className="text-gray-400"> &gt; </span>
            <span>6 Publish</span>
          </div>
          <button className="bg-white border border-gray-300 rounded px-4 py-2">
            Save
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-1">Gig title</label>
            <input
              type="text"
              placeholder="I will do something I'm really good at"
              maxLength="80"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Category</label>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select a category</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select a subcategory</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Search tags</label>
            <input
              type="text"
              placeholder="Positive keywords"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">Negative keywords</label>
            <input
              type="text"
              placeholder="Negative keywords"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <p className="text-xs text-gray-500 mb-4">
            Please note: Some categories require that sellers verify their
            skills.
          </p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default GigForm;
