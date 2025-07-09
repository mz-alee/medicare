"use client";

import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NextAuth from "next-auth";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <GoogleOAuthProvider clientId="68929464903-h98sj7aduv34c31lo7tigf7bjl0lpqbv.apps.googleusercontent.com">
          <SessionProvider>
            <QueryClientProvider client={queryClient}>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </SessionProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
