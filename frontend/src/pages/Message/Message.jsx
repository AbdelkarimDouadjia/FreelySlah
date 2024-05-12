import React from "react";
const Message = () => {
  const userList = ["ms1", "ms2", "ms3", "ms4", "ms5", "ms6", "ms7", "ms8"];
  return (
    <div className="flex flex-col  bg-[#FCFCFC]">
      {" "}
      <div className="p-2 mt-24 m-5">
        {" "}
        <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg mb-5">
          {" "}
          <h2 className="text-lg font-semibold text-black">Messages</h2>{" "}
          <p className="text-gray-600">
            {" "}
            Lorem ipsum dolor sit amet, consectetur.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="flex flex-wrap justify-between -mx-2 ml-2 mr-2 mb-10">
        {" "}
        <div className="p-2 w-full lg:w-1/3 ">
          {" "}
          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            {" "}
            <div className="mb-4 ">
              {" "}
              <form className="flex items-center ">
                {" "}
                <button
                  className=" bg-transparent border-none p-2"
                  type="submit"
                  style={{ color: "#0E9F6E" }}
                >
                  {" "}
                  <i className="fas fa-search"></i>{" "}
                </button>{" "}
                <input
                  className="form-input ml-2 border p-2 w-full bg-[#FCFCFC]"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />{" "}
              </form>{" "}
            </div>{" "}
            <div className="overflow-auto text-black">
              {" "}
              {userList.map((ms, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 hover:bg-gray-200 rounded"
                >
                  {" "}
                  <img
                    className="w-10 h-10 rounded-full mr-3"
                    src={`images/inbox/${ms}.png`}
                    alt={`${ms}`}
                  />{" "}
                  <div className="flex-grow">
                    {" "}
                    <div className="text-sm font-medium">Person Name</div>{" "}
                    <p className="text-xs">Head of Development</p>{" "}
                  </div>{" "}
                  <div className="text-xs ml-4">
                    {" "}
                    <span>35 mins</span>{" "}
                    {index % 3 === 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs p-1 rounded">
                        {" "}
                        2{" "}
                      </span>
                    )}{" "}
                  </div>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="p-2 w-full lg:w-2/3">
          {" "}
          <div className="bg-gray-100 border border-gray-300 p-5 rounded-lg">
            {" "}
            <div className="flex items-center mb-4">
              {" "}
              <img
                className="w-10 h-10 rounded-full mr-3"
                src="images/inbox/ms3.png"
                alt="ms3"
              />{" "}
              <div className="flex-grow ">
                {" "}
                <h6 className="text-sm font-medium text-black">
                  Arlene McCoy
                </h6>{" "}
                <p className="text-xs text-green-500">Active</p>{" "}
              </div>{" "}
              <a href="#delete" className="text-red-500 text-xs underline">
                {" "}
                Delete Conversation{" "}
              </a>{" "}
            </div>{" "}
            <div className="bg-white p-4 rounded-lg shadow">
              {" "}
              {/* Example messages could be added here */}{" "}
            </div>{" "}
            <div className="mt-4">
              {" "}
              <form className="flex items-center">
                {" "}
                <input
                  className="form-input border p-2 w-full bg-[#FCFCFC]"
                  type="text"
                  placeholder="Type a Message"
                  aria-label="Message"
                />{" "}
                <button className="bg-[#0E9F6E] text-white p-2 ml-2 rounded">
                  {" "}
                  Send{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Message;
