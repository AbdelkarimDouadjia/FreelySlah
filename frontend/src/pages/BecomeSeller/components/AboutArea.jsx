import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function AboutArea() {
  const [activeTab, setActiveTab] = useState("product");

  return (
    <>
      <section className="our-faq pb-[90px] pt-[50px] ">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row wow fadeInUp">
            <div className="col-lg-4">
              <div className="vertical-tab">
                <div className="widget_list">
                  <nav>
                    <div className="nav flex-col nav-tabs text-left border-b-0 flex flex-wrap pl-0 mb-0 list-none ">
                      <button
                        className={`nav-link ${
                          activeTab === "product"
                            ? "active text-[#000] bg-white !border-b border-black"
                            : "text-[#6b7177]"
                        } border-none rounded-none font-medium mb-[25px] p-0 w-full transition-all duration-300 ease-in-out text-left block`}
                        onClick={() => setActiveTab("product")}
                      >
                        <span>Freelancing Product</span>
                      </button>
                      <button
                        className={`nav-link ${
                          activeTab === "service"
                            ? "active text-[#000] bg-white border-b border-black"
                            : "text-[#6b7177]"
                        } border-none rounded-none font-medium mb-[25px] p-0 w-full transition-all duration-300 ease-in-out text-left block`}
                        onClick={() => setActiveTab("service")}
                      >
                        <span>Freelancing Service</span>
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content h-auto" id="nav-tabContent">
                {activeTab === "product" && (
                  <div
                    className="tab-pane active h-auto block"
                    id="nav-product"
                    aria-labelledby="nav-product-tab"
                  >
                    <div className="for-hire">
                      <h4 className="text-4xl font-medium text-[#222] leading-[1.3125] mt-0 mb-4">
                        Freelancing Product
                      </h4>
                      <p className="text mb-[30px] text-[#222] font-normal pt-0 px-0 leading-[1.85]">
                        Create and sell your digital products worldwide. Utilize
                        our platform to reach a global audience and turn your
                        creativity into a profitable venture.
                      </p>
                      <p className="text mb-[40px] text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                        Whether it&apos;s software, graphics, music, or other digital
                        goods, our platform provides the tools you need to
                        succeed. Join a community of creators and start selling
                        today.
                      </p>
                      <a className="ud-btn btn-thm-border mb-[25px] bg-white border-2 border-[#5bbb7b] text-[#5bbb7b] mr-6 hover:text-white cursor-pointer flex justify-center items-center w-fit">
                        Get Started
                        <FaArrowRightLong className="ml-[10px] -rotate-45 text-[#5bbb7b] hover:text-white" />
                      </a>
                    </div>
                  </div>
                )}
                {activeTab === "service" && (
                  <div
                    className="tab-pane active h-auto block"
                    id="nav-service"
                    aria-labelledby="nav-service-tab"
                  >
                    <div className="for-hire">
                      <h4 className="text-4xl font-medium text-[#222] leading-[1.3125] mt-0 mb-4">
                        Freelancing Service
                      </h4>
                      <p className="text mb-[30px] text-[#222] font-normal pt-0 px-0 leading-[1.85]">
                        Offer your expertise and services to clients around the
                        globe. Leverage our platform to connect with businesses
                        and individuals seeking your skills.
                      </p>
                      <p className="text mb-[40px] text-[#222] font-normal mt-0 mx-0 leading-[1.85]">
                        From consulting and programming to design and writing,
                        our marketplace supports a wide range of freelance
                        services. Build your portfolio, attract clients, and
                        grow your freelance business.
                      </p>
                      <a className="ud-btn btn-thm-border mb-[25px] bg-white border-2 border-[#5bbb7b] text-[#5bbb7b] mr-6 hover:text-white cursor-pointer flex justify-center items-center w-fit">
                        Get Started
                        <FaArrowRightLong className="ml-[10px] -rotate-45 text-[#5bbb7b] hover:text-white" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
