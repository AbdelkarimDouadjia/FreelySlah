import React, { useEffect, useState } from "react";
import ProductBanner from "./ProductBanner";
import Cards from "./Cards";
import Product from "./Product";
import SideBar from "./Sidebar/SideBar";

const FindProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  //filter Products by title
  const filteredItems = products.filter(
    (product) =>
      product.productTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
  );

  // radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //bottun based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //main function
  const filteredData = (products, selected, query) => {
    let filteredProducts = products;
    if (query) {
      filteredProducts = filteredItems;
    }
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ productLocation, price, category, postingDate }) =>
          productLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(price) <= parseInt(selected) ||
          category.toLowerCase() === selected.toLowerCase()
      );
    }
    const { startIndex, endIndex } = calculatePageRange();
    filteredProducts = filteredProducts.slice(startIndex, endIndex);

    const middleIndex = Math.ceil(filteredProducts.length / 2);
    const firstHalf = filteredProducts.slice(0, middleIndex);
    const secondHalf = filteredProducts.slice(middleIndex);

    return {
      firstHalf: firstHalf.map((data, i) => <Cards key={i} data={data} />),
      secondHalf: secondHalf.map((data, i) => <Cards key={i} data={data} />),
    };
  };

  const { firstHalf, secondHalf } = filteredData(
    products,
    selectedCategory,
    query
  );

  return (
    <div>
      <ProductBanner query={query} handleInputChange={handleInputChange} />
      <div className="text-black md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className=" p-4 rounded">
          <SideBar handleChange={handleChange} handleClick={handleClick} />
        </div>
        <div className="col-span-3  p-4 rounded-sm">
          {isLoading ? (
            <p className="font-medium">Loading...</p>
          ) : firstHalf.length > 0 || secondHalf.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              <div>{firstHalf}</div>
              <div>{secondHalf}</div>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">
                {firstHalf.length + secondHalf.length} Products
              </h3>
              <p> No Data Found</p>
            </>
          )}

          {firstHalf.length > 0 || secondHalf.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default FindProduct;
