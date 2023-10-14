import React from "react";


const Shimmer = () =>{
    return (
        <div class="flex flex-wrap items-center justify-center self-stretch">
            {Array(10).fill(" ").map((e, index) => (
                <div key={index}
                class="w-[300px] h-[380px] rounded-lg  p-4 m-5 flex flex-col gap-4 shadow-sm">
                    <div class=" bg-gray-300 rounded-lg w-[300px] h-[166px] ">

                    </div>
                    <div class="flex  flex-col items-center gap-3">
                        <div class="w-[300px] h-[30px] bg-gray-300 rounded-lg "></div>
                        <div class="w-[300px] h-[90px] bg-gray-300 rounded-lg"></div>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default Shimmer;