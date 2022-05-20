import React, { useEffect, useState } from "react";

import ".SafetyScreen.scss";

const SafetyScreen = () => {
  return <div className="main-container">
    <div className="cars-container">
      
      <div className="roadBricks"></div>
        <div className="roadBrick1"></div>
        <div className="roadBrick2"></div>
        <div className="roadBrick3"></div>
      </div>
      <div className="Safety-container">
        <div>
          <h1 className="safetyNote">SAFETY NOTE</h1>
          <h2 className="smallText">Do not use this app while driving</h2>
          <button className="buttonEndTrip">End Trip</button>
        </div>
        <img className="carImage" src="/images/minicooperbackOrange.png"></img>
      </div>
  </div>;
};

export default SafetyScreen;
