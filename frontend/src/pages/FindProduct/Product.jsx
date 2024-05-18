import React from "react";

const Product = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">{result.length} Products</h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Product;
