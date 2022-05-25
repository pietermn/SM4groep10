import React, { useEffect, useState } from "react";
import "./UserScreen.scss";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import { Car, User, CarTypeEnum, Trip, Reservation, Transaction, PercentageUser } from "../../globaltypes";
import AverageUseStatsCard from "../../components/AverageUseStatsCard/AverageUseStatsCard";
import UserPageHeader from "../../components/UserPageHeader/UserPageHeader";
import { useFetchUser } from "../../api/useQueryHooks/useUserHooks";
import OdometerOverlay from "../../components/OdometerOverlay/OdometerOverlay";

const StatsScreen = () => {
    const { data: user, isLoading } = useFetchUser();

    return (
        <div className="main-container">
            <div className="user-containers">
                {user ? (
                    <>
                        <UserPageHeader name={user.name} colour={user.colour} />
                        <UserStatsCard driven={100} paid={210} />
                    </>
                ) : (
                    <>
                        <UserPageHeader name="-" colour="white" />
                        <UserStatsCard driven={0} paid={0} />
                    </>
                )}
                {/* <CarPageHeader name={"COOPER SE"} type={CarTypeEnum.minicooperside} colour={"Orange"} tripStatus={false}></CarPageHeader> */}
                {/* <CarStatsCard range={car.maxRange} volume={car.tank} odometer={car.odometer} consumption={"1 L:" + Math.round((car.maxRange/car.tank)).toString() + " km"}></CarStatsCard>
                <AverageUseStatsCard car={car}></AverageUseStatsCard> */}
                {/* <OdometerOverlay car={car} /> */}
            </div>
        </div>
    );
};

export default StatsScreen;
