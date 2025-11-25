import React, { useState } from 'react';
type ButtonsProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}

export default function Buttons(props:ButtonsProps) {
    const [showEvent,setShowEvent] = useState<string>("");
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
                <button
                    onClick={(event) => {
                        props.handleClick(event)
                        setShowEvent(event.type);
                    } }
                    className="border p-3 text-2xl italic cursor-pointer duration-150 bg-blue-500 text-white rounded-lg hover:bg-blue-700 m-4">
                    Click Me
                </button>
                <p>Check Console Logs</p>
                <p>{showEvent}</p>
        </div>
    )
}