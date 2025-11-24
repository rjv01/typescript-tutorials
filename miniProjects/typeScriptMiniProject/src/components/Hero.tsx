type HeroProps={
    names:{
        first:string,
        last:string
    }[];
}

export function Hero(props:HeroProps) {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <h1 className="text-4xl text-yellow-500 m-5">Hero List</h1>
        <div className='border border-white rounded-lg text-2xl m-3 p-3 '>
        {
            props.names.map(name=>(
                <h1 key={name.first}>
                    <span className="text-green-500">{name.first}</span> {" "}
                    <span className="text-red-500">{name.last}</span>
                </h1>
            ))
        }
        </div>
    </div>
  )
}