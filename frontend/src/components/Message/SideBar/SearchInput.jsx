import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered rounded-full bg-gray-300 border border-black"
      />
      <button type="submit">
        <IoSearchSharp className="w-8 h-8 text-black outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
