"use client";

import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full  bg-[#f9f9f9] ">
          <div className='hidden md:flex'>
          <Navbar />
          </div>
          <div className="w-full  overflow-y-scroll px-6">
            {/* <Header name="Dashboard" /> */}
            <div className="  flex-col md:flex-row gap-3  flex-wrap md:justify-between  flex items-center md:items-start "></div>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
