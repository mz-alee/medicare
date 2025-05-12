import React from "react";
import { Accodian } from "./Accodian";
import { useClose } from "@headlessui/react";
import Image from "next/image";
import groupImage from "../../../public/Images/skillGroupImage.png";
const FAQ = () => {
  let close = useClose();
  return (
    <div className="min-h-[80vh]  mt-6 flex flex-col items-center gap-10 ">
      <div className="flex flex-col justify-center items-center">
        <h1
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="text-[#205454]  border-b font-[600] uppercase border-[#417978] text-md md:text-[1.9vw] italic mb-2 w-fit "
        >
          frequently asked questions
        </h1>
      </div>
      <div className="flex justify-between  flex-col items-center lg:items-start gap-4 lg:flex-row  h-full w-[80%]">
        {/* left side  */}
        <div className="md:w-[60%] h-[60%] my-auto">
          <Accodian />
        </div>
        {/* right side  */}
        <div
          data-aos="zoom-in-up"
          data-aos-offset="100"
          data-aos-duration="1000"
          className=""
        >
          <Image src={groupImage} alt="image" className="h-80 w-80" />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
