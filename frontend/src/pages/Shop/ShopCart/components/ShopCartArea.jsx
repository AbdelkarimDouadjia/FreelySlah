import React from "react";
//import shopStore from "./shopStore.js";
import ShopCartInfo from "./ShopCartInfo.jsx";
//import CartList from "./CartList.jsx";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShopCartArea() {
  //const products = shopStore((state) => state.products);
  const p = false;

  return (
    <>
      <section className="shop-checkout !pt-0 lg-b:py-[120px] py-[60px] px-0 relative">
        <div className="w-full px-3 mx-auto min-[576px]:max-w-[540px]  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] min-[1400px]:max-w-[1320px]">
          <div className="row wow fadeInUp " data-wow-delay="300ms">
            <div className="col-lg-8">
              <div className="shopping_cart_table overflow-x-auto">
                <table className="table table-borderless w-full mb-4 align-top border-[##dee2e6] caption-bottom border-collapse">
                  <thead className="h-[70px] leading-[70px] align-bottom border-0 border-inherit">
                    <tr className="border-0 border-inherit">
                      <th
                        className=" p-0 pl-[30px] bg-[#f1fcfa] border-b-0   border-0 border-inherit"
                        scope="col"
                      >
                        Product
                      </th>
                      <th
                        className=" p-0 pl-0 bg-[#f1fcfa] border-b-0   border-0 border-inherit"
                        scope="col"
                      >
                        Price
                      </th>
                      <th
                        className=" p-0 pl-0 bg-[#f1fcfa] border-b-0   border-0 border-inherit"
                        scope="col"
                      >
                        Quantity
                      </th>
                      <th
                        className=" p-0 pl-0 bg-[#f1fcfa] border-b-0   border-0 border-inherit"
                        scope="col"
                      >
                        Subtotal
                      </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody className="table_body">
                    {/*products.map((item, i) => (
                      <CartList key={i} data={item} />
                    ))
					*/}
                  </tbody>
                </table>
                {/* {products?.length !== 0 ? ( */}
                {p ? (
                  <div className="coupon-form mt30 mb30-md">
                    <div className="d-md-flex align-items-center justify-content-between">
                      <div className="d-md-flex justify-content-between">
                        <input
                          type="text"
                          className="form-control coupon_input mb10-sm"
                          placeholder="Coupon Code"
                        />
                        <a className="ud-btn btn-thm flex-shrink-0 ml20 ml0-sm">
                          Apply Coupon
                          <i className="fal fa-arrow-right-long" />
                        </a>
                      </div>
                      <div className="btn-lsit1">
                        <Link
                          href="/shop-list"
                          className="ud-btn btn-light-thm"
                        >
                          Buy Product
                          <i className="fal fa-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=" mb-[30px] flex justify-center pt-12 ">
                    <Link
                      href="/shop-list"
                      className="ud-btn btn-light-thm !bg-[#5bbb7b1a] !text-[#5bbb7b] flex justify-center items-center hover:!text-white font-medium"
                    >
                      Buy Product
                      <FaArrowRightLong className="ml-[10px] -rotate-45" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="col-lg-4">
              <ShopCartInfo />{" "}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
