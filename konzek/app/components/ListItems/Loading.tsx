import React from "react";
import { ImSpinner } from "react-icons/im";

const Loading = () => {
  return (
    <div className="w-[98%]  flex-1 flex items-center justify-center text-black">
      <ImSpinner className="text-indigo-500 animate" size={24}/>
    </div>
  );
};

export default Loading;
