import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { headers } from "next/headers"

export async function getTasks () {
  
    try {
        const res = await fetch(`http://localhost:3000/api/user/`, {
            method: "GET",
            headers: headers()
        })
   
        if(!res.ok) {
            throw new Error("Failed to fetch data")
        }
        return await res.json()
    } catch (error) {
        throw new Error("Failed to fetch")
    }
   
  
}
