import React from 'react';

type InputsProps={
    value:string,
    handleChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

export default function Inputs(props:InputsProps) {
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setDisplayName(event.target.value);
        if(props.handleChange) props.handleChange(event);
    }

    const [displayName,setDisplayName] = React.useState("");

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <input 
                type="text" 
                name={props.value} 
                id={props.value} 
                onChange={handleChange}
                className="border-primary border-2 p-2 rounded-lg text-xl"
                placeholder="Enter text"
            />
            <p className='text-yellow-500 capitalize m-4 text-2xl'>{displayName}</p>
        </div>
    )
}