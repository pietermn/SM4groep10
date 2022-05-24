import moment from "moment";
import { useEffect, useState } from "react";
import { arrayBuffer } from "stream/consumers";
import { Car, Reservation } from "../../globaltypes";
import AvatarCustom from "../Avatar/Avatar";
import "./ReservationCard.scss"


interface IReservationCardProps{
    car: Car
}

export default function ReservationCard(props: IReservationCardProps){    
    const[date, setDate] = useState(new Date(Date.now()))
     const [reservations, setReservations] = useState<Reservation[]>([])
    

    function getReservationsToDate(date:Date){
        const newReservations = props.car.reservations.filter(x => x.startDate.toLocaleDateString() === date.toLocaleDateString());
        
        setReservations(newReservations)
    }
    useEffect(() => {
        getReservationsToDate(date);
    },[date])
    
    return(
        <div>
            <button onClick={() => setDate(new Date(2022,4,25, 17,0,0,0))}>Date is today press to Change Date</button>
            {reservations ? (
                <div>
                    {reservations.map((reservation, i) => {
                    return (
                        <div className="reservation-container" key={i}>
                            <div className="reservation-info">
                              <h1 className="reservation-date">{moment(reservation.startDate).format('LT') + " - " + moment(reservation.endDate).format('LT')}</h1>
                              <div className="reservation-avatar">
                              <AvatarCustom  name={reservation.user.name} colour={reservation.user.colour}/>
                              </div>
                            </div>
                        </div>
                    );
                })} 
                </div>
            ) : (
                <div>
                        <div className="reservation-container">
                            <div className="reservation-info">
                              <h1 className="reservation-empty">No reservations found</h1>
                            </div>
                        </div>
                </div>
            )}
            {/* {reservations.map((reservation, i) => {
                    return (
                        <div className="reservation-container" key={i}>
                            <div className="reservation-info">
                              <h1 className="reservation-date">{moment(reservation.startDate).format('LT') + " - " + moment(reservation.endDate).format('LT')}</h1>
                              <div className="reservation-avatar">
                              <AvatarCustom  name={reservation.user.name} colour={reservation.user.colour}/>
                              </div>
                            </div>
                        </div>
                    );
                })}  */}
      </div>
    );  
}