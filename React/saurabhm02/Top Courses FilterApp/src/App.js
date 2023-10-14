import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {apiUrl , filterData} from "./Config"
import Shimmer from "./components/Shimmer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner";

const AppLayout = ()=>{

    const [courses, setCourses] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState(filterData[0].title);

    useEffect(()=>{
        fetchData();
    }, []);

    async function fetchData(){
        setLoading(true);
        try{
            const data = await fetch(apiUrl);
            const json = await data.json();
            setCourses(json?.data);
        }
        catch(error){
            toast.error("network chrck krle bhai");
        }
        setLoading(false);
    }
    return (
       <div class="flex flex-col min-h-screen bg-gray-500">
            <div  >
                <NavBar/>
            </div>
            <div class="bg-gray-500">
                <div >
                    <Filter filterData={filterData} 
                        category={category}
                        setCategory={setCategory}
                    />
                </div>
                <div class="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
                {
                    loading ? (<Shimmer/>) : (<Cards courses={courses} category={category}/>)
                }
                </div>
            </div>
       </div>
    )
}

const OverAllResult = ()=>{
    return (
        <>
            <ToastContainer/>
            <AppLayout/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<OverAllResult/>);