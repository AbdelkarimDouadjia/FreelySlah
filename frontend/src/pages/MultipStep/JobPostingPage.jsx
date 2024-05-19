import React from "react";

const JobPostingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">Job details</h1>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Job title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            value="Build responsive WordPress site with booking/payment functionality"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            rows="3"
            readOnly
          >
            my work is about something I can’t tell you about it right now
          </textarea>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            value="Web Design"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Skills
          </label>
          <div className="flex flex-wrap gap-2">
            {["Framer", "CSS", "PHP", "Web Design"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Scope
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            value="Medium, 1 to 3 months, Intermediate level, Not planning to hire full time"
            readOnly
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Budget
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500"
            value="$15.00 - $30.00 /hr"
            readOnly
          />
        </div>

        <div className="flex justify-end">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
            Post this job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostingPage;
