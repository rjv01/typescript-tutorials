type PersonProps={
    name:{
        first:string,
        last:string
    },
    messageCount?:number
}
export function Person(props:PersonProps) {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='border border-white rounded-lg text-2xl m-3 p-8 '>
            <h1>Welcome {" "}
                <span className='text-blue-500 capitalize'>
                    {props.name.first}{props.name.last}!{" "}
                </span>
                 You have {props.messageCount} missed call from Google
            </h1>
        </div>
    </div>
  )
}