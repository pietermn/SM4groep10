import React, { useEffect, useState } from "react";

import "./App.css";
import CarCard from "./components/CarCard/CarCard";


const App = () => {

  return <div className="main-container">
    <div className="cars-container">
      <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Orange'></CarCard>
      <CarCard name='BMW M4' range='125' maxRange='750' status='Currently avaiable' type='images/bmw2022sideview' colour='Gray'></CarCard>
      <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Blue'></CarCard>
      <CarCard name='Porsche Taycan' range='125' maxRange='550' status='Currently reserved' type='images/porschetaycan' colour='White'></CarCard>
      <CarCard name='BMW M4' range='125' maxRange='750' status='Currently avaiable' type='images/bmw2022sideview' colour='Gray'></CarCard>
      <CarCard name='Porsche Taycan' range='125' maxRange='550' status='Currently reserved' type='images/porschetaycan' colour='White'></CarCard>

    </div>
  </div>;
};

export default App;
