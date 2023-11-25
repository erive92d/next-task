import Task from "@/models/Task"
import connect from "@/db";

import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { authOptions } from "../auth/[...nextauth]/route"
import User from "@/models/User"

export const GET = async (req:NextRequest, res:NextResponse) => {
    

    // const {email} = await req.json()
    // console.log(email, "xx")
 try {
    await connect()
   
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
  
     // console.log(userEmail, "Ssss")
     const user = await User.findOne({email: email}).populate({path:"tasks", model: Task})
    // const user = await User.find({})
     
     return new NextResponse(JSON.stringify(user), {status:200})

 } catch (error) {
     return new NextResponse("Error", {status: 500})

 }
}