import React, { useEffect, useState } from "react";
import "./StatsScreen.scss";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import CarPageHeader from "../../components/CarPageHeader/CarPageHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import BalanceCard from "../../components/BalanceCard/BalanceCard";
import CalendarCard from "../../components/CalenderCard/CalendarCard";

const StatsScreen = () => {
    const userOne: User = { id: "1", name: "Givan Wiggers", colour: "Pink", firebaseId: 404 };
    const userTwo: User = { id: "2", name: "Pieter van der Mullen", colour: "Orange", firebaseId: 405 };
    const userThree: User = { id: "3", name: "Pieter van Nunen", colour: "Blue", firebaseId: 406 };
    const users: User[] = [userOne, userTwo, userThree];
    const trips: Trip[] = [];
    const dateNow: Date = new Date(Date.now())
    const dateOne: Date = new Date(2022,4,24, 10,0,0,0)
    const dateTwo: Date = new Date(2022,4,25, 17,0,0,0)
    const dateThree: Date = new Date(2022,4,25, 17,0,0,0)
    const dateFour: Date = new Date(2022,4,25, 19,0,0,0)
    const dateFive: Date = new Date(2022,4,25, 21,0,0,0)
    const dateSix: Date = new Date(2022,4,26, 19,0,0,0)
    const dateSeven: Date = new Date(2022,4,26, 21,0,0,0)
    const reservations: Reservation[] = [    
        {id: "1", startDate:dateOne, endDate:dateTwo, user: userOne},
        {id: "2", startDate:dateThree, endDate:dateFour, user: userTwo},
        {id: "3", startDate:dateFour, endDate:dateFive, user: userOne},
        {id: "4", startDate:dateSix, endDate:dateSeven, user: userOne},
        {id: "5", startDate:dateFour, endDate:dateFive, user: userOne},
        {id: "6", startDate:dateOne, endDate:dateTwo, user: userOne},
        {id: "7", startDate:dateSix, endDate:dateSeven, user: userOne},
        {id: "1", startDate:dateOne, endDate:dateTwo, user: userOne},
        {id: "2", startDate:dateThree, endDate:dateFour, user: userTwo},
        {id: "3", startDate:dateFour, endDate:dateFive, user: userOne},
        {id: "4", startDate:dateSix, endDate:dateSeven, user: userOne},
        {id: "5", startDate:dateFour, endDate:dateFive, user: userOne},
        {id: "6", startDate:dateOne, endDate:dateTwo, user: userOne},
        {id: "7", startDate:dateSix, endDate:dateSeven, user: userOne},
    ]
    const transactions: Transaction[] = [
        { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
        { id: "1235", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
        { id: "1236", user: userTwo, date: new Date(Date.now()), liters: 10, amount: 27.38 },
        { id: "1237", user: userThree, date: new Date(Date.now()), liters: 10, amount: 27.38 },
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
                ></BalanceCard>
                <CalendarCard
                    car={car}
                    ></CalendarCard>
                <TransactionCard transactions={transactions} />
            </div>
        </div>
    );
};

export default StatsScreen;
