type StatusProps = {
    status:'loading'|'success'|'error';
}
export default function Status(props:StatusProps) {
    let message:string;
    if(props.status ==='loading'){
        message = 'Loading...Please wait';
    }else if(props.status === 'success'){
        message = 'Data fetched successfully!';
    }else{
        message = 'Error fetching data.';
    }

    return (
        <div className="min-h-screen flex justify-center items-center">
            <h1 className="text-2xl">Your Status: 
                <span 
                    className={`${props.status === 'loading' ? 'text-yellow-500' 
                                : props.status === 'success' ? 'text-green-500':'text-red-500'}`}>
                    {" "}{message}
                </span>
            </h1>
        </div>
    )
}
