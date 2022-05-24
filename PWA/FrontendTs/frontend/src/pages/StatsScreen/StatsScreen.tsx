import React, { useEffect, useState } from "react";
import "./StatsScreen.scss";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import CarPageHeader from "../../components/CarPageHeader/CarPageHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import BalanceCard from "../../components/BalanceCard/BalanceCard";

const StatsScreen = () => {
    const userOne: User = { id: "1", name: "Givan Wiggers", colour: "Pink", firebaseId: 404 };
    const userTwo: User = { id: "2", name: "Pieter van der Mullen", colour: "Orange", firebaseId: 405 };
    const users: User[] = [userOne, userTwo];
    const trips: Trip[] = [];
    const reservations: Reservation[] = [];
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
            <div className="stats-containers">
                <CarPageHeader
                    name={"COOPER SE"}
                    type={CarTypeEnum.minicooperside}
                    colour={"Orange"}
                    tripStatus={false}
                ></CarPageHeader>
                <CarStatsCard
                    range={car.maxRange}
                    volume={car.tank}
                    odometer={car.odometer}
                    consumption={"1 L :" + Math.round(car.maxRange / car.tank).toString() + " km"}
                ></CarStatsCard>
                <AverageUseStatsCard car={car}></AverageUseStatsCard>
                <BalanceCard 
                car={car}
                balance = {40.54}
                ></BalanceCard>
                <TransactionCard transactions={transactions} />
            </div>
        </div>
    );
};

export default StatsScreen;
