import React from "react";
import { useNavigate } from "react-router-dom";

import DonutChart from "react-donut-chart";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import { Car, CarTypeEnum, PercentageUser, Reservation, Transaction, Trip, User } from "../../globaltypes";
import BackButton from "../../components/BackButton/BackButton";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";

const BalanceScreen = () => {
    const navigate = useNavigate();
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
        id: 1,
        ownerId: userOne,
        maxRange: 350,
        name: "Cooper SE",
        colour: "Orange",
        odometer: 11304,
        reserved: false,
        type: CarTypeEnum.minicooperside,
        tank: 60,
        users: users,
        trips: trips,
        reservations: reservations,
        transactions: transactions,
        percentages: percentages,
    };
    return (
        <div className="main-container" style={{ justifyContent: "flex-start" }}>
            <BackButton />
            <div style={{ width: "100vw", height: "5vh" }} />
            <ChartComponent car={car} />
            <AverageUseStatsCard car={car} />
        </div>
    );
};

export default BalanceScreen;
