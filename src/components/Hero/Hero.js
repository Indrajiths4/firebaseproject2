import React from 'react'
import './Hero.css'
import hero_image from '../Assets/alessandro-bianchi-_kdTyfnUFAc-unsplash-removebg-preview.png';

export const Hero = () => {
  return (
    <div className="Hero">
        <div className="firstSection">
          <h1>Sustain Our Future: Powering Tomorrow, Saving Today</h1>
        </div>
        <div className="secondSection">
          <img src={hero_image}/>
        </div>
    </div>

  );
}
