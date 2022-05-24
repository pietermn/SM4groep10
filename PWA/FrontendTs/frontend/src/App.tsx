import React from "react";
import CarCard from "./components/CarCard";
import TransactionCard from "./components/TransactionCard/TransactionCard";

import "./App.css";
import AddCarCard from "./components/AddCarCard/AddCarCard";

const App = () => {
  return <div className="main-container">
    <TransactionCard></TransactionCard>
    <AddCarCard></AddCarCard>
  </div>;
};

export default App;
