import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import logo from "../../../public/Images/footerLogo.png";
import Link from "next/link";
const Footer = () => {
  const Links = [
    {
      title: "Useful",
      items: ["Home", "About Us", "Services", "Contact", "FAQ's"],
    },
    {
      title: "Services",
      items: ["Location", "Work Hour", "Emergency", "Advice", "Careers"],
    },
    {
      title: "Popular",
      items: [
        "Find a Doctor",
        "Find Your Therapist",
        "Medication",
        "History",
        "Reports",
      ],
    },
  ];
  console.log(Links);

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="300"
      data-aos-easing="linear"
      data-aos-duration="500"
      className="w-full min-h-[50vh] py-3 justify-center bg-[#306665] text-white flex flex-col gap-4 lg:flex-row lg:justify-between items-center px-30"
    >
      <div className="lg:w-1/4 w-full  items-center  h-full flex flex-col justify-center gap-4  ">
        <div className="flex flex-col md:flex-row justify-center items-center  gap-3">
          <Image src={logo} alt="logo" className="w-20" />
          <h1 className="text-md md:text-[1.2vw] font-[500] italic">
            MediScheduler
          </h1>
        </div>
        <p className="text-[14px] md:text-[1.2vw] text-center md:text-left font-light  ">
          we offer finest health care services for you
        </p>
        {/* icons */}
        <div className="flex gap-3 ">
          <FaFacebook className="text-blue-500 text-2xl" />
          <FaTwitter className="text-blue-400 text-2xl" />
          <FaYoutube className="text-red-500 text-2xl" />
          <FaInstagram className="text-purple-400  text-2xl" />
        </div>
        <p className="text-[12px] text-center md:text-left lg:text-[0.8vw]">
          find us on social media and follow
        </p>
      </div>
      <div className="lg:w-1/2 hidden  w-full md:flex justify-center items-center  h-full">
        {/* links  */}
        <div className="w-[80%] justify-between items-center  h-full flex">
          {Links.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
              <ul className="space-y-1 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link href="/" className="hover:underline text-[12px]">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-1/4 w-full h-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-[14px] text-center">
          Not a member yet? Join now to unlock exclusive access
        </h1>
        <button className="border border-[#F5F5F5] text-[12px] md:text-[1vw] text-white w-fit hover:bg-[#ffff] hover:text-[#417978] rounded-full px-4 py-2">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Footer;
