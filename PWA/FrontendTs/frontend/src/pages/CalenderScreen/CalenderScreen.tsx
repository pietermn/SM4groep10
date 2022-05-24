import "./CalenderScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import OdometerOverlay from "../../components/OdometerOverlay/OdometerOverlay";
import ReservationCard from "../../components/ReservationCard/ReservationCard";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import moment from "moment";
import AvatarCustom from "../../components/Avatar/Avatar";
import Calendar from 'react-calendar'

const CalenderScreen = () => {
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    const dateNow: Date = new Date(Date.now())
    const dateOne: Date = new Date(2022,4,24, 10,0,0,0)
    const dateTwo: Date = new Date(2022,4,25, 17,0,0,0)
    const dateThree: Date = new Date(2022,4,25, 17,0,0,0)
    const dateFour: Date = new Date(2022,4,25, 19,0,0,0)
    const dateFive: Date = new Date(2022,4,25, 21,0,0,0)
    const userOne: User = { id: "1", name: "Givan Wiggers", colour: "Pink", firebaseId: 404 };
    const userTwo: User = { id: "2", name: "Pieter van der Mullen", colour: "Orange", firebaseId: 405 };
    const users: User[] = [userOne, userTwo];
    const trips: Trip[] = [];
    const reservationOne: Reservation = {id: "1", startDate:dateOne, endDate:dateTwo, user: userOne}
    const reservationTwo: Reservation = {id: "2", startDate:dateThree, endDate:dateFour, user: userTwo}
    const reservationThree: Reservation = {id: "3", startDate:dateFour, endDate:dateFive, user: userOne}
    const reservations: Reservation[] = [reservationOne, reservationTwo, reservationThree];
    const transactions: Transaction[] = [
        { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
        { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
        { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
        { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
    ];
    const percentageOne: PercentageUser = { id: "1", user: userOne, percentage: 60 };
    const percentageTwo: PercentageUser = { id: "2", user: userTwo, percentage: 40 };
    const percentages: PercentageUser[] = [percentageOne, percentageTwo];
    const car: Car = {
        id: "string",
        ownerId: userOne,
        maxRange: 350,
        name: "Cooper SE",
        colour: "Orange",
        odometer: 11304,
        type: CarTypeEnum.minicooperside,
        tank: 60,
        users: users,
        trips: trips,
        reservations: reservations,
        transactions: transactions,
        percentages: percentages,
    };
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    const[date, setDate] = useState(new Date(Date.now()))
    const [reservationsOpen, setReservations] = useState<Reservation[]>([])
    

    function getReservationsToDate(date:Date){
        const newReservations = car.reservations.filter(x => x.startDate.toLocaleDateString() === date.toLocaleDateString());
        
        setReservations(newReservations)
    }
    function doNothing(){

    }

    useEffect(() => {
        getReservationsToDate(date);
    },[date])
    
    return(
        <div>
            <div className="calendar-container">
                <Calendar/>
            </div>
            <button onClick={() => setDate(new Date(2022,4,25, 17,0,0,0))}>Date is today press to Change Date</button>
            {reservationsOpen ? (
                <div>
                    {reservationsOpen.map((reservation, i) => {
                    return (
                        <ReservationCard reservation={reservation} key={i}/>
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
      </div>
    );  
};

export default CalenderScreen;
