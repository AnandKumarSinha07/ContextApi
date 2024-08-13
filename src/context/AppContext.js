import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext=createContext()


function AppContextProvider({children}){
   const [loading,setLoading]=useState(false);
   const [posts,setPost]=useState([])
   const [page,setPage]=useState(1)
   const [totalPages,setTotalpage]=useState('')

   // data filling 
    async function fetchBloagData(page=1) {
      setLoading(true)
        try {
          
          const data=await fetch(`${baseUrl}?page=${page}`);
          const response= await data.json();
          console.log(response);
          setPage(response.page);
          setPost(response.posts);
          setTotalpage(response.totalPages);
          setLoading(false);
          console.log("page is ",response.page)
          console.log("Total page is ",response.totalPages)
         
        } catch (error) {
          
          console.log("Error inside the data fetching",error);
        }
        setLoading(false);
    }

    function handlePageChange(page){
      setPage(page)
      fetchBloagData(page)
    }
  

    useEffect(()=>{
        fetchBloagData()
    },[])



   const value={
     posts,
     setPost,
     loading,
     setLoading,
     page,
     setPage,
     totalPages,
     setTotalpage,
     fetchBloagData,
     handlePageChange,
   }

   return <AppContext.Provider value={value}>
        {children}
   </AppContext.Provider>
}

export default AppContextProvider