import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Car, User, Reservation} from "../../globaltypes";
import AvatarCustom from "../Avatar/Avatar";
import "./CalendarCard.scss";

interface ICalendarProps {
    car: Car;
}

export default function CalendarCard(props: ICalendarProps) {
        function getReservations(startDate: Date){
            const date_reservations = props.car.reservations.filter(x => x.startDate.toLocaleDateString() == startDate.toLocaleDateString())      
            return date_reservations
        }
    return (
        <div className="calendar-container">
            <div className="calendar-topper">
                <h1 className="calendar-title">Calendar</h1>
            </div>
            {props.car.reservations.slice(0,2).map((reservation) =>{
                return (
                <div className="calendar-date">
                    <div className="date-title">
                        <h2 className="date">{reservation.startDate.toLocaleDateString()}</h2>
                    </div>  
                  
                {getReservations(reservation.startDate).map((reservation) =>{
                    delete props.car.reservations[props.car.reservations.indexOf(reservation)];
                    return (
                        <div className="calendar-person">
                            <AvatarCustom className={reservation.user.name} name={reservation.user.name} colour={reservation.user.colour} />
                            <h1 className="calendar-name">{moment(reservation.startDate).format('LT')}-{moment(reservation.endDate).format('LT')}</h1>
                        </div> 
                    );
                })}
                </div>
                
                    );
                })}
        </div>
    );
}
