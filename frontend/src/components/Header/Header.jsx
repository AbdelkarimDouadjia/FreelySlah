import React from "react";

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a className="text-[#047857]" href="/">
          <IoHome />
          Home
        </a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Find Talent</summary>
          <ul className="p-2 bg-[#FCFCFC]">
            <li>
              <a href="/findTalent">All</a>
            </li>
            <li>
              <a href="/findTalent">
                <MdOutlineDesignServices />
                Creative & Design
              </a>
            </li>
            <li>
              <a href="/findTalent">
                <FaCode />
                Technology & Development
              </a>
            </li>
            <li>
              <a href="/findTalent">
                <FaCamera />
                Arts & Entertainment
              </a>
            </li>
            <li>
              <a href="/findTalent">
                <IoDocumentTextOutline />
                Writing & Translation
              </a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="/findJob">Find Job</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <TbCategory />
            Find Product
          </summary>
          <ul className="p-2 bg-[#FCFCFC]">
            <li>
              <a>All</a>
            </li>
            <li>
              <a>Shirt</a>
            </li>
            <li>
              <a>Bag</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
            <li>
              <a>Pant</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <TbPointer />
            Explore
          </summary>
          <ul className="p-2 bg-[#FCFCFC]">
            <li>
              <a href="/about">About US</a>
            </li>
            <li>
              <a>Help</a>
            </li>
            <li>
              <a>Terms Of Use</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a href="/ContactUS">
          <LuPhoneCall />
          Contact Us
        </a>
      </li>
    </>
  );

  return (
    <header
      style={{ zIndex: 10001 }}
      className={`text-black fixed top-0 left-0 right-0 w-full transition-all duration-300 ease-in-out ${
        isSticky ? "bg-gray-100 shadow-md" : "bg-[#FCFCFC]"
      }`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky ? "shadow-md transition-all duration-300 ease-in-out" : ""
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-[#FCFCFC] rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            <img src={logo} alt="Logo" className="max-w-[50px]" />
            FreelySlah
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="/signup"
            className="btn bg-[#047857] text-white rounded-full px-6 mr-3 lg:flex hidden items-center gap-2 border-none"
          >
            Join Us
          </a>
          <a
            href="/login"
            className="btn text-[#047857] bg-white hover:text-white rounded-full px-6 hidden lg:flex gap-2"
          >
            <IoLogInOutline />
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;