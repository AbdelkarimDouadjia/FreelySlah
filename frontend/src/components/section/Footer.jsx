import React from "react";
import { Link } from "react-router-dom";
import FooterHeader from "./FooterHeader.jsx";
// import { usePathname } from "next/navigation";
import FooterSelect from "./FooterSelect.jsx";
import { about, category, support } from "./footer.js";

function Footer() {
  //   const path = usePathname();

  return (
    <>
      <section className="footer-style1 pt25 !pt-[25px] bg-[#222]  !pb-0 py-[120px] px-0 relative max-[991px]:px-0 ">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <FooterHeader />
          <div className="row flex flex-wrap mt-0 -mx-3">
            <div className="  flex-shrink-0 w-full max-w-full px-3 pt-0 min-[576px]:flex-initial min-[576px]:flex-shrink-0 min-[576px]:w-1/2 md:w-1/2  lg-b:w-1/4">
              <div className="link-style1 mb-6 min-[576px]:mb-12">
                <h5 className="mb-[15px] text-white text-[17px] font-medium leading-[1.3125] mt-0  ">
                  About
                </h5>
                <div className="link-list ">
                  {about.map((item, i) => (
                    <Link
                      key={i}
                      href={item.path}
                      className="text-[#ffffffb3] block leading-[35px] relative transition-all duration-300 ease-linear cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 pt-0 min-[576px]:flex-initial min-[576px]:flex-shrink-0 min-[576px]:w-1/2 max-[991px]:w-1/2  lg-b:w-1/4 ">
              <div className="link-style1 mb-6 min-[576px]:mb-12">
                <h5 className="mb-[15px] text-white text-[17px] font-medium leading-[1.3125] mt-0  ">
                  Categories
                </h5>
                <ul className="ps-0">
                  {category.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.path}
                        className="text-[#ffffffb3] block leading-[35px] relative transition-all duration-300 ease-linear cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 pt-0 min-[576px]:flex-initial min-[576px]:flex-shrink-0 min-[576px]:w-1/2 max-[991px]:w-1/2  lg-b:w-1/4 ">
              <div className="link-style1 mb-6 min-[576px]:mb-12">
                <h5 className="mb-[15px] text-white text-[17px] font-medium leading-[1.3125] mt-0  ">
                  Support
                </h5>
                <ul className="ps-0">
                  {support.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.path}
                        className="text-[#ffffffb3] block leading-[35px] relative transition-all duration-300 ease-linear cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 pt-0 min-[576px]:flex-initial min-[576px]:flex-shrink-0 min-[576px]:w-1/2 max-[991px]:w-1/2   lg-b:w-1/4 ">
              <div className="footer-widget relative">
                <div className="footer-widget mb-6 relative md-b:mb-12 ">
                  <div className="mailchimp-widget ">
                    <h5 className="title text-white mb-[20px] text-[17px] font-medium leading-[1.3125]  mt-0">
                      Subscribe
                    </h5>
                    <div className="mailchimp-style1 relative">
                      <input
                        type="email"
                        className="form-control bg-[#ffffff0d] border-none text-white text-[15px] font-normal h-[60px] outline-none pl-[20px] block w-full py-[0.375rem] pr-3 leading-[1.5]  transition-all duration-500 ease-linear m-0"
                        placeholder="Your email address"
                      />
                      <button
                        type="submit"
                        className=" cursor-pointer  bg-transparent border-none text-white text-[15px] font-medium absolute right-[25px] top-[18px] transition-all duration-400 ease-linear "
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                <div className="app-widget relative mb-6 xs-b:mb-12">
                  <h5 className="mb-[20px] text-[17px] font-medium leading-[1.3125] mt-0 text-white">
                    Apps
                  </h5>
                  <div className="mb-6 flex flex-wrap mt-0 -mx-3 lg-b:mb-12 ">
                    <div className="flex-shrink-0 w-full max-w-full px-3 pt-0 lg-b:flex-initial lg-b:flex-shrink-0 lg-b:w-full">
                      <a className="app-list mb-[10px] items-center flex cursor-pointer text-[#222] outline-none transition-all duration-300 ease-linear hover:text-[#5bbb7b]  hover:outline-none">
                        <i className="fab fa-apple text-[#ffffffb3] transition-all duration-300 ease-linear mr-[15px] text-[17px] font-normal" />
                        <h6 className="app-title text-[#ffffffb3] transition-all duration-300 ease-linear font-normal text-[15px] mb-0 leading-[1.3125]">
                          iOS App
                        </h6>
                      </a>
                      <a className="app-list items-center flex cursor-pointer text-[#222] outline-none transition-all duration-300 ease-linear hover:text-[#5bbb7b]  hover:outline-none">
                        <i className="fab fa-google-play  text-[#ffffffb3] transition-all duration-300 ease-linear mr-[15px] text-[17px] font-normal" />
                        <h6 className="app-title text-[#ffffffb3] transition-all duration-300 ease-linear font-normal text-[15px] mb-0 leading-[1.3125]">
                          Android App
                        </h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] border-t border-[#ffffff1a] py-6">
          <div className="items-center flex flex-wrap mt-0 -mx-3  ">
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 md-b:flex-initial md-b:flex-shrink-0 md-b:w-1/2">
              <div className="text-center lg-b:text-left  ">
                <p className="copyright-text text-[#ffffffb3]  mb-2 mx-0 mt-0 leading-[1.85] font-normal md-b:mb-0">
                  All rights reserved by FreelySlah © {new Date().getFullYear()}. 
                </p>
              </div>
            </div>
            <div className="flex-shrink-0 w-full max-w-full px-3 mt-0 md-b:flex-initial md-b:flex-shrink-0 md-b:w-1/2">
              <div className="footer_bottom_right_btns text-center lg-b:text-right">
                <FooterSelect />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
