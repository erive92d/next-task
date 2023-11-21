"use client"

import Link from 'next/link'
import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import DeleteTask from '../Actions/DeleteTask'
import { TaskProps } from '@/props'

type DisplayProps = {
    tasks: TaskProps[]
}

export default function DisplayTasks({tasks}:DisplayProps) {
    
    return (
        <div className="">
            {tasks ? tasks.map((task) => (
                <div className="flex justify-between border-b py-2 px-2" key={task._id}>
                    <div className="">
                        <Link href={`/task/${task._id}`}>
                            <h1 className="font-bold text-lg">
                                {task.title}
                            </h1>
                        </Link>
                    </div>

                    <div>
                        <button className='btn btn-warning btn-sm text-white'>{task.status}</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href={`/edit-task/${task._id}`} className="text-orange-300 text-xl">
                            <BiEditAlt />
                        </Link>
                        <DeleteTask id={task._id}/>
                      
                     </div>
    
    
                </div>
            ))
                :
                <div className="h-96 flex flex-col items-center justify-center">
                    <span className="loading loading-ring loading-lg"></span>
                </div>
        }
    
        </div>
      )
}
