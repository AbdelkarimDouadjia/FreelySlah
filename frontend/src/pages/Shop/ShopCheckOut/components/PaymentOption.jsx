import React from "react";
import styles from "../../../Create Service/CreateService.module.css";

export default function PaymentOption() {
  return (
    <>
      <div className="payment_widget shadow bg-[#fff] border border-[#e9e9e9] rounded-[8px] p-[30px]  relative mb-[30px]">
        <h4 className="title mb-[28px] text-[20px] font-medium text-[#222] leading-[1.3125] mt-0">
          Payment
        </h4>
        <div className="radio-element relative">
          <div className="form-check  mb-[15px] items-center flex min-h-6 ">
            <input
              className={`form-check-input ${styles.customRadio} mt-0  `}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked="checked"
            />
            <label
              className="form-check-label font-medium text-[15px] text-[#222] pl-[10px] "
              htmlFor="flexRadioDefault1"
            >
              Direct bank transfer
            </label>
          </div>
          <div className="pw-details">
            <p className="mb-[30px] text-[13px] mt-0 mx-0 text-[#6b7177] leading-[1.85] font-normal">
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference.Your order will not be shipped
              until the funds have cleared in our account.
            </p>
          </div>
          <div className="form-check  mb-[15px] items-center flex min-h-6 ">
            <input
              className={`form-check-input ${styles.customRadio} mt-0  !text-xs`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label font-medium text-[15px] text-[#222] pl-[10px] "
              htmlFor="flexRadioDefault2"
            >
              Check payments
            </label>
          </div>
          <div className="form-check  mb-[15px] items-center flex min-h-6 ">
            <input
              className={`form-check-input ${styles.customRadio} mt-0  !text-xs`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label
              className="form-check-label font-medium text-[15px] text-[#222] pl-[10px] "
              htmlFor="flexRadioDefault3"
            >
              Cash on delivery
            </label>
          </div>
          <div className="form-check items-center flex min-h-6 ">
            <input
              className={`form-check-input ${styles.customRadio} mt-0  !text-xs`}
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
            <label
              className="form-check-label font-medium text-[15px] text-[#222] pl-[10px] "
              htmlFor="flexRadioDefault4"
            >
              PayPal
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
