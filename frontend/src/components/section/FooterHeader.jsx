import React from "react";
import { Link } from "react-router-dom";
import FooterSocial from "./FooterSocial.jsx";

const links = [
  { id: 1, name: "Terms of Service", path: "/" },
  { id: 2, name: "Privacy Policy", path: "/" },
  { id: 3, name: "Site Map", path: "/" },
];

function FooterHeader() {
  return (
    <>
      <div className="mb-[60px] pb-[10px] border-b border-[#ffffff26] flex flex-wrap -mx-3">
        <div className="flex-shrink-0 w-full max-w-full px-3 md:flex-initial min-[768px]:flex-shrink-0 md:w-7/12">
          <div className="text-center mb-4 items-center justify-center block md:text-left md:mb-0 md:justify-start md:flex">
            {links.map((item, i) => (
              <Link
                key={i}
                className="text-white font-medium text-[17px] cursor-pointer mr-[30px] max-[991px]:mr-[15px]"
                href={item.path}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0 max-[767px]:w-full max-[767px]:max-w-full px-3 mt-0 md:flex-initial md:flex-shrink-0 md:w-5/12 ">
          <FooterSocial />
        </div>
      </div>
    </>
  );
}

export default FooterHeader;