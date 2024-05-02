import React from "react";
import { lan, momney } from "./footer.js";
import { useState } from "react";

function FooterSelect() {
  const [getMoneySelect, setMoneySelect] = useState("Euro");
  const [getLanSelect, setLanSelect] = useState("English");

  return (
    <>
      <ul className="p-0 m-0 ">
        <li className="list-inline-item mr-0 inline-block list-none">
          <div className="dropdown bootstrap-select show-tick w-full float-none inline-block ml-0 align-middle relative">
            <button
              type="button"
              className="btn dropdown-toggle btn-light bg-[#ffffff0d] rounded  border-none text-[#ffffffb3] font-normal text-sm h-[40px] leading-[25px] relative w-full text-right whitespace-nowrap inline-flex items-center justify-between cursor-pointer transition-all duration-300 ease-linear outline-none  py-[0.375rem] px-3 align-middle select-none"
              data-bs-toggle="dropdown"
            >
              <div className="filter-option static top-0 left-0 float-left h-full w-full text-left overflow-hidden flex-initial ">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {getMoneySelect}
                  </div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu min-w-full absolute z-[1000] hidden m-0 list-none bg-white border border-[#e9ecef] rounded-[0.375rem]">
              <div className="inner show text-base text-[#212529] text-left list-none">
                <ul className="dropdown-menu inner show static float-none border-none p-0 m-0 rounded-0 shadow-none min-w-full z-[1000] text-base text-[#212529] text-left list-none bg-white">
                  {momney.map((item, index) => (
                    <li
                      key={index}
                      className={` relative list-none
                        ${
                          getMoneySelect === item
                            ? "selected active relative"
                            : ""
                        }
                      `}
                      onClick={() => setMoneySelect(item)}
                    >
                      <a
                        className="dropdown-item cursor-pointer w-full p-1 clear-both text-[#212529] whitespace-nowrap bg-transparent border-0 outline-none transition-all duration-300 ease-linear select-none"
                        id="bs-select-2-0"
                      >
                        <span className=" bs-ok-default check-mark hidden text-[#222]" />
                        <span className="text mr-[34px] inline-block text-[#222] font-normal">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="list-inline-item mr-0 inline-block list-none">
          <div className="dropdown bootstrap-select show-tick w-full float-none inline-block ml-0 align-middle relative">
            <button
              type="button"
              className="btn dropdown-toggle btn-light bg-[#ffffff0d] rounded  border-none text-[#ffffffb3] font-normal text-sm h-[40px] leading-[25px] relative w-full text-right whitespace-nowrap inline-flex items-center justify-between cursor-pointer transition-all duration-300 ease-linear outline-none  py-[0.375rem] px-3 align-middle select-none"
              data-bs-toggle="dropdown"
            >
              <div className="filter-option static top-0 left-0 float-left h-full w-full text-left overflow-hidden flex-initial ">
                <div className="filter-option-inner">
                  <div className="filter-option-inner-inner">
                    {getLanSelect}
                  </div>
                </div>
              </div>
            </button>
            <div className="dropdown-menu min-w-full absolute z-[1000] hidden m-0 list-none bg-white border border-[#e9ecef] rounded-[0.375rem]">
              <div className="inner show text-base text-[#212529] text-left list-none">
                <ul className="dropdown-menu inner show static float-none border-none p-0 m-0 rounded-0 shadow-none min-w-full z-[1000] text-base text-[#212529] text-left list-none bg-white">
                  {" "}
                  {lan.map((item, index) => (
                    <li
                      key={index}
                      className={` relative list-none
                        ${
                          getMoneySelect === item
                            ? "selected active relative"
                            : ""
                        }
                      `}
                      onClick={() => setLanSelect(item)}
                    >
                      <a
                        className="dropdown-item cursor-pointer w-full p-1 clear-both text-[#212529] whitespace-nowrap bg-transparent border-0 outline-none transition-all duration-300 ease-linear select-none"
                        id="bs-select-3-0"
                      >
                        <span className="bs-ok-default check-mark hidden text-[#222]" />
                        <span className="text mr-[34px] inline-block text-[#222] font-normal">
                          {item}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default FooterSelect;
