import {} from "@mui/material"
import React from "react"

interface ICarCardProps{
    name: string;
    maxRange: string;
    range: string;
    status: string;
    type: string;
    colour: string;
}

export default function CarCard(props: ICarCardProps){


    return(
        <div className="car-container">
            <div className="car-container div">
                <h1 className="carName">{props.name}</h1>
                <img className="carImage" src={props.type + props.colour}></img>
                <h2 className="carRange"> {props.range} / {props.maxRange} KM LEFT</h2>
                <h2 className="carStatus"> {props.status}</h2>
            </div>
        </div>
    );
}