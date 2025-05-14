"use client";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "./components/QueryProvider";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const path = usePathname();
  console.log(path);

  return (
    <html lang="en">
      <body className={`bg-white w-full ${poppins.className}`}>
        <QueryClientProvider client={QueryProvider}>
          {!["/Login", "/Signup","/forget","/Resetpassword"].includes(path) && <Navbar />}
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
