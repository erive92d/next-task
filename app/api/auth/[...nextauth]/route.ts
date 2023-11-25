import connect from "@/db";
import User from "@/models/User";
import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from "next-auth/providers/github"
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            name: "GitHub",
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
          }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "email", placeholder: "test@email.com"},
                password: {label: "Password", type: "password", placeholder: "xxxxxx"}
            },

            async authorize(credentials:any, req) {
            
               const response = await fetch("http://localhost:3000/api/account/login", {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify(credentials)
                })
            
               
                const user = await response.json()
                
                if(response.ok && user) {
                    return user
                } 

            
                // if(response.status === 501) {
                //     console.log("wrong")
                // }

                return null
                
                
            },
            
        })
        ,
        
    ],
    
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signIn"
    },
    
    session: {
        strategy: 'jwt',
      },
    callbacks: {
          jwt: async ({ token, user }) => {
            
            return { ...token, ...user };
          },
          session: async ({ session, token }) => {
            session.user = token;
         
            return session;
          },
    },
}

const handler = NextAuth(authOptions)


export {handler as GET, handler as POST}