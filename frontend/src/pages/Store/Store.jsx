import React from "react";
import StoreAbout from "./StoreAbout";
import StoreProducts from "./StoreProducts";
import ProductContactWidget from "../../components/section/ProductContactWidget";

const Store = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1, marginRight: "60px" }}>
          <StoreAbout />
        </div>
        <div style={{ flex: "0 0 400px" }} className="mt-40 ml-24 mr-40">
          <ProductContactWidget />
        </div>
      </div>
      <StoreProducts />
    </div>
  );
};

export default Store;
