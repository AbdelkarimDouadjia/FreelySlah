import React, { useEffect, useState } from "react";
import JobBanner from "./JobBanner";
import Cards from "./Cards";
import Job from "./Job";
import SideBar from "./Sidebar/SideBar";

const FindJob = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  //filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
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
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          // postingDate >= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
    }
    //slice the page based on cuurent page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    const middleIndex = Math.ceil(filteredJobs.length / 2);
    const firstHalf = filteredJobs.slice(0, middleIndex);
    const secondHalf = filteredJobs.slice(middleIndex);

    return {
      firstHalf: firstHalf.map((data, i) => <Cards key={i} data={data} />),
      secondHalf: secondHalf.map((data, i) => <Cards key={i} data={data} />),
    };
  };

  const { firstHalf, secondHalf } = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <JobBanner query={query} handleInputChange={handleInputChange} />
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
                {firstHalf.length + secondHalf.length} Jobs
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

export default FindJob;
