"use client"

import Link from 'next/link'
import React from 'react'
import { BiEditAlt } from 'react-icons/bi'
import DeleteTask from '../Actions/DeleteTask'
import { TaskProps } from '@/props'

type DisplayProps = {
    tasks: TaskProps[]
}

export default function DisplayTasks({ tasks }: DisplayProps) {

    // return (
    //     <div className="">
    //         {tasks ? tasks.map((task) => (
    //             <div className="flex justify-between border-b py-2 px-2" key={task._id}>
    //                 <div className="">
    //                     <Link href={`/task/${task._id}`}>
    //                         <h1 className="font-bold text-lg">
    //                             {task.title}
    //                         </h1>
    //                     </Link>
    //                 </div>

    //                 <div>
    //                 <div className="badge badge-primary">{task.status}</div>                    </div>
    //                 <div className="flex items-center gap-2">
    //                     <Link href={`/edit-task/${task._id}`} className="text-orange-300 text-xl">
    //                         <BiEditAlt />
    //                     </Link>
    //                     <DeleteTask id={task._id}/>
    //                  </div>
    //             </div>
    //         ))
    //             :
    //             <div className="h-96 flex flex-col items-center justify-center">
    //                 <span className="loading loading-ring loading-lg"></span>
    //             </div>
    //     }

    //     </div>
    //   )

    return (
        <div>
            {tasks.length !== 0 ?
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className='font-bold text-black'>
                                <th></th>
                                <th>Task</th>
                                <th>Progress</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {tasks && tasks.map((task, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td className='w-20 overflow-x-auto'>
                                        <Link href={`/task/${task._id}`} className='font-bold'>
                                            {task.title}
                                        </Link>
                                    </td>
                                    <td>

                                        <div className={`badge 
                                        ${task.status === "Pending" ? "badge-warning" : ""}
                                        ${task.status === "Completed" ? "badge-success" : ""}
                                        ${task.status === "Not started" ? "badge-error" : ""}
                                        text-white`}>
                                            {task.status}
                                        </div>
                                    </td>
                                    <td className='flex justify-around items-center'>
                                        <Link href={`/edit-task/${task._id}`} className="text-orange-300 text-xl">
                                            <BiEditAlt />
                                        </Link>
                                        <DeleteTask id={task._id} />
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>
                :
                <div className='flex flex-col justify-center items-center h-20'>
                    <h1 className='font-light'>No task found..</h1>
                </div>

            }

        </div>
    )

}
