import React, { useEffect, useRef, useState } from 'react'

export default function MutableDom() {
    const [timer,setTimer] = useState(0);
    const interValRef = useRef<number | null>(null);

    const stopTimer = () => {
        if(interValRef.current){
            window.clearInterval(interValRef.current);
        }
    }
    useEffect(()=>{
        interValRef.current = window.setInterval(()=>{
            setTimer((timer) => timer+1)
        },1000);
        return ()=>{
            stopTimer();
        }
    },[]);

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-2xl '>Hook Time - {" "}
                <span className='text-red-500'>{timer}</span>
            </h1>
            <button 
                className='p-3 m-3 border rounded-lg cursor-pointer bg-accent hover:bg-accent/50 duration-150'
                onClick={()=>stopTimer()}>Stop Timer
            </button>
        </div>
    )
}
