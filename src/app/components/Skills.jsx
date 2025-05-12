import Image from "next/image";
import React from "react";
import skillIcon1 from "../../../public/Images/skillIcon.png";
import skillIcon2 from "../../../public/Images/skillIcon2.png";
import skillIcon3 from "../../../public/Images/skillIcon3.png";
import skillIcon4 from "../../../public/Images/skillIcon4.png";
// import skillIcon4 from "../../../public/Images/doctersImage.png"
import skillGroup from "../../../public/Images/doctersImage.png";

const skill = [
  { Image: skillIcon3, heading: "10+", statement: " years of experience" },
  { Image: skillIcon2, heading: "1000+", statement: " happy patients" },
  { Image: skillIcon4, heading: "70+", statement: " qualified docters" },
  { Image: skillIcon1, heading: "130+", statement: " hospital rooms" },
];

const Skills = () => {
  return (
    <div className=" min-h-[90vh] w-[80%] flex flex-col lg:flex-row py-6 gap-6  lg:justify-between items-center mx-auto">
      {/* left side  */}
      <div className=" lg:w-[60%] flex justify-center flex-wrap gap-4  ">
        {skill.map((items, index) => (
          <div
            data-aos="zoom-in-down"
            data-aos-offset="100"
            data-aos-duration="1000"
            key={index}
            className="border border-gray-200 flex justify-center px-6 rounded-2xl  h-[180px]  lg:h-[38vh] w-[180px] lg:w-[20vw]"
          >
            <div className="flex flex-col capitalize gap-4 justify-center items-center">
              <div className="bg-[#f0eefe] flex justify-center items-center rounded-full h-15 w-15  md:h-20 md:w-20">
                <Image
                  className="md:h-10 md:w-10 h-8 w-8"
                  src={items.Image}
                  alt="blue vector"
                />
              </div>
              <h1 className="font-[600] italic text-2xl md:text-[1.8vw] text-gray-800">
                {items.heading}
              </h1>
              <p className="text-[12px] md:text-[1vw] text-gray-500">
                {items.statement}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* right side  */}
      <div>
        <Image
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          src={skillGroup}
          alt="docters image"
          className=" w-[60vw] md:w-[30vw]"
        />
      </div>
    </div>
  );
};

export default Skills;
