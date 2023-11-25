import { TaskProps } from "@/props"

interface TaskType  {
        newStatus: {
            status:string
            id:string
        }

}

export const setStatusTask = async ({newStatus}:TaskType) => {
  
    try {
        const response = await fetch(`http://localhost:3000/api/tasks/status/${newStatus.id}` , {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            }, 
            body: JSON.stringify(newStatus.status),
          
        })
   
        return response

    } catch (error) {
        throw new Error("Failed to fetch single task")
    }
}