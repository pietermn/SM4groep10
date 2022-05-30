import React, { useEffect, useState } from "react";
import "./StatsScreen.scss";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import CarPageHeader from "../../components/CarPageHeader/CarPageHeader";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import { Car } from "../../globaltypes";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import { useFetchCars } from "../../api/useQueryHooks/carHooks";
import { useParams } from "react-router";
import ChartComponent from "../../components/ChartComponent/ChartComponent";
import CalendarCard from "../../components/CalenderCard/CalendarCard";

const StatsScreen = () => {
    const { data: cars } = useFetchCars();
    const [car, setCar] = useState<Car>();
    const { carId } = useParams<{ carId: string }>();

    useEffect(() => {
        if (cars) {
            setCar(cars?.find((c) => c.id === parseInt(carId || ""))!);
        }
    }, [cars]);

    return (
        <div className="main-container">
            {car && (
                <div className="stats-containers">
                    <CarPageHeader car={car} tripStatus={false}></CarPageHeader>
                    <CarStatsCard
                        range={car.maxRange}
                        volume={car.tank}
                        odometer={car.odometer}
                        consumption={"1 L :" + Math.round(car.maxRange / car.tank).toString() + " km"}
                    ></CarStatsCard>
                    <CalendarCard car={car} />
                    {/* <AverageUseStatsCard car={car}></AverageUseStatsCard>
                    <TransactionCard transactions={car.transactions} />
                    <ChartComponent car={car} /> */}
                    <div style={{ width: "100vw", height: "10px" }} />
                </div>
            )}
        </div>
    );
};

export default StatsScreen;
