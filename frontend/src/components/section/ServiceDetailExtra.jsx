import { useState } from "react";

const extraService = [
  {
    id: 1,
    title: "100 Words (+2 days)",
    brief: "I will professionally translate english to german",
    price: 25,
    value: "silver",
  },
  {
    id: 2,
    title: "100 Words (+2 days)",
    brief: "I will professionally translate english to german",
    price: 45,
    value: "gold",
  },
  {
    id: 3,
    title: "100 Words (+2 days)",
    brief: "I will professionally translate english to german",
    price: 75,
    value: "platinum",
  },
];

function ServiceDetailExtra() {
  const [getSelect, setSelect] = useState([]);

  // handler
  const serviceSelectHandler = (value) => {
    const isExist = getSelect.includes(value);

    if (!isExist) {
      return setSelect((old) => [...old, value]);
    }

    const deleted = getSelect.filter((item) => item !== value);
    setSelect(deleted);
  };

  return (
    <>
      <div className="extra-service-tab mb40 mt30  mb-10 mt-[30px] ">
        <nav>
          <div className="nav flex-column nav-tabs border-b-0 flex flex-col flex-wrap px-0 list-none ">
            {extraService.map((item, i) => (
              <button
                key={i}
                className={`nav-link border-2 border-transparent outline-1 outline hover:outline-[#b7b1b1] outline-[#e9e9e9] rounded-[4px] mb-[20px] pt-[26px]  px-[30px] pb-[35px] relative cursor-pointer block  transition-all duration-150 ease-in-out ${
                  getSelect?.includes(item.value)
                    ? "active border-2 border-solid !border-[#1f4b3f] text-black bg-white shadow-sh"
                    : ""
                }`}
              >
                <label className="custom_checkbox font-medium block cursor-pointer text-[#222] text-[15px] leading-[40px] tracking-normal pl-[26px] select-none text-left !relative">
                  {item.title}
                  <span className=" block leading-normal text-[#222] font-normal">
                    {item.brief}
                  </span>
                  <input
                    type="checkbox"
                    className="absolute opacity-0 h-[0] w-[0] cursor-pointer focus-visible:border-none focus-visible:outline-0"
                    checked={getSelect?.includes(item.value)}
                    onChange={() => serviceSelectHandler(item.value)}
                  />
                  <span className="checkmark border border-[#041e42] rounded-[4px] absolute top-[10px] left-0 h-4 w-4 " />
                </label>
                <span className="price  text-[#222] text-[28px] font-semibold absolute min-[576px]:right-[30px] min-[576px]:top-[45px] max-[575.98px]:right-5 max-[575.98px]:top-[10px] ">
                  ${item.price}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

export default ServiceDetailExtra;
