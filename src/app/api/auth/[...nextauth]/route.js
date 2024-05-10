import NextAuth from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";
import axios from "axios";
import { post } from "@/helpers/AxiosInstance";

export const authOptions = {
  providers: [
    CredentialsProviders({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email@gmail.com",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials, req) {
        console.log("CREDENTIALS", credentials);
        console.log("REQ", req);
        if (!credentials?.email || !credentials?.password) return null;
        const { email, password } = credentials;
        const res = await post("http://localhost:3000/api/auth/login", {
          email: email,
          password: password,
        });
        if (res.status === 401) {
          console.log(res.statusText);
          return null;
        }
        return res.user;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
