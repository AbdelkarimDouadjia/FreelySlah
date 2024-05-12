import React from "react";

const Service = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">{result.length} Services</h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Service;
