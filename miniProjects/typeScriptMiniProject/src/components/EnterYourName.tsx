import React from 'react'

const EnterYourName = ()=> {

    const [name,setName] = React.useState<string>("");
    const [age,setAge] = React.useState<number>(0);

    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    }
    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        alert("form Submitted");
        console.log("age: ",age);
        setAge(0);
        setName("");
    }
    return (
        <div className='min-h-screen flex justify-center items-center m-4'>
            <div className='flex flex-col justify-center items-center'>
                <p className={`text-2xl text-green-500 italic capitalize mb-4`}>{name}</p>
                <input 
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder='Enter your name'
                    onChange={handleNameChange}
                    className='m-3 p-3 text-xl animate-collapsible-up border rounded-lg'
                />
                <form onSubmit={handleFormSubmit} className='border m-3 p-3 rounded-lg flex flex-col'>
                    <input 
                        type="number" 
                        name="age" 
                        id="age"
                        className='m-3 p-3 text-xl animate-collapsible-up border rounded-lg'
                        placeholder='Enter your age'
                    />
                    <button 
                        type='submit'
                        className='border text-xl font-black rounded-lg m-3 p-3 cursor-pointer hover:bg-primary hover:text-secondary duration-150'
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}

export default EnterYourName;