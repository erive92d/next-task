
import React from 'react'
import UserInfo from '../components/UserInfo'
import Link from 'next/link'
import { useSession } from 'next-auth/react';
import TaskLists from '../components/Tasks/TaskLists';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
export default async function Home() {
    const session:any = await getServerSession(authOptions)
    // const {data:session} = useSession();
  
    if(!session) {
        return <h1>Loading</h1>
    }

  return (
    <div className="flex flex-col mx-auto w-96 gap-4">
          <UserInfo data={session}/>
          <div className='bg-white '>
            <TaskLists/>
          </div>
    </div>
  )
}
