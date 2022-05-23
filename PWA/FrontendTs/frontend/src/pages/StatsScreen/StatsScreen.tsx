import React, { useEffect, useState } from "react";
import "./StatsScreen.scss";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import CarPageHeader from "../../components/CarPageHeader/CarPageHeader";
import { CarTypeEnum } from "../../globaltypes";

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
                <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km"></CarStatsCard>
            </div>
        </div>
    );
};

export default StatsScreen;
