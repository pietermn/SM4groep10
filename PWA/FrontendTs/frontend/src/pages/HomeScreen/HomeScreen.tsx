import React, { useEffect, useState } from "react";

import "./App.css";
import CarCard from "../../components/CarCard";
import FakeBackendAPI from "../../api/FakeBackendAPI";
import { Car, CarStatus, User } from "../../globaltypes";

const App = () => {
  const[user, getUser] = useState<User>();
  const[cars, getCars] = useState<Car[]>([]);
  const[range, getRange] = useState<number>();
  const[status, getStatus] = useState<CarStatus>(CarStatus["Currently available"]);

  async function loadUser(){
    const user = await FakeBackendAPI.getUser()
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
    loadUser();
}, []);

  return <div className="main-container">
    <div className="cars-container">
      <h1>{user?.name}</h1>
      {cars.map((car) => {
        return (
          <CarCard name={car.name} range="{range}" maxRange='{car.maxRange}' status={status?.toString()} type={car.type.toString()} colour={car.colour}></CarCard>
        );
      })}
      {/* <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Orange'></CarCard>
      <CarCard name='BMW M4' range='125' maxRange='750' status='Currently avaiable' type='images/bmw2022sideview' colour='Gray'></CarCard>
      <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Blue'></CarCard>
      <CarCard name='Porsche Taycan' range='125' maxRange='550' status='Currently reserved' type='images/porschetaycan' colour='White'></CarCard>
      <CarCard name='BMW M4' range='125' maxRange='750' status='Currently avaiable' type='images/bmw2022sideview' colour='Gray'></CarCard>
      <CarCard name='Porsche Taycan' range='125' maxRange='550' status='Currently reserved' type='images/porschetaycan' colour='White'></CarCard> */}

    </div>
  </div>;
};

export default App;
