import React, { useState } from 'react';
import './FourthSection.css';

export const FourthSection = () => {
  const [lightsOn, setLightsOn] = useState(true); // State to manage lights

  // Function to toggle lights on and off
  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  return (
    <div className="FourthSection">
      <div className="switch">
        <h2>Always remember to conserve energy by switching off the lights</h2>
      </div>
      <button className={lightsOn ? "" : "off"} onClick={toggleLights}>
        Light
      </button>
    </div>
  );
};

