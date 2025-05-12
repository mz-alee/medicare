import Image from "next/image";
import React from "react";
import docter from "../../../public/Images/girl.png";
import homeIcon from "../../../public/Images/home.png";
import heartIcon from "../../../public/Images/heart.png";
import lightIcon from "../../../public/Images/light.png";
import likeIcon from "../../../public/Images/like.png";
const Services = () => {
  return (
    <div className="bg-[#f4f4f4] w-full flex gap-4 py-4  justify-around flex-col md:flex-row  items-center  mt-10 min-h-[70vh]">
      <div
        data-aos="zoom-in-right"
        data-aos-offset="100"
        data-aos-duration="1000"
        className="bg-[#d8edd0] md:w-[25vw] h-[55vh] rounded-2xl"
      >
        <Image
          src={docter}
          alt="docter"
          className="object-cover mx-auto h-full w-fit"
        />
      </div>
      {/* right side  */}
      <div className="flex flex-col items-center  md:w-130 gap-8 ">
        <h1
          data-aos="zoom-in-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          className="text-[#205454] border-b font-[600] uppercase border-[#417978] text-md md:text-[1.9vw] italic mb-2 w-fit "
        >
          our services
        </h1>
        <h2
          data-aos="zoom-in-left"
          data-aos-offset="100"
          data-aos-duration="1000"
          className="text-[15px] italic  md:text-[1.5vw] text-center  "
        >
          Experience exceptional healthcare with personalized, patient-centered
          services
        </h2>
        {/* services detail  */}
        <div className="flex justify-between ">
          <div className=" flex flex-wrap  justify-center gap-3 md:justify-between">
            <div
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="flex gap-2 w-60 "
            >
              <div className="flex  ">
                <Image
                  src={heartIcon}
                  className="w-10 h-10"
                  alt="heart"
                ></Image>
              </div>
              <div>
                <h1 className="capitalize">medical care</h1>
                <p className="text-[12px] w-30">
                  offering wide range of services
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="flex gap-2 w-60"
            >
              <div className="flex  ">
                <Image src={likeIcon} className="w-10 h-10" alt="heart"></Image>
              </div>
              <div>
                <h1 className="capitalize">patient setisfaction</h1>
                <p className="text-[12px] w-30">
                  personalized care plan for 100% patient satisfaction
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="flex gap-2 w-60"
            >
              <div className="flex  ">
                <Image src={homeIcon} className="w-10 h-10" alt="heart"></Image>
              </div>
              <div>
                <h1 className="capitalize">skilled professionals</h1>
                <p className="text-[12px] w-30">
                  experienced docters and supportive staff
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-left"
              data-aos-offset="100"
              data-aos-duration="1000"
              className="flex gap-2 w-60"
            >
              <div className="flex  ">
                <Image
                  src={lightIcon}
                  className="w-10 h-10"
                  alt="heart"
                ></Image>
              </div>
              <div>
                <h1 className="capitalize">advance technology</h1>
                <p className="text-[12px] w-30">
                  precise diagnostics, effective treatment, and recovery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
