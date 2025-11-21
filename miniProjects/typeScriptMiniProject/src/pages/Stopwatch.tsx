import React from "react";

//react.fc means react functional component
const Stopwatch: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center m-4 p-4">
            <h1 className="text-red-600 text-2xl mb-6">StopWatch App</h1>
            <div className="flex flex-col justify-center items-center border border-white m-4 p-4">
                <div className="flex justify-center text-2xl m-4 p-3 text-background bg-foreground rounded-lg">
                    <span>00</span>:<span>00</span>:<span>00</span>
                </div>
                <div className="flex m-2 p-2 gap-4">
                    <p 
                        className="border border-white rounded-lg cursor-pointer hover:bg-primary hover:text-secondary p-6 text-xl duration-150"
                    >Reset</p>
                    <p 
                        className="border border-white rounded-lg cursor-pointer hover:bg-primary hover:text-secondary p-6 text-xl duration-150"
                    >Start</p>
                    <p 
                        className="border border-white rounded-lg cursor-pointer hover:bg-primary hover:text-secondary p-6 text-xl duration-150"
                    >Pasue</p>
                </div>
            </div>
            <a href="/">Home Page</a>
        </div>
    )
}

export default Stopwatch;