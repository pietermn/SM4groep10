import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import "./CarPageHeader.scss";
import { Fab } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface ICarCardProps {
    name: string;
    type: string;
    colour: string;
    tripStatus: boolean;
}

export default function CarPageHeader(props: ICarCardProps) {
    const navigate = useNavigate();
    return (
        <div className="header-containerCarPage">
            <div className="backButtonCarPage">
                <KeyboardArrowLeftIcon />
                <p onClick={() => navigate(-1)}>Back</p>
            </div>
            <div className="carImage-containerCarPage">
                <img
                    className="carImageCarPage"
                    alt="carsideview"
                    src={"images/" + props.type + props.colour + ".png"}
                />
            </div>
            <div className="bottomContainerCarPage">
                <h1 className="carnameCarPage">{props.name}</h1>
                {props.tripStatus ? (
                    <Fab className="tripButtonCarPage" variant="extended" size="small" color="error" aria-label="add">
                        End trip
                    </Fab>
                ) : (
                    <Fab
                        className="tripButtonCarPage"
                        variant="extended"
                        size="small"
                        color="primary"
                        aria-label="add"
                        onClick={() => navigate("/safetyscreen")}
                    >
                        Start trip
                    </Fab>
                )}
            </div>
        </div>
    );
}
