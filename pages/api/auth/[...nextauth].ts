import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next-auth/internals/utils";

const options = {
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "John Doe" },
        email: { label: "Email", type: "text", placeholder: "john.doe@test.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local`, {
            identifier: credentials.email,
            password: credentials.password,
          });
          if (data) {
            return data;
          } else {
            return null;
          }
        } catch (e) {
          // console.log('caught error');
          // const errorMessage = e.response.data.message
          // Redirecting to the login page with error message          in the URL
          // throw new Error(errorMessage + '&email=' + credentials.email)
          return null;
        }
      },
    }),
  ],

  session: {
    jwt: true,
  },

  callbacks: {
    // Getting the JWT token from API response
    jwt: async (token: { jwt: any; id: any }, user: { jwt: any; user: { id: any } }, account: any) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.user.id;
      }
      return Promise.resolve(token);
    },

    session: async (session: { jwt: any; id: any }, user: { jwt: any; id: any }) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
  },
};

const Auth = (req: NextApiRequest, res: NextApiResponse<any>) => NextAuth(req, res, options);

export default Auth;
