import React from "react";

const Talent = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">{result.length} Talents</h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default Talent;
