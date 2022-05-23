import React, { useEffect, useState } from "react";
import "./StatsScreen.scss";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import CarPageHeader from "../../components/CarPageHeader/CarPageHeader";
import { CarTypeEnum } from "../../globaltypes";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { User, Transaction } from "../../globaltypes";

const userOne: User = { id: "1", name: "Givan Wiggers", colour: "Pink", firebaseId: 404 };
const transactions: Transaction[] = [
    { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
    { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
    { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
    { id: "1234", user: userOne, date: new Date(Date.now()), liters: 10, amount: 27.38 },
];

const StatsScreen = () => {
    return (
        <div className="main-container">
            <div className="stats-containers">
                <CarPageHeader
                    name={"COOPER SE"}
                    type={CarTypeEnum.minicooperside}
                    colour={"Orange"}
                    tripStatus={false}
                ></CarPageHeader>
                <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km" />
                <TransactionCard transactions={transactions} />
                <div style={{ width: "100vw", height: "10px" }} />
            </div>
        </div>
    );
};

export default StatsScreen;
