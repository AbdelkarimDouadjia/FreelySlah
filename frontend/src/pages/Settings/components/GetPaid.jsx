import React from "react";

const GetPaid = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl tracking-tighter font-medium mb-4">Get paid</h2>
      <div className="bg-white shadow-sm border border-[#D9D9D9] rounded-2xl p-7 mb-7">
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-medium tracking-tighter mb-4">
            Available balance
          </span>
          <span className="text-xl font-bold text-green-600">$0.00</span>
        </div>
        <div className="text-gray-500 text-sm mb-6">+$0.00 pending</div>

        {/*  
	    <div className="bg-yellow-100 border border-yellow-300 p-3 mb-4 rounded-lg">
          <p className="text-yellow-800">
            <strong>!</strong> To withdraw earnings, please update your{" "}
            <a href="#" className="text-blue-600 underline">
              tax information
            </a>
            . For more details, read our{" "}
            <a href="#" className="text-blue-600 underline">
              FAQs
            </a>
            .
          </p>
        </div>
        <div className="bg-yellow-100 border border-yellow-300 p-3 mb-6 rounded-lg">
          <p className="text-yellow-800">
            <strong>!</strong> You have no active withdrawal methods. Please{" "}
            <a href="#" className="text-blue-600 underline">
              add a new method
            </a>
            .
          </p>
        </div>
		*/}
        <button
          className="w-fit bg-gray-200 text-gray-400 font-semibold py-[10px] px-6 rounded-2xl cursor-not-allowed hover:cursor-not-allowed"
          disabled
        >
          Get paid now
        </button>
      </div>
    </div>
  );
};

export default GetPaid;
