"use client"
import React, { useRef, useState } from 'react'
import EditTask from './EditTask'
import { putEditTask } from '@/controllers/editTask'
import { useRouter } from 'next/navigation'
import { setStatusTask } from '@/controllers/setStatus'

type StatusType ={
    taskId: string
    taskStatus: string
  
}

export default function Status({taskId, taskStatus}:StatusType) {
    const router = useRouter()

    const status = useRef(taskStatus)

    const updateStatus = async (e:React.MouseEvent) => {
        e.preventDefault()
        
        if(status.current === "Not started") {
            status.current = "Pending"
        } else {
            status.current = "Completed"
        } 

        const newStatus = {
            id: taskId,
            status: status.current
        }
     
        try {
            const response = await setStatusTask({newStatus})
            if(response.ok) {
                router.refresh()
            }
           
        } catch (error) {
            throw new Error("Failed")
        }

    }

  return <button onClick={updateStatus} className={`btn btn-small btn-success text-white ${status.current === "Completed" ? "btn-disabled" : ""}`}>
    {status.current}
    </button>

}
