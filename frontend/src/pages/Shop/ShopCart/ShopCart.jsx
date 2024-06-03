import React from "react";
import Breadcumb from "../../../components/Breadcumb/Breadcumb.jsx";
import HeaderInfo from "../../../components/HeaderInfo/HeaderInfo.jsx";
import ShopCartArea from "./components/ShopCartArea.jsx";

const ShopCart = () => {
  return (
    <>
      <Breadcumb path={["Home", "Services", "Design & Creative"]} />
      <HeaderInfo
        title="Shop Cart"
        brief="Give your visitor a smooth online experience with a solid UX design"
      />
      <ShopCartArea />
    </>
  );
};

export default ShopCart;
