import {} from "@mui/material";
import { CarTypeEnum } from "../../globaltypes";
import "./CarCard.scss";
import { useNavigate } from "react-router-dom";

interface ICarCardProps {
    name: string;
    maxRange: string;
    range: string;
    status: string;
    type: CarTypeEnum;
    colour: string;
}

export default function CarCard(props: ICarCardProps) {
    const navigate = useNavigate();
    return (
        <div className="car-container">
            <h1 className="carName">{props.name}</h1>
            <div className="carImage-container">
                <img
                    className="carImage"
                    alt="carImage"
                    src={"images/" + props.type.toString() + props.colour + ".png"}
                ></img>
            </div>
            <h2 className="carRange">
                {" "}
                {props.range} / {props.maxRange} KM LEFT
            </h2>
            <div className="bottomBar">
                <h2 className="carStatus"> {props.status}</h2>
                <p className="startTripButton" onClick={() => navigate("/safetyscreen")}>
                    Start trip
                </p>
            </div>
        </div>
    );
}
