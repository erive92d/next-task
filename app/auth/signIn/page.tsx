"use client"

import { signIn } from 'next-auth/react'
import React, { useRef, useState } from 'react'

export default function LoginPage() {

    const email = useRef("")
    const pass = useRef("")

    const [error, setError] = useState<boolean>(false)

    const onSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()
        const results = await signIn("credentials", {
            email: email.current,
            password: pass.current,
            redirect: true,
            callbackUrl:"/dashboard"
        }) 

        console.log(results)

    }

  return (
        <div className='flex flex-col items-center gap-2 justify-center h-screen'>
          <h1 className='text-2xl font-bold'>Log in</h1>
          {/* {error && <h1 className='bg-red-500 p-2 rounded-xl text-white'>{error}</h1>} */}
          <form  className='space-y-2'>
                <div className='text-white flex flex-col gap-2'>
                    <input name="email" onChange={(e) => email.current = e.target.value}  type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
                    <input name="password" onChange={(e) => pass.current = e.target.value}  type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />    
                </div>
                <div className='flex justify-center'>
                    <button onClick={onSubmit} className='btn btn-success btn-wide'>Login</button>
                </div>     
            
          </form>
          {/* <button
                className="bg-slate-600 rounded px-4 py-2 text-white"
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                type="button"
                >
                Sign In With GitHub
                </button>
        */}
        </div>
   
  )
}
