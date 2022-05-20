import {} from "@mui/material";
import { url } from "inspector";
import React from "react";
import "./CarCard.scss";

interface ICarCardProps {
    name: string;
    maxRange: string;
    range: string;
    status: string;
    type: string;
    colour: string;
}

export default function CarCard(props: ICarCardProps) {
    return (
        <div className="car-container">
            <h1 className="carName">{props.name}</h1>
            <div className="carImage-container">
                <img className="carImage" alt="carsideview" src={props.type + props.colour + ".png"} />
            </div>
            <h2 className="carRange">
                {" "}
                {props.range} / {props.maxRange} KM LEFT
            </h2>
            <h2 className="carStatus"> {props.status}</h2>
            <p>Start trip</p>
        </div>
    );
}
