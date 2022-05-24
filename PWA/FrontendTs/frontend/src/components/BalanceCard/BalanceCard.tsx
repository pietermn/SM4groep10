import { useNavigate } from "react-router-dom";
import { Car, User } from "../../globaltypes";
import AvatarCustom from "./../Avatar/Avatar";
import "./BalanceCard.scss";

interface IBalanceProps {
    car: Car;
    balance: number;
}

export default function BalanceCard(props: IBalanceProps) {
        function getColor() {
            var color = "white_Balance"
            if (props.balance > 0){
                 color = "green_Balance"
            }
            else if (props.balance < 0){
                 color = "red_Balance"
            }
            return color;
            }
            
    const navigate = useNavigate();
    return (
        <div className="balance-container">
            <div className="balance-topper">
                <h1 className="balance-title">Balance</h1>
            </div>
            <div className="balance-people">
                {props.car.users.map((user) => {
                    return (
                        <div className="balance-person">
                            <AvatarCustom className={user.name} name={user.name} colour={user.colour} />
                            <h1 className="balance-name">{user.name}</h1>
                            <h1 className={getColor()} >€{props.balance}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
