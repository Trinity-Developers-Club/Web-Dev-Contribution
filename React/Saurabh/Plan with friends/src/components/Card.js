import { useState } from "react";
import Tours from "./Tours";
import App from "../App";

function Card({id, name, info, image, price, removeTour, addTour}){
    
    const [readmore, setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>
            
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description} 
                    <span className="read-more "   onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <div className="btn-card">
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
                <button className="btn-red btn-green" onClick={() => addTour(id)}>
                    Interseted
                </button>
            </div>
        </div>
    );
}

export default Card;