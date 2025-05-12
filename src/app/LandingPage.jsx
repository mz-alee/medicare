"use client";
import React, { useEffect } from "react";
import { Overpass, Ubuntu } from "next/font/google";
import { overpass } from "./components/Fonts";
import redVector from "../../public/Images/redVector.png";
import blueVector from "../../public/Images/blueVector.png";
import greenVector from "../../public/Images/greenVector.png";
import Image from "next/image";
import WhoWeAre from "./components/WhoWeAre";
import Facilities from "./components/Facilities";
import Services from "./components/Services";
import Skills from "./components/Skills";
import "aos/dist/aos.css";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Aos from "aos";
const LandingPage = () => {
  useEffect(() => {
    Aos.init({ once: false });
  }, []);
  return (
    <div className="w-full min-h-[200vh] ">
      {/* hero section  */}
      <div className=" heroSection h-[100vh]  bg-[#205454]">
        <div className="leftSection lg:w-1/2   h-full flex flex-col gap-4 items-center  justify-center ">
          <div className=" flex flex-col gap-4 justify-center items-center text-center lg:items-start lg:text-left">
            <h1
              data-aos="fade-up"
              className={`${overpass.className} text-xl md:[1vw] font-[400]   md:w-[30vw] `}
            >
              WELCOME To MediScheduler
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className={`${overpass.className} text-4xl md:text-[3vw] font-[900]  md:w-[30vw] `}
            >
              Your health is our highest priority
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1300"
              className={`${overpass.className} text-lg  w-[300px]`}
            >
              We offers finest health care services for you
            </h1>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="border border-[#F5F5F5] text-white w-fit hover:bg-[#ffff] hover:text-[#417978] rounded-full px-4 py-2"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* about docter      */}
      <div className="min-h-[70vh] bg-white flex flex-wrap justify-center gap-4 md:justify-between py-4 px-[10vw] text-center items-center text-black">
        <div
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-duration="1000"
          className="border border-gray-200 flex justify-center md:justify-between px-6 rounded-2xl h-[45vh] w-[300px]"
        >
          {/* card 1 */}
          <div className="flex flex-col capitalize gap-4 justify-center items-center">
            <div className="bg-[#f0eefe] flex justify-center items-center rounded-full h-30 w-30">
              <Image className="h-20 w-20" src={blueVector} alt="blue vector" />
            </div>
            <h1 className="font-[600]">qualified docters</h1>
            <p className="text-[12px] md:text-[1vw]">
              we have qualified docters who are highly trained professionals
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="border border-gray-200 flex justify-between px-6 rounded-2xl h-[45vh] w-[300px]"
        >
          {/* card 2 */}
          <div className="flex flex-col capitalize gap-4 justify-center items-center">
            <div className="bg-[#f0eefe] flex justify-center items-center rounded-full h-30 w-30">
              <Image
                className="h-20 w-20"
                src={greenVector}
                alt="blue vector"
              />
            </div>
            <h1 className="font-[600]">professional therapists</h1>
            <p className="text-[12px] md:text-[1vw]">
              we have provide therapists,guiding you toward healing,growth, and
              well-being.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-offset="300"
          data-aos-duration="1000"
          className="border border-gray-200 flex justify-between px-6 rounded-2xl h-[45vh] w-[300px]"
        >
          {/* card 3 */}
          <div className="flex flex-col capitalize gap-4 justify-center items-center">
            <div className="bg-[#f0eefe] flex justify-center items-center rounded-full h-30 w-30">
              <Image className="h-20 w-20" src={redVector} alt="blue vector" />
            </div>
            <h1 className="font-[600]">emergency</h1>
            <p className="text-[12px] md:text-[1vw]">
              your health and well-being are our priority at any hour of the day
              or night
            </p>
          </div>
        </div>
      </div>
      <WhoWeAre />
      <Facilities />
      <Services />
      <Skills />
      <FAQ />
      <Footer
      
       />
    </div>
  );
};

export default LandingPage;
