"use client";
import React from "react";
const Article = () => {
  return (
    <div
      // data-aos="zoom-in-right"
      // data-aos-duration="2000"
      className="w-full sm:w-[48vw] md:w-[40vw] lg:w-[70vw]  xl:w-[25vw] bg-white h-[280px] lg:h-[50vh] flex flex-col gap-1 rounded-2xl p-4"
    >
      <h1 className="heading italic font-[400]">Articles</h1>
      <div className="overflow-x-auto hide-scrollbar h-60  xl:h-[40vh]">
        <table className="min-w-full h-full table-auto border-collapse text-left">
          <tbody>
            {true ? (
              <div className="flex justify-center items-center h-full">
                <p className="text-[12px] lg:text-[0.9vw] text-gray-600">
                  no upcoming events
                </p>
              </div>
            ) : (
              Array.from({ length: 6 }).map((items, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-black/10 cursor-default text-[10px] lg:text-[0.9vw]  border-gray-200"
                >
                  <td className="px-4 py-2   text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sunt, voluptatum.
                  </td>
                </tr>
              ))
            )}
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Article;
