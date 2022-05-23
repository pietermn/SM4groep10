import AvatarCustom from "./../Avatar/Avatar";

import "./TransactionCard.scss";

interface IUserCardProps {
    name: string;
    colour: string;
}

export default function UserPageHeader(props: IUserCardProps) {
    return (
        <div className="user-container">
            <div className="backButton">
                <p>Back</p>
            </div>
            <div className="carImage-container">
                <AvatarCustom className="avatar" name={props.name} colour={props.colour} size={128} fontSize={48} />
            </div>
            <h1 className="username">{props.name}</h1>
        </div>
    );
}
