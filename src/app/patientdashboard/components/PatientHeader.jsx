"use client";
import { setCookie } from "cookies-next";
import Navbar from "./Navbar";
import React, { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
const PatientHeader = ({ name, links, setPageNum, pageNum }) => {
  const [isActive, setIsActive] = useState(false);
  const path = usePathname();

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="w-full flex flex-col gap-2 py-6 "
    >
      <div className="flex flex-col md:flex-row  justify-between w-full">
        <div className="flex justify-between items-center ">
          <h1 className="text-2xl text-gray-800 italic font-[500]">{name}</h1>
          <button
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="md:hidden"
          >
            {isActive === true ? <IoMdClose /> : <RiMenu4Fill />}
          </button>
        </div>

        {path === "/doctordashboard" && (
          <input
            className="text-[9px] md:text-[12px] lg:w-90 px-4 py-2 outline-none border border-gray-300 bg-white shadow-2xl rounded-lg "
            type="search"
            placeholder="search by date,docter,clinic,desease... "
            name=""
            id=""
          />
        )}
      </div>
      {/* links  */}
      <div className="w-full border-b flex items-end gap-1 py-2 border-gray-200 text-[10px] lg:text-[1vw]">
        {links?.map((items, index) => {
          return (
            <button
              onClick={() => {
                setPageNum(index);
                console.log(pageNum);
                
                console.log(index);
              }}
              key={index}
              // data-aos="zoom-in-up"
              // data-aos-duration="1200"
              className={`${
                index === pageNum && "  border-b border-[#1e3837]"
              } outline-none text-gray-600  relative top-2 pb-2 px-5 cursor-pointer`}
            >
              {items}
            </button>
          );
        })}
      </div>
      <div className={`${isActive ? "absolute  flex" : " hidden"} md:hidden `}>
        <Navbar />
      </div>
    </div>
  );
};

export default PatientHeader;
