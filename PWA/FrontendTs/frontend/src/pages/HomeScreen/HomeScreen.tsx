import { useEffect, useState } from "react";
import "./HomeScreen.scss";
import CarCard from "../../components/CarCard/CarCard";
import FakeBackendAPI from "../../api/FakeBackendAPI";
import { Car, CarStatus, CarTypeEnum, User } from "../../globaltypes";
import CarStatsCard from "../../components/CarStatsCard/CarStatsCard";
import UserStatsCard from "../../components/UserStatsCard/UserStatsCard";
import AddCarCard from "../../components/AddCarCard/AddCarCard";

const HomeScreen = () => {
    const [user, setUser] = useState<User>();
    const [cars, setCars] = useState<Car[]>([]);
    const [range, getRange] = useState<number>();
    const [status, getStatus] = useState<CarStatus>(CarStatus["Currently available"]);

    async function loadData() {
        setCars(await FakeBackendAPI.getCars());
        setUser(await FakeBackendAPI.getUser());
    }

    // async function calculateRange(car:Car): number{
    // //for each car you have to calculate the range it still has, which will be called from a different file.
    // return fileMethod(car)
    // }

    // async function defineStatus(car: Car): CarStatus{
    //   //for each car you have to check wether the car is currently available or not, which will be called form a different file.
    //   return fileMethod(car)
    // }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="main-container">
            <div className="flex-containers">
                {cars.map((car) => (
                    <CarCard
                        key={car.id}
                        name={car.name}
                        range="125"
                        maxRange={car.maxRange.toString()}
                        status="Currently reserved"
                        type={car.type}
                        colour={car.colour}
                    ></CarCard>
                ))}
                <AddCarCard />
                {/* <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km"></CarStatsCard>
                <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km"></CarStatsCard>
                <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km"></CarStatsCard>
                <UserStatsCard driven={300} paid={346.68}></UserStatsCard>
                <UserStatsCard driven={300} paid={346.68}></UserStatsCard> */}
                <div style={{ width: "100vw", height: "10px" }} />
            </div>
            {/* <UserStatsCard driven={300} paid={346.68}></UserStatsCard> */}
            {/* <h1>{user?.name}</h1>
      {cars.map((car) => {
        return (
          <CarCard name={car.name} range="{range}" maxRange='{car.maxRange}' status={status?.toString()} type={car.type} colour={car.colour}></CarCard>
        );
      })} */}
            {/* <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Orange'></CarCard>
      <CarCard name='BMW M4' range='125' maxRange='750' status='Currently avaiable' type='images/bmw2022sideview' colour='Gray'></CarCard>
      <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Blue'></CarCard>
      <CarCard name='Porsche Taycan' range='125' maxRange='550' status='Currently reserved' type='images/porschetaycan' colour='White'></CarCard>
      <CarCard name='BMW M4' range='125' maxRange='750' status='Currently avaiable' type='images/bmw2022sideview' colour='Gray'></CarCard>
      <CarCard name='Porsche Taycan' range='125' maxRange='550' status='Currently reserved' type='images/porschetaycan' colour='White'></CarCard> */}
        </div>
    );
};

export default HomeScreen;
