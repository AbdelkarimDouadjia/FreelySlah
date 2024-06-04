import OrderInfo from "./OrderInfo.jsx";
import PaymentOption from "./PaymentOption.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShopCheckoutAreaInfo1() {
  return (
    <>
      <div className="shop-sidebar ms-md-auto max-w-[370px] md-b:ml-auto">
        <OrderInfo />
        <PaymentOption />
        <div className="d-grid default-box-shadow2 grid">
          <button className="ud-btn btn-thm bg-[#5bbb7b] border-2 border-[#5bbb7b] text-white flex justify-center items-center font-medium text-lg">
            Make Order
            <FaArrowRightLong className="ml-[10px] -rotate-45" />
          </button>
        </div>
      </div>
    </>
  );
}
