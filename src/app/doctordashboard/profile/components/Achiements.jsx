"use client";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import CertificateModal from "./CertificateModal";
const Achiements = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div id="root">
        <CertificateModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="w-full  flex flex-col gap-3 py-2">
        <div className=" border border-gray-200  gap-2 flex-col rounded-2xl w-full flex items-center py-2 px-8 h-28">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Certifications</h1>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]"
            >
              + Upload
            </button>
          </div>
          <div className="w-full flex justify-between border-b border-gray-400 pb-2 ">
            <div className="flex gap-2 items-center">
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                12/03/3030
              </p>
              <p className="w-15 text-[9px] lg:w-30  lg:text-[0.9vw] text-gray-700">
                status
              </p>
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                certificate name
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button>
                <FaRegEdit className="hover:text-blue-400" />
              </button>
              <button>
                <AiFillDelete className="hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>

        {/* personal information  */}
        <div className="border border-gray-200 rounded-2xl flex flex-col gap-4  py-2 min-h-60  px-8 w-full">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Publications</h1>
            <button className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]">
              + Upload
            </button>
          </div>
          <div className="w-full flex justify-between border-b border-gray-400 pb-2 ">
            <div className="flex gap-2 items-center">
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                12/03/3030
              </p>
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                status
              </p>
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                certificate name
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button>
                <FaRegEdit className="hover:text-blue-400" />
              </button>
              <button>
                <AiFillDelete className="hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-2xl flex flex-col gap-4  py-2 min-h-60  px-8 w-full">
          <div className="flex justify-between w-full border-b border-gray-400 pb-2 items-center">
            <h1>Awards</h1>
            <button className="bg-black hover:bg-gray-800 cursor-pointer text-white py-1 rounded-2xl px-4 text-[12px]">
              + Upload
            </button>
          </div>
          <div className="w-full flex justify-between border-b border-gray-400 pb-2 ">
            <div className="flex gap-2 items-center">
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                12/03/3030
              </p>
              <p className="w-15 text-[9px] lg:w-30  lg:text-[0.9vw] text-gray-700">
                status
              </p>
              <p className="w-15 text-[9px]   lg:w-30  lg:text-[0.9vw] text-gray-700">
                certificate name
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <button>
                <FaRegEdit className="hover:text-blue-400" />
              </button>
              <button>
                <AiFillDelete className="hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achiements;
