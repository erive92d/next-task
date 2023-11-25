
import EditTask from '@/app/components/Actions/EditTask'
import { getSingleTask } from '@/controllers/getSingleTask'
import React, { useEffect, useState } from 'react'

type ParamProps = {
    params: {
        id:string
    }
}


export default async function EditTaskServer({params}:ParamProps) {     
    const { id } = params
    const task = await getSingleTask(id)
    
    if(task) {
        return <EditTask {...task} />
    } else {
        return <h1>Cannot be found</h1>
    }



}
