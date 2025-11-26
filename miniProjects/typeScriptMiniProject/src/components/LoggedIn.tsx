import { useState } from 'react';

export default function LoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    }
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div>
                <button className='cursor-pointer hover:bg-blue-400 hover:text-black border border-primary text-xl p-3 m-3' onClick={handleLogin}>Login</button>
                <button className='cursor-pointer hover:bg-blue-400 hover:text-black border border-primary text-xl p-3 m-3' onClick={handleLogout}>Loggout</button>
            </div>
            <p className={`${isLoggedIn ? 'text-green-400':'text-red-400'}`}>{isLoggedIn ? 'logged-in' : 'logged out'}</p>
        </div>
    )
}