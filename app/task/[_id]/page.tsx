import Status from '@/app/components/Actions/Status'
import { getSingleTask } from '@/controllers/getSingleTask'
import { TaskProps } from '@/props'
import React, { useEffect, useState } from 'react'

type ParamProps = {
  params: {
    _id:string
  }
}

export default  async function GrabTask({params}:ParamProps) {

  const task = await getSingleTask(params._id)

  if(!task) return <h1>Loading</h1>

  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <div className='flex flex-col items-center bg-white p-2 w-96 gap-2 rounded-lg'>
        <div>
          <h1 className='text-2xl font-bold'>{task.title}</h1>
        </div>
        <div >
          <p>{task.description}</p>
        </div>
        <div>
          <h1>Priority</h1>
          <p>{task.level} / 5</p>
        </div>
        <Status taskStatus={task.status} taskId={task._id}/>
      </div>
    </div>
  )
}
