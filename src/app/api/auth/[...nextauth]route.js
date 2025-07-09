import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    FacebookProvider({
      clientId: "1074719487946440",
      clientSecret: "f79a751c7f82a92fad0f3a545f8f61cc",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
