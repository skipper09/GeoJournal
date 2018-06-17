import React from "react";
import './Card.css';


const Card = (props) => {
    return (
        <div className="card-outline">
            <div className="card-img-div">
                <img className="card-img" src="http://via.placeholder.com/250x250" />
            </div>
            <div className="card-text">
                <h3 className="card-title">I am a card</h3>
                <h5 className="card-subtitle">I am a subtitle for your card</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi vitae consectetur natus amet aspernatur quasi ullam odit veritatis tenetur beatae.</p>
                <p>{props.location.timestampMs}</p>
                <p>{props.location.latitudeE7}</p>
                <p>{props.location.longitudeE7}</p>
            </div>
        </div>
    )
}


export default Card;