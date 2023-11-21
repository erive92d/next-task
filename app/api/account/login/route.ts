import User from "@/models/User"
import connect from "@/db"
import bcrypt from "bcrypt"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req:NextRequest, res:NextResponse) {

    const { email, password} = await req.json()
   
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

        return new NextResponse(JSON.stringify(user), {status:200})
       
    } catch (error) {
        return new NextResponse("Error", {status: 500})

    }
}