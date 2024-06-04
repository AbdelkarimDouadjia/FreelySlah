import React from "react";
//import TabSection from "../../components/section/TabSection.jsx";
//import Breadcumb from "../../components/Breadcumb/Breadcumb.jsx";
import "./Product.css";
import ProductContactWidget from "../../components/section/ProductContactWidget.jsx";
import ProductAbout from "./ProductAbout.jsx";
import ProductDetailReviewInfo from "../../components/section/ProductDetailReviewInfo.jsx";
import ProductDetailComment from "../../components/section/ProductDetailComment.jsx";
import ProductDetailSlider from "../../components/section/ProductDetailSlider.jsx";

const Product = () => {
  const breadcrumbPath = ["Home", "Products", "Electronics"];
  return (
    <>
      <div style={{ display: "flex", marginRight: "0px", marginLeft: "40px" }}>
        <div style={{ flex: 1, marginRight: "40px" }}>
          <ProductDetailSlider />
          <ProductAbout />
        </div>
        <div style={{ flex: "0 0 400px" }} className="mt-40 ml-24 mr-40">
          <ProductContactWidget />
        </div>
      </div>
      <ProductDetailReviewInfo />
      <ProductDetailComment />
    </>
  );
};

export default Product;
