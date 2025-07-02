"use client";

import { Exo_2, Poppins, Quicksand } from 'next/font/google';
import StaffNavbar from "./components/staffNavbar";

const poppins = Exo_2({
  // variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
  // display: "swap",
});
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body >
        <div className="flex h-screen w-full  bg-[#f9f9f9] ">
          <div className="hidden md:flex">
            <StaffNavbar />
          </div>
          <div className={`${poppins.className} w-full  overflow-y-scroll px-6`}>
            {/* content  */}
            {/* <div className="  flex-col md:flex-row gap-3  flex-wrap md:justify-between  flex items-center md:items-start "></div> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
