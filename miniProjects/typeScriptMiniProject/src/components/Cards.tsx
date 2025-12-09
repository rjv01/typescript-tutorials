import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "./ui/button";

import axios from "axios";
import { useEffect, useState } from "react";

type Food = {
    name:string,
    ingredients:string[],
    image:string
}

const Cards = () => {
    const [userData,setUserData] = useState<Food>();
    const [loading,setLoading] = useState(false);
    const [count,setCount] = useState(0);

    const fetchData = async ()=>{
        setLoading(true);
        setCount(prev =>{
            const rand = Math.floor(Math.random()*10);
            return prev === rand ? 0 : prev+1;
        });

        try {
            const respsonse = await axios.get("https://dummyjson.com/recipes");
            
            // console.log(respsonse?.data?.products);
            // setUserData(respsonse?.data?.products[0]);
            // setUserData(respsonse?.data?.products[Math.floor(Math.random()*respsonse?.data?.products.length)]);
            
            // console.log(respsonse?.data?.recipes);
            // setUserData(respsonse?.data?.recipes[0]);
            setUserData(respsonse?.data?.recipes[Math.floor(Math.random()*respsonse?.data?.recipes.length)]);
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
        <div className="min-h-screen flex flex-col justify-center items-center">
            {
                count !== 0 && (
                    <img 
                        src="./rubbingHands.jpg" 
                        alt="img"
                        className="h-[120px] w-[120px] rounded-full m-2"
                    />
                )
            }
            <h1 className="text-2xl font-mono text-red-600 animate-caret-blink mb-5">Fetching random stuff from the internet</h1>
            <div className="border-2 rounded-lg p-8 m-4 h-[600px] w-[555px]">
                {
                    loading && 
                        <div className="flex flex-col gap-3 h-[500px] w-[500px]">
                            <div className="flex justify-center">
                                <Skeleton className="w-full p-3 h-10 rounded-lg"/>

                            </div>
                            <h1>
                                <div className="flex justify-center">
                                    <Skeleton className="w-[200px] p-3 h-10 mt-4 rounded-lg"/>
                                </div>
                            </h1>
                            <div className="flex justify-center">
                                <Skeleton  className="w-[200px] p-3 h-10 mb-4 rounded-lg"/>
                            </div>
                            <div className="flex justify-center">
                                <Skeleton  className="w-[449px] h-[449px]"/>
                            </div>
                        </div>
                    }
                    
                    {
                        !loading && userData && (
                            
                            <div className="flex flex-col font-mono gap-3 h-[449px] w-[500px]">
                                <Button 
                                    className="cursor-pointer bg-blue-500 text-white hover:bg-blue-800"
                                    onClick={fetchData}
                                >Get Random</Button>
                                <div>
                                    <div>
                                        <p className="text-xl m-3 text-blue-500 flex justify-center">
                                            {userData.name}
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-blue-800">
                                        {userData.ingredients.map((ingre)=>(
                                            <ul key={ingre}>
                                                <p>{ingre}</p>
                                            </ul>
                                        ))}
                                    </div>
                                    <div className="flex justify-center border-2 m-6 rounded-2xl ">
                                        <img 
                                            src={userData.image} 
                                            alt="img"
                                            className="h-[300px] w-[300px] rounded-2xl p-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Cards
