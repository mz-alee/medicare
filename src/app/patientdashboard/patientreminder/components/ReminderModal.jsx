"use client";
import InputField from "@/app/components/InputField";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoIosClose } from "react-icons/io";
import Modal from "react-modal";
const ReminderModal = ({
  // btnName,
  // handleAddseat,
  // register,
  // series,
  // errors,
  isOpen,
  setIsOpen,
  title,
}) => {
  const [selectedBtn, setSelectedBtn] = useState("");
  const [indx, setIndx] = useState(null);
  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

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
            minheight: "500px",
            width: "350px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "8px",
          },
        }}
      >
        <div className={`flex flex-col  text-sm `}>
          <div>
            <IoIosClose
              onClick={() => {
                setIsOpen(false);
              }}
              className="text-2xl"
            />
          </div>
          <h2 className="capitalize mb-3 font-[500] text-[15px] lg:text-[1.1vw]   text-center ">
            appointment reminder
          </h2>
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <div className="w-full flex flex-col gap-1 items-start">
                <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                  Doctor name
                </p>
                <InputField
                  register={register}
                  placeholder="Doctor Name"
                  type="text"
                  name="Doctor_name"
                />
                {/* {errors.type && <p className="error">{errors.type.message}</p>} */}
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex flex-col gap-1 items-start">
                <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                  location
                </p>
                <InputField
                  register={register}
                  placeholder="location"
                  type="text"
                  name="location"
                />
              </div>
              {/* {errors.addSeat && (
              <p className="error">{errors.addSeat.message}</p>
            )} */}
            </div>
              <div className="w-full">
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Date
                  </p>
                  <InputField
                    register={register}
                    placeholder="Date"
                    type="date"
                    name="date"
                  />
                  {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
                </div>
              </div>
              <div className='w-full'>
                <div className="w-full  flex flex-col gap-1 items-start">
                  <p className=" capitalize text-[12px] text-gray-800 italic lg:text-[0.9vw]">
                    Time
                  </p>
                  <InputField
                    register={register}
                    placeholder="Time"
                    type="number"
                    name="time"
                  />
                  {/* {errors.category && (
                <p className="error">{errors.category.message}</p>
              )} */}
                </div>
            </div>
          </div>
          {/* btns  */}
          <div className=" flex mt-4 justify-between">
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className=" text-gray-500 text-[12px] lg:text-[0.8w] rounded-2xl border border-gray-500 w-37 px-3 py-1 hover:text-black/80"
            >
              Discard
            </button>
            <button
              type="submit"
              // onClick={handleAddseat}
              className="bg-[#132928] text-[12px] lg:text-[0.8w] cursor-pointer hover:bg-[#375f5d] rounded-2xl w-37 px-3 py-1 text-white"
            >
              Add
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReminderModal;
