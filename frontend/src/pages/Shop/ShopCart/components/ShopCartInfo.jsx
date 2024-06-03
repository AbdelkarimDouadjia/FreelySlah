import React from "react";
//import shopStore from "./shopStore.js";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShopCartInfo() {
  /*const products = shopStore((state) => state.products);

  let total = 0;
  products.forEach((item) => {
    const price = item.qty * item.price;
    total = total + price;
  });
  */

  return (
    <>
      <div className="shop-sidebar max-w-[370px] lg-b:ml-auto ">
        <div className="order_sidebar_widget shadow bg-white border border-[#e9e9e9] rounded-[8px]  p-[30px] relative ">
          <h4 className="title mb-[28px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0">
            Cart Totals
          </h4>
          <p className="text-[#222]  font-normal pb-[10px] border-b border-[#e9e9e9] mt-0 mx-0 mb-[15px] leading-[1.85] ">
            Subtotal
            {/* <span className="float-end">${total}</span> */}
            <span className="float-right ">$0</span>
          </p>
          <p className="text-[#222]  font-normal pb-[10px] mt-0 mx-0 mb-[15px] leading-[1.85]">
            Total
            {/* <span className="float-end">${total}</span> */}
            <span className="float-right">$100</span>
          </p>
          <div className="grid mt-[40px]">
            <Link
              className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white flex justify-center items-center"
              href="/shop-checkout"
            >
              Proceed to Checkout
              <FaArrowRightLong className="ml-[10px] -rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
