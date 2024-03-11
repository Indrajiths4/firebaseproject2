import React from 'react'
import './SecondSection.css'
import ssimage from '../Assets/Picture1-removebg-preview.png'

export const SecondSection = () => {
  return (
    <div className="secondsection">
        <div className="secondfirstSection">
           <img src={ssimage} />
        </div>
        <div className="secondsecondsection">
          <h1>An IoT device which helps in monitoring realtime energy consumption</h1>
        </div>
    </div>

  );
}
