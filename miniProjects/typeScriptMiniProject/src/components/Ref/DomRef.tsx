import { useEffect, useRef } from 'react'

export default function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[]);
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <input
                type='text'
                ref={inputRef}
            />
        </div>
    )
}