import React from "react";
import { FaArrowRight } from "react-icons/fa6";
export default function Invoice() {
  // print handler
  const printHandler = () => {
    if (typeof window !== undefined) {
      window.print();
    }
  };

  return (
    <>
      <section className="our-invoice bgc-thm4 bg-gray-100 lg-b:py-[120px] px-0 py-[60px] min-h-screen ">
        <div
          className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px] "
          data-wow-delay="300ms"
        >
          <div className="row mb-[30px] ">
            <div className="col-lg-12">
              <div className="float-right">
                <a
                  onClick={printHandler}
                  className="ud-btn btn-thm invoice_down_print bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white flex justify-center items-center font-medium"
                >
                  Print this invoice
                  <FaArrowRight className="text-base font-light ml-[10px] -rotate-45" />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="invoice_table bg-white shadow rounded-[8px] relative ">
                <div className="wrapper py-[60px] px-[30px] lg-b:py-[120px] lg-b:px-[100px] border-b border-[#e9e9e9] 	">
                  <div className="row mb-[20px]  items-center">
                    <div className="col-lg-7">
                      <div className="main_logo mb-[30px] lg-b:mb-0">
                        <div className="  cursor-pointer text-[#222] w-fit flex justify-between items-center">
                          {/* <img
                            src="/src/assets/logo.svg"
                            alt="logo"
                            className="w-9 h-auto mr-4"
                          /> */}
                          <span className=" -ml-1 text-[30px] font-bold !text-5xl !text-[#022C22] playfair-display-regular relative">
                            <span className="playfair-display-regular !text-5xl mr-1">
                              freely
                            </span>
                            <span className="!text-lg z-10 relative text-[#022C22] -ml-[1px] dancing-script-regular  bg-[#BEF264] w-full h-full">
                              Slah
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="invoice_deails ">
                        <h3 className="float-left text-[#222] text-[24px] font-bold text-[1.3125] mt-0 mb-2">
                          Invoice #
                        </h3>
                        <h5 className="float-right text-[17px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
                          0043128641
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-[55px] ">
                    <div className="col-sm-6 col-lg-7">
                      <div className="invoice_date mb-[60px] ">
                        <div className="title mb-[5px]  text-[#222]">
                          Invoice date:
                        </div>
                        <h6 className="font-medium text-[15px] text-[#222] leading-[1.3125] mb-0 ">
                          03/10/2022
                        </h6>
                      </div>
                      <div className="invoice_address">
                        <h4 className="mb-[20px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 ">
                          Supplier
                        </h4>
                        <h6 className="font-medium text-[15px] text-[#222] leading-[1.3125] mt-0 mb-2">
                          Jobio LLC
                        </h6>
                        <p className="text-[#222] mt-0 mx-0 mb-[15px] leading-[1.85] font-normal ">
                          2301 Ravenswood Rd Madison,
                          <br className="hidden lg-b:block" />
                          WI 53711
                        </p>
                      </div>
                    </div>
                    <div className="col-sm-6 col-lg-5">
                      <div className="invoice_date mb-[60px] ">
                        <div className="title mb-[5px]  text-[#222]">
                          Due date:
                        </div>
                        <h6 className="font-medium text-[15px] text-[#222] leading-[1.3125] mb-0 ">
                          03/10/2022
                        </h6>
                      </div>
                      <div className="invoice_address">
                        <h4 className="mb-[20px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0 ">
                          Customer
                        </h4>
                        <h6 className="font-medium text-[15px] text-[#222] leading-[1.3125] mt-0 mb-2">
                          John Doe
                        </h6>
                        <p className="text-[#222] mt-0 mx-0 mb-[15px] leading-[1.85] font-normal ">
                          329 Queensberry Street, North Melbourne
                          <br className="hidden lg-b:block" />
                          VIC 3051, Australia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-[50px]">
                    <div className="col-lg-12">
                      <div className="table-responsive invoice_table_list overflow-x-auto ">
                        <table className="table table-borderless w-full mb-4 align-top border-[#dee2e6] caption-bottom border-collapse">
                          <thead className="align-bottom border-0 border-inherit">
                            <tr className="bg-[#f1fcfa] rounded-[8px] border-0 border-inherit">
                              <th
                                className="tbleh_title text-[#222] font-medium text-[17px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit"
                                scope="col"
                              >
                                Description
                              </th>
                              <th
                                className="tbleh_title text-[#222] font-medium text-[17px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit"
                                scope="col"
                              >
                                Price
                              </th>
                              <th
                                className="tbleh_title text-[#222] font-medium text-[17px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit"
                                scope="col"
                              >
                                VAT (20%)
                              </th>
                              <th
                                className="tbleh_title text-[#222] font-medium text-[17px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit"
                                scope="col"
                              >
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="border-t-0 align-top border-0 border-inherit">
                            <tr className="bdrb1 border-b border-[#e9e9e9] 	">
                              <th
                                className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center"
                                scope="row"
                              >
                                Standard Plan
                              </th>
                              <td className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $443.00
                              </td>
                              <td className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $921.80
                              </td>
                              <td className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $9243
                              </td>
                            </tr>
                            <tr className="bdrb1 border-b border-[#e9e9e9] ">
                              <th
                                className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center"
                                scope="row"
                              >
                                Extra Plan
                              </th>
                              <td className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $443.00
                              </td>
                              <td className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $921.80
                              </td>
                              <td className="tbleh_title text-[#222] font-normal text-[15px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $9243
                              </td>
                            </tr>
                            <tr>
                              <th
                                scope="row"
                                className="tbleh_title text-[#222] font-medium text-[17px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center"
                              >
                                Total Due
                              </th>
                              <td />
                              <td />
                              <td className="tbleh_title text-[#222] font-medium text-[17px] pb-[20px] pl-[30px] pt-[25px] border-b-0 px-2 border-0 border-inherit text-center">
                                $9,750
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="invoice_footer bg-white rounded-br-md rounded-bl-md border-t border-[#e9e9e9] pt-[45px]  px-0 pb-[40px] ">
                  <div className="row justify-center">
                    <div className="flex-initial flex-shrink-0 w-auto">
                      <div className="invoice_footer_content text-center">
                        <a className="text-[#222] cursor-pointer transition-all duration-300 ease-linear">
                          www.freelyslah.com
                        </a>
                      </div>
                    </div>
                    <div className="flex-initial flex-shrink-0 w-auto">
                      <div className="invoice_footer_content text-center">
                        <a className="text-[#222] cursor-pointer transition-all duration-300 ease-linear">
                          invoice@freelyslah.com
                        </a>
                      </div>
                    </div>
                    <div className="flex-initial flex-shrink-0 w-auto">
                      <div className="invoice_footer_content text-center">
                        <a className="text-[#222] cursor-pointer transition-all duration-300 ease-linear">
                          (123) 123-456
                        </a>
                      </div>
                    </div>
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
