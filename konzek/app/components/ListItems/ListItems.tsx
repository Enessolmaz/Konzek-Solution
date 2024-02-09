"use client";
import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_COUNTRIES } from "./ListQuery";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import Loading from "./Loading";

interface FilterList {
  name: string;
  capital: string;
  id: string;
  emoji: string;
  currency: string;
  phone: string;
  color: string;
  search: {
    searchValue: string;
  };
}

const ListItems = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  const [listItems, setListItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [visibleItemCount, setVisibleItemCount] = useState(25);
  const searchFilter = useSelector(
    (state: FilterList) => state.search.searchValue
  );
  const [selectedItemBG, setSelectedItemBG] = useState("");

  useEffect(() => {
    const randomColor = () => {
      const colors = [
        "red",
        "indigo",
        "blue",
        "teal",
        "purple",
        "amber",
        "emerald",
      ];
      const randomBgColor = colors[Math.floor(Math.random() * colors.length)];
      return randomBgColor;
    };

    if (data) {
      const items = data.countries.map((item: FilterList) => {
        return {
          ...item,
          id: nanoid(),
          color: `bg-${randomColor()}-500`,
        };
      });
      setListItems(items);
    }
  }, [data]);

  const showMore = () => {
    setVisibleItemCount(visibleItemCount + 15);
  };

  const filteredData = listItems.filter((item: FilterList) => {
    const name = item.name ? item.name.toString().toLowerCase() : "";
    const capital = item.capital ? item.capital.toString().toLowerCase() : "";
    return (
      name.includes(searchFilter.toLowerCase()) ||
      capital.includes(searchFilter.toLowerCase())
    );
  });

  const selectedItemRandomBg = (id: React.SetStateAction<string>) => {
    setSelectedItem(selectedItem === id ? "" : id);
    const colors = [
      {
        bgColor: "bg-red-500",
      },
      {
        bgColor: "bg-blue-500",
      },
      {
        bgColor: "bg-yellow-500",
      },
      {
        bgColor: "bg-lime-500",
      },
      {
        bgColor: "bg-indigo-500",
      },
    ];
    const newColor = colors[Math.floor(Math.random() * colors.length)].bgColor;
    setSelectedItemBG(newColor);

    if (selectedItemBG === newColor) {
      const newColorArray = colors.filter((item) => item.bgColor !== newColor);
      const uniqueColor =
        newColorArray[Math.floor(Math.random() * newColorArray.length)].bgColor;
      setSelectedItemBG(uniqueColor);
    }
  };

  return (
    <div className="flex flex-col h-full gap-6">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-wrap gap-8">
            {filteredData.slice(0, visibleItemCount).map((item: FilterList) => (
              <div
                className={`transition-all cursor-pointer rounded relative w-72 h-36 px-6 pt-6 pb-1 hover:shadow-lg  ${
                  selectedItem === item.id
                    ? `${selectedItemBG} text-white`
                    : // ? selectedItemBG
                      // : ""
                      "bg-[#ffffff] text-[#5a5a5a]"
                }`}
                key={item.id}
                onClick={() => selectedItemRandomBg(item.id)}
              >
                <span
                  className={`absolute top-[-22px] h-10 w-10 flex items-center justify-center text-white rounded-xl font-bold ${item.color}`}
                >
                  {item.emoji}
                </span>
                <div className="flex flex-col h-full gap-4 ">
                  <div className="flex flex-col mt-2 gap-1">
                    <span className="text-[#2e2e2e] text-sm">
                      {item.currency}
                    </span>
                    <span className="text-[#19202D] font-bold">
                      {item.capital ? item.capital : "no capital"}
                    </span>
                  </div>
                  <span className="mt-auto text-[#5964E0] font-bold flex justify-between items-center ">
                    <span className=""> {item.name}</span>
                    <span> +{item.phone}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          {filteredData.length > 40 && (
            <button
              className="bg-[#5c64d7]  w-24 mx-auto rounded-md h-10"
              onClick={showMore}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ListItems;
