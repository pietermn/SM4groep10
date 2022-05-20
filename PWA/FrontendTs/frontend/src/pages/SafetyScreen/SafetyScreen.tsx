import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SafetyScreen.scss";

const SafetyScreen = () => {
  const navigate = useNavigate();
  return <div className="main-container">
    <div className="safety-container">
      
      <div className="roadBricks"></div>
        <div className="roadBrick1" />
        <div className="roadBrick2" />
        <div className="roadBrick3" />
      </div>
      <div className="Safety-container">
        <div>
          <h1 className="safetyNote">SAFETY NOTE</h1>
          <h2 className="smallText">Do not use this app while driving</h2>
          <button className="buttonEndTrip" onClick={() => navigate('/homescreen')}>End Trip</button>
        </div>
        <img className="carImageSafety" src="/images/minicooperbackOrange.png"></img>
      </div>
  </div>;
};

export default SafetyScreen;
