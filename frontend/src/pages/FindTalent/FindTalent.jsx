import React, { useEffect, useState } from "react";
import TalentBanner from "./TalentBanner";
import Cards from "./Cards";
import Talent from "./Talent";
import SideBar from "./Sidebar/SideBar";

const FindTalent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [talents, setTalents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    fetch("talent.json")
      .then((res) => res.json())
      .then((data) => {
        setTalents(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  //filter talents by title
  const filteredItems = talents.filter(
    (talent) =>
      talent.talentTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      talent.name.toLowerCase().includes(query.toLowerCase()) ||
      talent.category.toLowerCase().includes(query.toLowerCase())
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
  const filteredData = (talents, selected, query) => {
    let filteredTalents = talents;
    if (query) {
      filteredTalents = filteredItems;
    }
    if (selected) {
      filteredTalents = filteredTalents.filter(
        ({ talentLocation, price, category, employmentType, postingDate }) =>
          talentLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(price) <= parseInt(selected) ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          category.toLowerCase() === selected.toLowerCase()
      );
    }
    const { startIndex, endIndex } = calculatePageRange();
    filteredTalents = filteredTalents.slice(startIndex, endIndex);

    const middleIndex = Math.ceil(filteredTalents.length / 2);
    const firstHalf = filteredTalents.slice(0, middleIndex);
    const secondHalf = filteredTalents.slice(middleIndex);

    return {
      firstHalf: firstHalf.map((data, i) => <Cards key={i} data={data} />),
      secondHalf: secondHalf.map((data, i) => <Cards key={i} data={data} />),
    };
  };

  const { firstHalf, secondHalf } = filteredData(
    talents,
    selectedCategory,
    query
  );

  return (
    <div>
      <TalentBanner query={query} handleInputChange={handleInputChange} />
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
                {firstHalf.length + secondHalf.length} Talents
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

export default FindTalent;
