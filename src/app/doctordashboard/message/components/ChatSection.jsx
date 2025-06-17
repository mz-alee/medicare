import React from "react";
import Image from "next/image";
import emptyProfile from "../../../../../public/Images/empty.webp";
import { LuSmilePlus } from "react-icons/lu";
import { GoPaperclip } from "react-icons/go";
import { IoMdSend } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
const ChatSection = () => {
  return (
    <div className=" w-[70vw] text-black bg-white shadow-2xl px-4 flex flex-col justify-between rounded-2xl h-[96vh]  py-2 ">
      <div className="flex items-center gap-2 w-full ">
        <div className=" overflow-hidden rounded-full h-10 w-10">
          <Image src={emptyProfile} alt="profile" className="w-full h-full" />
        </div>
        <div>
          <h1 className="text-[14px] lg:text-[1vw]">Name</h1>
          <p className="text-[11px] lg:text-[0.8vw]">online</p>
        </div>
      </div>
      <div className="relative bg-[#d4e9e8] w-full h-[85%]">
        <div className="bg-white rounded-2xl text-[13px] capitalize top-4 px-2 absolute left-[50%]">
          <p>today</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="h-10 px-4 rounded-4xl outline-none border-none bg-blue-100/50 w-[93%] flex items-center gap-2">
          <button className="text-xl text-[#5ca39f]">
            <LuSmilePlus />
          </button>
          <input
            type="text"
            className="outline-none border-none text-[13px] lg:text-[0.9vw] bg-whitepx-2 w-[90%]"
            placeholder="Type a message"
          />
          <button className="text-xl text-gray-500">
            <GoPaperclip />
          </button>
          <button className="text-xl text-[#205454]">
            <IoMdSend />
          </button>
        </div>
        <div className="bg-[#205454] rounded-full h-10 w-10 flex items-center justify-center">
          <button className="text-2xl text-white  ">
            <MdKeyboardVoice />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
