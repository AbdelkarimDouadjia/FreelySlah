import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Breadcumb(props) {
  //const path = ["Home", "Services", "Design & Creative"];
  const path = props.path;
  return (
    <>
      <section className="breadcumb-section py-5 relative">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="flex">
            <div className="w-full lg:w-full flex-shrink-0 max-w-full px-2">
              <div className="realtive">
                <div className="relative">
                  {path?.map((item, i) => (
                    <Link
                      key={i}
                      to="/"
                      className={`inline-block text-[#6b7177] text-sm relative mr-[25px] ${
                        i !== path.length - 1
                          ? "after:content-['/']  after:absolute after:right-[-15px] after:bottom-[1px] after:text-base"
                          : "text-black"
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Breadcumb.propTypes = {
  path: PropTypes.array,
};

Breadcumb.defaultProps = {
  path: [],
};
export default Breadcumb;
