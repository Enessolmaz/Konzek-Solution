"use client";
import { setSearchValue } from "@/app/redux/SearchValue";
import React from "react";
import { useDispatch } from "react-redux";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <div className="text-black bg-white w-[98.1%] h-16 flex px-4 items-center rounded-md">
      <input
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        className="bg-white outline-none w-full px-4"
        type="text"
        placeholder="Filter by name or capital city.. "
      />
      <FaSearch
        size={24}
        className="text-indigo-500  rounded-md  font-bold cursor-auto"
      />
    </div>
  );
};

export default SearchBar;
