// "use client";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "./components/QueryProvider";
// import { usePathname } from "next/navigation";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export default function RootLayout({ children }) {
  // const path = usePathname();

  return (
    <html lang="en">
      <body suppressHydrationWarning className={` w-full `}>
        <QueryClientProvider client={QueryProvider}>
          {/* {["/"].includes(path) && <Navbar />} */}

          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
