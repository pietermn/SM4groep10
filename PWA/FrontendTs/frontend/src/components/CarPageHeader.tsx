import AvatarCustom from "./Avatar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./CarPageHeader.scss";
import { Fab } from "@mui/material";

interface ICarCardProps {
    name: string;
    type: string;
    colour: string;
    tripStatus: boolean;
}

export default function CarPageHeader(props: ICarCardProps) {
    return (
        <div className="header-container">
            <div className="backButton">
                <KeyboardArrowLeftIcon />
                <p>Back</p>
            </div>
            <div className="carImage-container">
                <img className="carImage" alt="carsideview" src={"images/" + props.type + props.colour + ".png"} />
            </div>
            <div className="bottomContainer">
                <h1 className="carname">{props.name}</h1>
                {props.tripStatus ? (
                    <Fab className="tripButton" variant="extended" size="small" color="primary" aria-label="add">
                        End trip
                    </Fab>
                ) : (
                    <Fab className="tripButton" variant="extended" size="small" color="primary" aria-label="add">
                        Start trip
                    </Fab>
                )}
            </div>
        </div>
    );
}
