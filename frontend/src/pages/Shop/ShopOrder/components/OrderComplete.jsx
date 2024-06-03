import React from "react";
export default function OrderComplete() {
  return (
    <>
      <section className="py-[60px] px-0 lg-b:py-[120px] relative">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row justify-center ">
            <div className="col-lg-6">
              <div className="order_complete_message text-center relative ">
                <div className="icon bgc-thm4 rounded-[50%] text-[30px] h-[80px] w-[80px] leading-[80px] mx-auto mt-0 mb-[20px] bg-[#ffede8] ">
                  <span className="fa fa-check text-[#5bbb7b]" />
                  {/* <img
                    src="/src/assets/complete.gif"
                    alt="complete"
                    style={{ width: "100%", height: "auto" }}
                    className=" inline-block align-middle  "
                  /> */}
                </div>
                <h2 className="title text-[28px] font-bold text-[#222] leading-[1.3125] mt-0 mb-2">
                  Your Order Is Completed !
                </h2>
                <p className="text-[#222] font-normal mx-0 mt-0 mb-[15px] leading-[1.85] ">
                  Thank you. Your order has been received.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 offset-xl-2">
              <div className="shop_order_box mt-[60px] relative">
                <div className="order_list_raw py-[40px] px-[30px] bg-[#ffede8] border-2 border-dashed border-[#222] rounded-[8px] mb-[60px] xs-b:py-[35px] xs-b:px-[80px] ">
                  <ul className="p-0 mb-0  items-center mt-0 md-b:flex md-b:justify-between">
                    <li className="md-b:mb-0 mb-[20px]">
                      <p className="text-[#222] font-normal mt-0 mx-0 leading-[1.85]  mb-[5px]  ">
                        Order Number
                      </p>
                      <h6 className="mb-0 text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 ">
                        039422
                      </h6>
                    </li>
                    <li className="md-b:mb-0 mb-[20px]">
                      <p className="text-[#222] font-normal mt-0 mx-0 leading-[1.85]  mb-[5px]  ">
                        Date
                      </p>
                      <h6 className="mb-0 text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 ">
                        27/04/2022
                      </h6>
                    </li>
                    <li className="md-b:mb-0 mb-[20px]">
                      <p className="text-[#222] font-normal mt-0 mx-0 leading-[1.85]  mb-[5px]  ">
                        Total
                      </p>
                      <h6 className="mb-0 text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 ">
                        $2984.10
                      </h6>
                    </li>
                    <li>
                      <p className="text-[#222] font-normal mt-0 mx-0 leading-[1.85]  mb-[5px]  ">
                        Payment Method
                      </p>
                      <h6 className="mb-0 text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 ">
                        Direct Bank Transfer
                      </h6>
                    </li>
                  </ul>
                </div>
                <div className="order_details bg-white border border-[#e9e9e9] rounded-[8px] xs-b:pt-[50px] xs-b:px-[60px] xs-b:mb-[70px] shadow py-[40px] px-[40px] ">
                  <h4 className="title mb-[25px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0">
                    Order details
                  </h4>
                  <div className="od_content ">
                    <ul className="p-0 mb-0 mt-0 ">
                      <li className="mb-[20px] border-b border-[#e9e9e9] list-none ">
                        <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                          Product
                          <span className="float-right">Subtotal</span>
                        </h6>
                      </li>
                      <li className="mb-[20px] list-none ">
                        <p className="body-color mx-0 mt-0 mb-[15px] text-[#6b7177] leading-[1.85] font-normal">
                          Hoodie x2
                          <span className="float-right">$59.00</span>
                        </p>
                      </li>
                      <li className="mb-[20px] list-none">
                        <p className="body-color mx-0 mt-0 mb-[15px] text-[#6b7177] leading-[1.85] font-normal">
                          Seo Books x 1
                          <span className="float-right">$67.00</span>
                        </p>
                      </li>
                      <li className="mb-[20px] border-b border-[#e9e9e9] list-none ">
                        <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                          Subtotal
                          <span className="float-right">$178.00</span>
                        </h6>
                      </li>
                      <li className="mb-[20px] border-b border-[#e9e9e9] list-none ">
                        <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                          Shipping
                          <span className="float-right">$178.00</span>
                        </h6>
                      </li>
                      <li className="list-none">
                        <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                          Total
                          <span className="float-right">$9,218.00</span>
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
