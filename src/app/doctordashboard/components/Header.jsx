import React from "react";

const Header = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-7 ">
      <div className="flex   justify-between w-full">
        <h1 className="text-2xl text-gray-800 italic font-[500]">Dashboard</h1>
        <input
          className="text-[9px] md:text-[12px] lg:w-90 px-4  outline-none border border-gray-300 bg-white shadow-2xl rounded-lg "
          type="search"
          placeholder="search by date,docter,clinic,desease... "
          name=""
          id=""
        />
      </div>
      {/* links  */}
      <div className="w-full border-b flex gap-6 py-2 border-gray-200 text-[10px] lg:text-[1vw]">
        <button className="outline-none text-gray-600 cursor-pointer ">
          Overview
        </button>
        <button className="outline-none text-gray-600 cursor-pointer ">
          Schedule Overview
        </button>
        <button className="outline-none text-gray-600 cursor-pointer ">
          Upcoming Events
        </button>
        <button className="outline-none text-gray-600 cursor-pointer ">
          Articles
        </button>
        <button className="outline-none text-gray-600 cursor-pointer ">
          Charts
        </button>
      </div>
    </div>
  );
};

export default Header;
