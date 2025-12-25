import React, { useRef, useState } from "react";

//react.fc means react functional component
const Stopwatch: React.FC = () => {
    const [time,setTime] = useState<number>(0);
    const intervalRef = useRef<number|null>(null);

    const startTimer = ()=>{
        if(intervalRef.current !== null)
            return ;

        intervalRef.current = setInterval(()=>{
            setTime(prev => prev+1);
        },500);
    }
    const stopTimer = ()=>{
        if(intervalRef.current !== null){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }
    const resetTimer = ()=>{
        stopTimer();
        setTime(0);
    }
    return (
        <div className="min-h-screen flex flex-col items-center m-4 p-4">
            <h1 className="text-red-600 text-2xl mb-6">StopWatch App</h1>
            <div className="flex flex-col justify-center items-center border border-yellow-500/20 text-yellow-500 bg-yellow-400/20 m-4 p-4 rounded-lg">
                <div className="flex justify-center items-center text-2xl m-4 p-4 text-background bg-gray-200 rounded-full h-16 w-16">
                    <span>{time}</span>
                </div>
                <div className="flex m-2 p-2 gap-4 flex-col sm:flex-row">
                    <p
                        onClick={resetTimer}
                        className="border hover:text-yellow-200 border-yellow-500 hover:bg-yellow-700/20 rounded-lg cursor-pointer p-6 text-xl duration-150"
                    >Reset</p>
                    <p
                        onClick={startTimer}
                        className="border hover:text-yellow-200 border-yellow-500 hover:bg-yellow-700/20 rounded-lg cursor-pointer p-6 text-xl duration-150"
                    >Start</p>
                    <p
                        onClick={stopTimer}
                        className="border hover:text-yellow-200 border-yellow-500 hover:bg-yellow-700/20 rounded-lg cursor-pointer p-6 text-xl duration-150"
                    >Pasue</p>
                </div>
            </div>
            {/* <a href="/">Home Page</a> */}
        </div>
    )
}

export default Stopwatch;