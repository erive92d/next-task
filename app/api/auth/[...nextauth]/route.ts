import connect from "@/db";
import User from "@/models/User";
import NextAuth, {AuthOptions} from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcryptjs"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials:any) {
                const { email, password } = credentials
                try {
                    await connect()
                    const user = await User.findOne({email})
                   
                    if(!user) {
                        return null
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if(!passwordMatch) {
                        return null
                    }

                    return user
                } catch (error) {
                    
                    console.log(error)
                }
                
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/user/account/login"
    }
}

const handler = NextAuth(authOptions)


export {handler as GET, handler as POST}