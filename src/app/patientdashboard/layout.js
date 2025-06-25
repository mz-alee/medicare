"use client";

import { ConfirmProvider } from "material-ui-confirm";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen w-full  bg-[#f9f9f9] ">
          <div className="hidden  md:flex">
            <Navbar />
          </div>
          <div className="w-full  overflow-y-scroll px-3 md:px-6">
            {/* <Header name="Dashboard" /> */}
            {/* content  */}
            {/* <div className="  flex-col md:flex-row gap-3 px-6  flex-wrap md:justify-between  flex items-center md:items-start "> */}
            <ConfirmProvider>{children}</ConfirmProvider>
            {/* </div> */}
          </div>
        </div>
      </body>
    </html>
  );
}
