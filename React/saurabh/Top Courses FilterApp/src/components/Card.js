import React from 'react';
import {FcLike, FcLikePlaceholder} from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
  
 const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    
    function clickHandler(){
         if(likedCourses.includes(course.id)){
          setLikedCourses((prev) => prev.filter((cid)=> cid !== course.id));
          toast.warning("Bhai ky ho Liked hatta kyu diya!..")
         }
         else{
          //  if(likedCourses.length === 0){
          //   setLikedCourses(course.id);
          //  }
          //  else{
          //    setLikedCourses((prev) => [...prev, course.id]);
          //  }
          setLikedCourses((prev) => [...prev, course.id]);
           toast.success("Shuikriya bhai Like Krne k liye..");
         }
    }
  return (
    <div class="w-[300px] bg-gray-700 bg-opacity-100 rounded-md overflow-hidden">
        <div class="relative ">
            <img src={course?.image?.url}/>
        
           <div class="absolute w-[40px] h-[40px] bg-white rounded-full right-2 bottom-[-14px] grid place-items-center">
              <button onClick = {clickHandler}>
                  {
                    !likedCourses.includes(course.id) ? (<FcLikePlaceholder size={25}/>) : (<FcLike fontSize={25}/>)
                  }
              </button>
            </div>
        </div>

        <div class="p-4">
            <p class="text-white font-semibold text-lg leading-6">{course?.title}</p>
            <p class="text-white mt-2">
              {
                course?.description.length > 100 ? 
                (course?.description.substr(0, 100) + "..." ) 
                : (course?.description)
              }
            </p>       
        </div>
    </div>
  )
}
export default Card;