import React from "react";

const Header = ({ name, links }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full flex flex-col gap-6 py-7 "
    >
      <div className="flex   justify-between w-full">
        <h1 className="text-2xl text-gray-800 italic font-[500]">{name}</h1>
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
        {links?.map((items, index) => {
          return (
            <button
            key={index}
              data-aos="zoom-in-up"
              data-aos-duration="1200"
              className="outline-none text-gray-600 cursor-pointer "
            >
              {items}
            </button>
          );
        })}

        {/* <button
          data-aos="zoom-in-up"
          data-aos-duration="1300"
          className="outline-none text-gray-600 cursor-pointer "
        >
          Schedule Overview
        </button>
        <button
          data-aos="zoom-in-up"
          data-aos-duration="1400"
          className="outline-none text-gray-600 cursor-pointer "
        >
          Upcoming Events
        </button>
        <button
          data-aos="zoom-in-up"
          data-aos-duration="1500"
          className="outline-none text-gray-600 cursor-pointer "
        >
          Articles
        </button>
        <button
          data-aos="zoom-in-up"
          data-aos-duration="1600"
          className="outline-none text-gray-600 cursor-pointer "
        >
          Charts
        </button> */}
      </div>
    </div>
  );
};

export default Header;
