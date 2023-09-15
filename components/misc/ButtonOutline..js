import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-purple-600 hover:text-purple-600 hover:bg-white-500 outline-none rounded-l-[8px] rounded-r-[8px] capitalize bg-purple-600 text-white-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
