import AvatarCustom from "./Avatar";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "./UserCard.scss";

interface IUserCardProps {
    name: string;
    colour: string;
}

export default function UserCard(props: IUserCardProps) {
    return (
        <div className="user-container">
            <p className="backButton">
                <KeyboardArrowLeftIcon />
                <p>Back</p>
            </p>
            <div className="carImage-container">
                <AvatarCustom className="avatar" name={props.name} colour={props.colour} size={128} fontSize={48} />
            </div>
            <h1 className="username">{props.name}</h1>
        </div>
    );
}
