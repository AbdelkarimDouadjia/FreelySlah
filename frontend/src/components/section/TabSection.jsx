import React, { useState } from "react";

const categories = [
  "All Categories",
  "Graphics Design",
  "Digital Marketing",
  "Writing Translation",
  "Video Animation",
  "Music Audio",
  "Programming Tech",
  "Business",
  "Lifestyle",
  "Trending",
];

const TabSection = () => {
  const [getCurrentTab, setCurrentTab] = useState("All Categories");

  return (
    <>
      <section
        className={`border-b border-gray-300 py-3 text-[13px] font-normal text-[#6b7177] leading-[28px] overflow-hidden w-full`}
      >
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="flex">
            <div className="w-full lg:w-full flex-shrink-0 max-w-full px-2">
              <div className="relative overflow-x-auto  xl:overflow-x-visible">
                <ul className="mb-0 flex pl-0 w-[1265px]">
                  {categories.map((item, index) => (
                    <li className="pr-6 py-0 group" key={index}>
                      <a
                        onClick={() => setCurrentTab(item)}
                        className={`${
                          getCurrentTab == item ? "active" : ""
                        } block text-[#222] font-normal text-sm leading-10 relative cursor-pointer`}
                      >
                        {item}
                        <div
                          className={`h-[1px] !bg-black transition-all duration-300 ease-in-out transform origin-center -translate-x-1/2 ${
                            getCurrentTab == item ? "w-full" : "w-0"
                          } absolute bottom-[-11px] left-1/2 group-hover:w-full`}
                        ></div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TabSection;
