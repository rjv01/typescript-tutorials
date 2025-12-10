import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import axios from "axios";
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type Post = {
  id:number,
  body:string,
  title:string
}

function PaginationPage() {
  const rowsPerPage = 10;
  const [userData,setUserData] = useState<Post[]>([]);
  const [loading,setLoading] = useState(false);
  const [startIndex,setStartIndex] = useState(0);
  const [endIndex,setEndIndex] = useState(rowsPerPage);

  const fetchUserData = async()=>{
    setLoading(true);
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      // console.log(response?.data);
      setUserData(response?.data);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchUserData();
  },[]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-[1200px] h-[700px]">
        {loading && (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead><Skeleton className="h-6 w-20" /></TableHead>
                <TableHead><Skeleton className="h-6 w-20" /></TableHead>
                <TableHead><Skeleton className="h-6 w-20" /></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: rowsPerPage }).map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell><Skeleton className="h-5" /></TableCell>
                  <TableCell><Skeleton className="h-5" /></TableCell>
                  <TableCell><Skeleton className="h-5" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        {
          !loading && userData.length > 0 && (
            <div className="border-2 p-3 m-3 rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] text-left">Id</TableHead>
                  <TableHead className="w-[200px] text-left">Title</TableHead>
                  <TableHead className="text-left">Body</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {userData.slice(startIndex, endIndex).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>{item.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination Controls */}
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    className={startIndex === 0 ? "pointer-events-none opacity-50" : " cursor-pointer "}
                    onClick={() => {
                      setStartIndex(prev => prev - rowsPerPage);
                      setEndIndex(prev => prev - rowsPerPage);
                    }}
                  />
                </PaginationItem>

                <PaginationItem>
                  <PaginationNext
                    className={endIndex >= userData.length? "pointer-events-none opacity-50": "cursor-pointer"
                    }
                    onClick={() => {
                      setStartIndex(prev => prev + rowsPerPage);
                      setEndIndex(prev => prev + rowsPerPage);
                    }}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>           
          )
        }
      </div>
    </div>
  )
}

export default PaginationPage
