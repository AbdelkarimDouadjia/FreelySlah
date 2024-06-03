import React from "react";
import Breadcumb from "../../../components/Breadcumb/Breadcumb.jsx";
import HeaderInfo from "../../../components/HeaderInfo/HeaderInfo.jsx";
import ShopCheckoutArea from "./components/ShopCheckoutArea.jsx";

const ShopCheckOut = () => {
  return (
    <>
      <Breadcumb path={["Home", "Services", "Design & Creative"]} />
      <HeaderInfo
        title="Shop Checkout"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <ShopCheckoutArea />
    </>
  );
};

export default ShopCheckOut;
