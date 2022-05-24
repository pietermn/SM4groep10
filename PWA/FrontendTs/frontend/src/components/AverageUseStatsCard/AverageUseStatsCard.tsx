import { useNavigate } from "react-router-dom";
import { Car, User } from "../../globaltypes";
import AvatarCustom from "./../Avatar/Avatar";
import "./AverageUseStatsCard.scss";

interface IAverageUseStatsCardProps {
    car: Car;
}

export default function AverageUseStatsCard(props: IAverageUseStatsCardProps) {
    function getPercentage(user: User): number {
        return props.car.percentages.find((c) => c.user.id === user.id)?.percentage || 0;
    }

    const navigate = useNavigate();
    return (
        <div className="averageUseStats-container">
            <div className="averageUseStats-topper">
                <h1 className="averageUseStats-title">Average use per person</h1>
            </div>
            <div className="averageUseStats-people">
                {props.car.users.map((user) => {
                    return (
                        <div className="averageUseStats-person">
                            <AvatarCustom className={user.name} name={user.name} colour={user.colour} />
                            <h1 className="averageUseStats-name">{user.name}</h1>
                            <h1 className="averageUseStats-statistics">{getPercentage(user)}%</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
