import { useState } from 'react';

type AuthUser = {
    name:string,
    email:string
}

export default function User() {
    const [user,setUser] = useState<AuthUser | null>(null)
    const handleLogin = ()=>{
        setUser({
            name:'raj',
            email:'raj@gmail.com'
        })
    }
    const handleLogout = ()=>{
        setUser(null);
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>user name is: </p>
            <p>user email is: </p>
        </div>
    )
}