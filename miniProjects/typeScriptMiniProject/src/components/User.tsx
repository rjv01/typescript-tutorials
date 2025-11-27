import { useState } from 'react';

type AuthUser = {
    name:string,
    email:string
}

export default function User() {
    // const [user,setUser] = useState<AuthUser | null>(null);
    const [user,setUser] = useState<AuthUser>({} as AuthUser);
    const handleLogin = ()=>{
        setUser({
            name:'raj',
            email:'raj@gmail.com'
        })
    }
    // const handleLogout = ()=>{
    //     setUser(null);
    // }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='flex gap-4 mb-4'>
                <button className='border-2 border-primary p-4 text-xl rounded-lg hover:bg-primary/50 cursor-pointer duration-150' onClick={handleLogin}>Login</button>
                {/* <button className='border-2 border-primary p-4 text-xl rounded-lg hover:bg-primary/50 cursor-pointer duration-150' onClick={handleLogout}>Logout</button> */}
            </div>
            <p className='text-2xl '>User name is: <span className='text-yellow-400'>{user?.name}</span> </p>
            <p className='text-2xl '>User email is: <span className='text-yellow-400'>{user.email}</span> </p>
        </div>
    )
}