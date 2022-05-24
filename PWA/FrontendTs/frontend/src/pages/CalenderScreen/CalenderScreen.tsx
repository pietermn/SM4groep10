import "./CalenderScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import OdometerOverlay from "../../components/OdometerOverlay/OdometerOverlay";
import ReservationCard from "../../components/ReservationCard/ReservationCard";

const CalenderScreen = () => {
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
    return (
        <div className="main-container">
            <div className="calender-containers">
                <UserPageHeader name={userOne.name} colour={userOne.colour}></UserPageHeader>
                <ReservationCard car={car}/>
            </div>
        </div>
    );
};

export default CalenderScreen;
