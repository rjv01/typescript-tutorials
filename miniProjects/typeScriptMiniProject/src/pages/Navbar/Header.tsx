import React from 'react';
import { ModeToggle } from "@/components/mode-toggle";

const Header: React.FC = () =>{
    return(
        <div className=' flex w-full justify-between p-4 items-center border border-white'>
            <a href="/">Home</a>
            <ModeToggle />
        </div>
    )
}

export default Header;