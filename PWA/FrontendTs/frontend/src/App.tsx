import React, { useEffect, useState } from "react";

import "./App.scss";
import CarCard from "./components/CarCard/CarCard";
import CarStatsCard from "./components/CarStatsCard/CarStatsCard";
import UserStatsCard from "./components/UserStatsCard/UserStatsCard";

const App = () => {

  return <div className="main-container">
      <CarCard name='Cooper SE' range='125' maxRange='450' status='Currently reserved' type='images/minicooperside' colour='Orange'></CarCard>
      <CarStatsCard range={300} volume={30} odometer={11.304} consumption="1L:10km"></CarStatsCard>
      <UserStatsCard driven={300} paid={346.68}></UserStatsCard>

  </div>;
};

export default App;
