import React from 'react'

//there are two ways to define props in typescript
//1. using interface
//2. using type alias
interface MyButtonProps{
    text: string;
    onclick?: () => void;
}

// type MyButtonProps = {
//     text:string,
//     onclick?: () => void
// }

const TestButton: React.FC<MyButtonProps> = (props) =>{
  return (
    <div className='flex'>
        <button className='border border-white p-3 m-3'>{props.text}</button>
    </div>
  )
}
export default  TestButton;