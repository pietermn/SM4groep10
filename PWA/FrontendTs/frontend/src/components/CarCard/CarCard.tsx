import {} from "@mui/material";
import { url } from "inspector";
import React from "react";
import { CarTypeEnum } from "../../globaltypes";
import "./CarCard.scss"


interface ICarCardProps{
    name: string;
    maxRange: string;
    range: string;
    status: string;
    type: CarTypeEnum;
    colour: string;
}

export default function CarCard(props: ICarCardProps){
    return(
        <div className="car-container">
                <h1 className="carName">{props.name}</h1>
                <div className="carImage-container">
                    <img className="carImage" src={"images/" + props.type.toString() + props.colour + ".png"}></img>
                </div>
                <h2 className="carRange"> {props.range} / {props.maxRange} KM LEFT</h2>
                <h2 className="carStatus"> {props.status}</h2>
                <p>Start trip</p>
        </div>
    );  
}