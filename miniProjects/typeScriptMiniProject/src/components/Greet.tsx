
type GreetProps = {
    name:string
    messageCount?:number
}

export function Greet(props:GreetProps){
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='border border-white rounded-lg text-2xl m-3 p-10 '>
            <h1>Welcome {" "}
                <span className='text-blue-500 capitalize'>
                    {props.name}!{" "}
                </span>
                You have {props.messageCount} unread message
            </h1>
        </div>
    </div>
  )
}