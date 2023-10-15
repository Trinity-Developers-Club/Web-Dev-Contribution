import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from "./components/Tours";

const App = () => {
   const [tours, setTours] = useState(data)


   function removeTour(id){
      const newTours = tours.filter(tour => tour.id !==id);
      setTours(newTours);
   }  

   function addTour(id){
    const addTour = tours.filter(tour => tour.id ==id);
    setTours(addTour);
   }

   if(tours.length === 0){
    return(
      <div className="refresh">
        <h2>No Tours left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
           Refresh
        </button>
      </div>
    );
   }
  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} addTour={addTour}></Tours>
    </div>
  )
};

export default App;
  