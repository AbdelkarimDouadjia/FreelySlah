//"use client";
//import shopStore from "@/store/shopStore";

export default function OrderInfo() {
  /*const products = shopStore((state) => state.products);

  let total = 0;
  products.forEach((item) => {
    const price = item.qty * item.price;
    total = total + price;
  });*/

  return (
    <>
      <div className="order_sidebar_widget shadow bg-[#fff] border border-[#e9e9e9] rounded-[8px] p-[30px]  relative mb-[30px]">
        <h4 className="title mb-[28px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0">
          Your Order
        </h4>
        <ul className="p-0 mb-0 mt-0">
          <li className="mb-[20px] border-b border-[#e9e9e9] list-none">
            <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
              Product
              <span className="float-right ">Subtotal</span>
            </h6>
          </li>
          {/* {products?.map((item, i) => (
            <li key={i} className="mb20">
              <p className="body-color">
                {item.title.substring(0, 10) + "..."} x {item.qty}
                <span className="float-end">${item.qty * item.price}</span>
              </p>
            </li>
          ))} */}
          <li className=" mb-[15px] border-b border-[#e9e9e9] list-none">
            <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
              Subtotal
              {/* <span className="float-end">${total.toFixed(2)}</span> */}
              <span className="float-right">$0.00</span>
            </h6>
          </li>
          <li className=" mb-[15px] border-b border-[#e9e9e9] list-none">
            <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
              Shipping
              <span className="float-right">
                {/* {products?.length !== 0 ? "$100" : "$0.00"} */}
                $100
              </span>
            </h6>
          </li>
          <li>
            <h6 className="text-[15px] font-medium text-[#222] leading-[1.3125] mt-0 mb-2">
              Total
              <span className="float-right">
                $100
                {/* {products?.length !== 0
                  ? (Number(total) + 100).toFixed(2)
                  : "$0.00"} */}
              </span>
            </h6>
          </li>
        </ul>
      </div>
    </>
  );
}
