import React from "react";
const categoryItems = [
  {
    id: 1,
    title: "Business",
    image: "/images/home/category/business.png",
  },
  {
    id: 2,
    title: "Graphic Design",
    image: "/images/home/category/graphicdesign.png",
  },
  {
    id: 3,
    title: "Lifestyle",
    image: "/images/home/category/lifestyle.png",
  },
  {
    id: 4,
    title: "Programming",
    image: "/images/home/category/programming.png",
  },
  {
    id: 5, // Corrected ID for uniqueness
    title: "Voice",
    image: "/images/home/category/voice.png",
  },
  {
    id: 6, // Corrected ID for uniqueness
    title: "Writing",
    image: "/images/home/category/writing.png",
  },
];
const Categories = () => {
  return (
    <div
      className="max-w-screen-2xl container mx-auto xl:px-24 px-4"
      style={{ backgroundColor: "#FCFCFC" }}
    >
      <div className="text-center">
        <h2 className="md:text-5xl text-4xl text-black font-bold md:leading-snug leading-snug">
          Popular Categories
        </h2>
        <p className="uppercase tracking-wide font-medium text-lg">
          Customer Favorites
        </p>
      </div>

      {/* Category cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-around items-center mt-9">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white py-4 px-5 w-50 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10"
          >
            <div className="w-full mx-auto flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="p-7 w-28 h-28"
              />
            </div>
            <div className="mt-2 space-y-1">
              <h5 className="text-[#1E1E1E] font-medium">{item.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
