import React from "react";

const Overview = () => (
  <div>
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
      <div className="flex space-x-2">
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
      Please note: Some categories require that sellers verify their skills.
    </p>
  </div>
);

export default Overview;
