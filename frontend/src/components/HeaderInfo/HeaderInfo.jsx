import React from "react";
import PropTypes from "prop-types";

const HeaderInfo = ({ title, brief }) => {
  return (
    <>
      <section className="pt-[40px] !pb-0  px-0 py-[60px] relative  ">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title relative lg-b:mb-[60px] mb-[30px]">
                <h2 className="title font-bold text-[#222] leading-[1.3125] mt-0 mb-2	xs-b:text-[32px] text-[20px]">
                  {title}
                </h2>
                <p className="font-normal my-0 mx-0  text-[#222] leading-[1.85] ">
                  {brief}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

HeaderInfo.propTypes = {
  title: PropTypes.string,
  brief: PropTypes.string,
};

HeaderInfo.defaultProps = {
  title: "Title",
  brief: "Brief",
};

export default HeaderInfo;
