import React, { useState } from "react";

const Overview = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const data = {
    workInProgress: [
      { id: 1, title: "Project 1", description: "Description of project 1" },
      { id: 2, title: "Project 2", description: "Description of project 2" },
    ],
    inReview: [
      { id: 3, title: "Project 3", description: "Description of project 3" },
      { id: 4, title: "Project 4", description: "Description of project 4" },
    ],
    pending: [
      { id: 5, title: "Project 5", description: "Description of project 5" },
      { id: 6, title: "Project 6", description: "Description of project 6" },
    ],
    available: [
      { id: 7, title: "Project 7", description: "Description of project 7" },
      { id: 8, title: "Project 8", description: "Description of project 8" },
    ],
  };

  const renderCards = () => {
    if (!selectedBlock) {
      return null;
    }
    return data[selectedBlock].map((item) => (
      <div key={item.id} className="p-4 border rounded shadow-sm mb-4">
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-700">{item.description}</p>
      </div>
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div
          className="p-4 border rounded shadow-sm text-center cursor-pointer"
          onClick={() => setSelectedBlock("workInProgress")}
        >
          <h2 className="text-lg font-semibold text-green-600">
            Work in progress
          </h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div
          className="p-4 border rounded shadow-sm text-center cursor-pointer"
          onClick={() => setSelectedBlock("inReview")}
        >
          <h2 className="text-lg font-semibold text-gray-600">In review</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div
          className="p-4 border rounded shadow-sm text-center cursor-pointer"
          onClick={() => setSelectedBlock("pending")}
        >
          <h2 className="text-lg font-semibold text-yellow-600">Pending</h2>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div
          className="p-4 border rounded shadow-sm text-center cursor-pointer"
          onClick={() => setSelectedBlock("available")}
        >
          <h2 className="text-lg font-semibold text-gray-800">Available</h2>
          <p className="text-2xl font-bold">$0.00</p>
          <p className="text-sm text-gray-600">Last payment: $0.00</p>
        </div>
      </div>
      <div>{renderCards()}</div>
      <div className="mt-8 text-center text-gray-600">
        <p>Note: this report is updated every hour.</p>
      </div>
      {!selectedBlock && (
        <div className="mt-12 text-center text-gray-600">
          <p>You have no work in progress</p>
        </div>
      )}
    </div>
  );
};

export default Overview;
