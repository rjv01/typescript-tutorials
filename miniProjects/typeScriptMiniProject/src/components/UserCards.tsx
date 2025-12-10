import axios from 'axios';
import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Skeleton } from './ui/skeleton';

type User={
    name:string,
    email:string,
    website:string,
}

function UserCards() {
    const [userData,setUserData] = useState<User[]>([]);
    const [loading,setLoading] = useState(false);
    
    const fetchData = async()=>{
        setLoading(true);
        try {
            const respsonse = await axios.get("https://jsonplaceholder.typicode.com/users");
            setUserData(respsonse?.data);
            console.log(respsonse?.data)
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <h1 className='text-center text-2xl mt-2 text-red-500 animate-pulse'>Fake user data</h1>
            <div className='grid grid-cols-3 gap-10 p-3'>
                {
                    loading && (
                        Array.from({ length:6 }).map((_,index)=>(
                            <Card 
                                key={index}
                                className='w-[222px] h-[150px] p-5 m-3'>
                                <Skeleton className='h-5'></Skeleton>
                                <Skeleton className='h-5'></Skeleton>
                                <Skeleton className='h-5 mt-4'></Skeleton>
                            </Card>
                        ))
                    )
                }
            </div>
            <div className='grid grid-cols-3 gap-10 p-3'>
                {
                    !loading && userData.length > 0 && (
                        userData.map((user,index)=>(
                            <Card 
                                key={index}
                                className='w-[229px] h-[150px]'
                            >
                                <CardHeader>
                                    <CardTitle>
                                        {user.name}
                                    </CardTitle>
                                    <CardDescription>
                                        {user.email}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>
                                        {user.website}
                                    </p>
                                </CardContent>
                            </Card>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default UserCards
