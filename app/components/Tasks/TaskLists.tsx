import { getTasks } from "@/controllers/getTasks"
import DisplayTasks from "./DisplayTasks"


export default async function TaskLists() {
  
        const taskList = await getTasks()
        const tasks = taskList?.tasks
     
        if(!taskList) return <h1>Loading...</h1>

        return <DisplayTasks tasks={tasks} />
 
}


