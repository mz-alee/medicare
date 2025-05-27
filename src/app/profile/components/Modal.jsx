"use client";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
const EDITModal = ({
  // btnName,
  // handleAddseat,
  // register,
  // series,
  // errors,
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="My Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
          },
          content: {
            minheight: "42vh",
            width: "28vw",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <div className={`flex flex-col gap-1 text-sm   `}>
          <h2 className="capitalize font-bold w-fit text-[1vw] ">add seat</h2>
          {/* select option  */}
          <div className="w-full">
            <div className="w-full flex flex-col gap-1 items-start">
              <p className=" capitalize text-[13px]">select side</p>
              <div className="border border-gray-400 w-full h-[4vh] rounded-sm">
                <select
                  // {...register("type")}
                  className="bg-transparent outline-none w-full"
                >
                  <option value="">Select Type</option>
                  <option value="Top">Top</option>
                  <option value="Bottom">Bottom</option>
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
                </select>
              </div>
              {/* {errors.type && <p className="error">{errors.type.message}</p>} */}
            </div>
          </div>
          {/* seat numbers  */}
          <div className="w-full">
            <div className="w-full flex flex-col gap-1 items-start">
              <p className=" capitalize text-[13px]"> number of seats</p>
              <input
                type="number"
                // {...register("addSeat", { valueAsNumber: true })}
                className="border w-full border-gray-800 focus:border-blue-400 outline-none rounded-sm px-2 py-1"
                placeholder="Add seat number"
              />
            </div>
            {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
          </div>
          {/* Availability  */}
          <div className="w-full">
            <div className="w-full flex flex-col gap-1 items-start">
              <p className=" capitalize text-[13px]"> Availability</p>
              <div className="border border-gray-400 w-full h-[4vh] rounded-sm">
                <select className="bg-transparent outline-none w-full">
                  <option value="avail">Availble</option>
                  <option value="avail">unavailable</option>
                </select>
              </div>
            </div>
          </div>
          {/* series  */}
          <div className="w-full">
            <div className="w-full flex flex-col gap-1 items-start">
              <p className=" capitalize text-[13px]"> Series</p>
              <div className="border border-gray-400 w-full h-[4vh] rounded-sm">
                <select
                  // {...register("category")}
                  className="bg-transparent outline-none w-full"
                >
                  <option value="">Select Series</option>
                  {/* {series &&
                    series.length &&
                    series?.map((items, index) => {
                      return (
                        <option key={index} value={items}>
                          {items}
                        </option>
                      );
                    })} */}
                </select>
              </div>
              {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
            </div>
          </div>
          {/* btns  */}
          <div className=" flex justify-end">
            <button
              onClick={() => {
                // setIsOpen(false);
              }}
              className=" text-gray-500 rounded-2xl px-4 py-1 hover:text-black/80"
            >
              Cancle
            </button>
            <button
              type="submit"
              // onClick={handleAddseat}
              className="bg-blue-400 hover:bg-blue-500 rounded-2xl px-4 py-1 text-white"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default EDITModal;
