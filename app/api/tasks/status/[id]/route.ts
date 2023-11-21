import { NextRequest, NextResponse } from "next/server"
import Task from "@/models/Task"
type ParamProp = {
    params: {
        id:string
    }
}

export const PUT = async (req:NextRequest,{params}:ParamProp, res:NextResponse) => {
    
    const { id } = params
    const response = await req.json()
    
    // console.log(response)
    

   
    // console.log(id)
    try {
        // const {userEmail} = await req.json()
        // console.log(userEmail, "Ssss")
        // const user = await User.find({email: userEmail})
     
        const taskStatus = await Task.findByIdAndUpdate({_id: id}, {status: response})
        taskStatus.save()
  
        return new NextResponse(JSON.stringify(taskStatus), {status:200})

    } catch (error) {
        return new NextResponse("Error", {status: 500})

    }
}
