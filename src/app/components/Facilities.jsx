import Image from "next/image";
import React from "react";
import faclityImage from "../../../public/Images/facilityImage.png";
import faclityImage2 from "../../../public/Images/facilityImage2.png";
import faclityImage3 from "../../../public/Images/facilityImage3.png";
import faclityImage4 from "../../../public/Images/facilityImage4.png";
const Facilities = () => {
  return (
    <div className="min-h-[100vh] py-4 mt-6 flex flex-col  gap-7 justify-center items-center">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h1 className="text-[#205454] uppercase border-b font-[500] border-[#417978] text-md md:text-[1.5vw] mb-2 w-fit ">
          Facilities
        </h1>
        <p className="md:w-120 text-center">
          Our Medical facilities are equipped with advance technology and modern
          infrastructure
        </p>
      </div>
      <div className="flex  flex-col gap-6 w-[80%] ">
        {/* 1st row  */}
        <div className="flex  flex-col gap-2 md:flex-row justify-between w-full">
          <div>
            <Image
              src={faclityImage2}
              alt="img"
              className=" md:h-[50vh] md:w-[52vw]"
            />
          </div>
          <div>
            <Image
              src={faclityImage}
              className="md:w-[25vw] md:h-[50vh]"
              alt="img"
            />
          </div>
          {/* <Image src={} alt='img'/> */}
        </div>
        {/* 2nd row  */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-2 md:flex-row justify-between w-full">
            <Image
              src={faclityImage3}
              className="md:w-[25vw] md:h-[50vh] "
              alt="img"
            />
            <Image
              src={faclityImage4}
              className="md:h-[50vh] md:w-[52vw]"
              alt="img"
            />
          </div>
          {/* <div className="w-[45vw] h-[30vh] bg-red-800">
            <Image src={faclityImage3} alt="img" />
          </div> */}

          {/* <Image src={} alt='img'/> */}
        </div>
      </div>
    </div>
  );
};

export default Facilities;
