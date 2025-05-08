import React, { lazy } from "react";
import WeeklyTimetable from "./WeeklyTimetable";
import Image from "next/image";
import bg from "../../../public/Images/WhoWeAreBg.png";
const WhoWeAre = () => {
  return (
    <div className="relative text-black">
      <Image src={bg} alt="bg" className="w-[50vw] absolute" loading="lazy" />
      <div className="flex justify-center flex-col items-center gap-6">
        <h1 className="text-[#205454] border-b font-[500] border-[#417978] text-md md:text-[1.5vw] mb-2 w-fit capitalize">
          who we are?
        </h1>
        <p className="md:w-120 text-center">
          Simplifying Management, Enhancing Care – Your Partner in Medical
          Success.
        </p>
        <div className="flex flex-col md:flex-row justify-between gap-2 w-[85%] ">
          <div className="flex md:w-[50%] flex-col gap-3 justify-between">
            <h1 className="font-[600] text-[15px] md:text-[1.8vw]  lg:w-130 italic text-[#282828]">
              A Hospital is committed to providing high-quality medical care
            </h1>
            <p className="text-[13px]  md:text-[1.2vw] xl:w-150">
              Medi schedular provides high-quality medical care with advanced
              technology and compassionate healthcare professionals. We ensure
              24/7 services to prioritize your health and well-being. We have
              dedicated team of doctors and therapists offering advanced
              healthcare services and compassionate patient care
            </p>
            <p className="text-[13px] md:text-[1.2vw] xl:w-150">
              Our health is our priority, and we are committed to delivering
              safe, effective, and affordable medical solutions. From diagnosis
              to recovery, we stand by you with expert care, modern technology,
              and a patient-first approach.
            </p>
            <div className="owner flex items-center  gap-2">
              <div className="w-20 h-20 rounded-full overflow-hidden">
                <img
                  src="https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
                  alt="director"
                />
              </div>
              <div className="italic">
                <h1 className="text-[#417978] text-sm font-[500] md:text-[1.5vw]">
                  Mirza ALi
                </h1>
                <h1 className="text-gray-600">Founder & Director</h1>
              </div>
            </div>
          </div>
          <div>
            <WeeklyTimetable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
