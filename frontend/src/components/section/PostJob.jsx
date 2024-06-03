import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PostJob = () => {
  const userInfo = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <section className="pt90 pt60-md pb130 pb60-md my-[90px]">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="visible items-center flex flex-wrap -mx-3 mt-0">
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-3/4">
              <div className="max-[991px]:mb-[30px] relative">
                <h2 className="text-[48px] font-bold text-[#222] leading-[1.3125] mt-0 max-[575px]:text-[20px]">
                  Hi, {userInfo?.displayName || userInfo?.fname}
                  {/* 👋 */}
                  <img
                    src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                    alt="Waving"
                    style={{ width: "50px", height: "auto" }}
                    className=" inline-block align-middle ml-4 mb-3"
                  />
                </h2>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-1/4 flex justify-end">
              <div className="mb-4 lg-b:text-right">
                <Link
                  to="/createproject"
                  className="cursor-pointer flex items-center justify-center mt-[20px] !py-3 !px-4 hover:text-white rounded-[60px] bg-[#0E9F6E] hover:bg-[#046c4e] text-white hover:border-none transition-all duration-300 ease-linear font-medium w-fit"
                >
                  <FaPlus className="text-2xl mr-[11px] font-light" />
                  Post a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostJob;
