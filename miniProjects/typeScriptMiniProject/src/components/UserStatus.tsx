import React from 'react'
import { useLoggedinStatus } from '../provider/Loggedin.tsx'

export const UserStatus: React.FC = () => {
    const context = useLoggedinStatus();
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='m-3 p-3 text-2xl text-center'>
                <h1 className='text-red-500 mb-6'>User Profile Page</h1>
                <p 
                    onClick={()=>{context?.setuser(!context.value)}}
                    
                >Your loggedin: <span 
                                className='cursor-pointer border rounded-lg border-blue-500 hover:text-white hover:bg-blue-900/50 duration-150 ml-3 p-3'>{String(context?.value)}
                                </span>
                </p>
            </div>
        </div>
    )
}