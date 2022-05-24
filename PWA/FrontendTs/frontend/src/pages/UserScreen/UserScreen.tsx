import "./UserScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";

const StatsScreen = () => {
    const userOne: User = { id: "1", name: "Givan Wiggers", colour: "Pink", firebaseId: 404 };
    const userTwo: User = { id: "2", name: "Pieter van der Mullen", colour: "Orange", firebaseId: 405 };
    const users: User[] = [userOne, userTwo];
    const trips: Trip[] = [];
    const reservations: Reservation[] = [];
    const transactions: Transaction[] = [];
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
            <div className="user-containers">
                <UserPageHeader name={userOne.name} colour={userOne.colour}></UserPageHeader>
                <UserStatsCard driven={100} paid={210}></UserStatsCard>
                {/* <CarPageHeader name={"COOPER SE"} type={CarTypeEnum.minicooperside} colour={"Orange"} tripStatus={false}></CarPageHeader> */}
                {/* <CarStatsCard range={car.maxRange} volume={car.tank} odometer={car.odometer} consumption={"1 L:" + Math.round((car.maxRange/car.tank)).toString() + " km"}></CarStatsCard>
        <AverageUseStatsCard car={car}></AverageUseStatsCard> */}
            </div>
        </div>
    );
};

export default StatsScreen;
