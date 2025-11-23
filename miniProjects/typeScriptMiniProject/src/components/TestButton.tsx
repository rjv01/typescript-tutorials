import React, { useState } from 'react'

//there are two ways to define props in typescript
//1. using interface
//2. using type alias
interface MyButtonProps{
    text: string;
    onClick?: () => void;
}

// type MyButtonProps = {
//     text:string,
//     onclick?: () => void
// }

// interface Book{
//   name:string,
//   price:number
// }

const TestButton: React.FC<MyButtonProps> = (props) =>{
  const [values,setValues] = useState<number>(0);
  // const [values,setValues] = useState<Book>(0);
  return (
    <div 
      className='min-h-screen flex justify-center items-center flex-col m-4 p-4'
    >
      <div className='flex flex-col justify-center items-center border border-white rounded-lg p-6 m-6'>
        <h1 
          className={`text-4xl text-primary ${values < 0 ? "text-red-600" : "text-green-600"} mb-4`}>
            {values}
        </h1>
      <div
        className='flex'  
      >
            <button 
            className='border border-white p-3 m-3 rounded-lg cursor-pointer hover:bg-primary hover:text-secondary text-xl duration-150'
            // onClick={props.onclick}
            onClick={() => {
              if(props.text === "Increase"){
                setValues(values + 1);
              } else if(props.text === "Decrease"){
                setValues(values - 1);
              } else if (props.onClick) {
                props.onClick();
              }
            }}
          >
            {props.text}
          </button>
          <button 
            className='border border-white p-3 m-3 rounded-lg cursor-pointer hover:bg-primary hover:text-secondary text-xl duration-150'
            onClick={()=>setValues(values-1)}
            >
            Decrease
          </button>
          <button 
            className='border border-white p-3 m-3 rounded-lg cursor-pointer hover:bg-primary hover:text-secondary text-xl duration-150'
            onClick={()=>setValues(0)}
            >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
export default  TestButton;