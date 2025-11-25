import React from 'react';
import { ModeToggle } from "@/components/mode-toggle";

const Header: React.FC = () =>{
    return(
        <div className=' flex w-full justify-between p-4 items-center border-b-3 border-primary text-xl'>
            <a href="/" className='text-2xl'>Home</a>
            <ModeToggle />
        </div>
    )
}

export default Header;