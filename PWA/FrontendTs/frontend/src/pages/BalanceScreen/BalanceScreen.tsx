import React from "react";
import { useNavigate } from "react-router-dom";

import DonutChart from "react-donut-chart";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import { Car, CarTypeEnum, PercentageUser, Reservation, Transaction, Trip, User } from "../../globaltypes";
import BackButton from "../../components/BackButton/BackButton";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";

const BalanceScreen = () => {
    const navigate = useNavigate();
    const { data: cars } = useFetchCars();
    return (
        <div className="main-container" style={{ justifyContent: "flex-start" }}>
            <BackButton />
            <div style={{ width: "100vw", height: "5vh" }} />
            {/* <ChartComponent car={cars} />
            <AverageUseStatsCard car={car} /> */}
        </div>
    );
};

export default BalanceScreen;
