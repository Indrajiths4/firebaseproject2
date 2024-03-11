import React from 'react'
import './ThirdSection.css'
import ct from '../Assets/30A-SCT-013-030-Non-invasive-AC-Current-font-b-Sensor-b-font-Split-Core-Current.webp'
import vs from '../Assets/61ypoAUuVUL._AC_UF1000,1000_QL80_.jpg'
import wire from '../Assets/A_few_Jumper_Wires.jpg'
import esp32 from '../Assets/61o2ZUzB4XL.jpg'
import r from '../Assets/10k_lrg_1.jpg'
import c from '../Assets/3300uf-25v-electrolytic-capacitor-550x550.jpg'
export const ThirdSection = () => {
  return (
    <div className="thirdsection">
      <h1>Devices</h1>
      <div className="section-box">
        <div className="box">
          <img src={ct}/>
          <p>A device used to measure alternating current by transforming it into a proportional current that can be easily measured.
          </p>
        </div>
        <div className="box">
          <img src={vs} />
          <p>A component that detects and measures the voltage level in an electrical circuit or system.</p>
        </div>
        <div className="box">
          <img src={wire}/>
          <p>Conductive materials used to establish electrical connections between components within a circuit.</p>
        </div>
        <div className="box">
          <img src={esp32}/>
          <p>A versatile microcontroller widely used in IoT applications, capable of wireless communication and interfacing with various sensors and peripherals.</p>
        </div>
        <div className="box">
          <img src={r}/>
          <p>An electronic component that limits the flow of electric current in a circuit, typically used to control voltage levels and currents.</p>
        </div>
        <div className="box">
          <img src={c}/>
          <p>An electronic component that stores electrical energy in an electric field, commonly used to stabilize voltage and filter noise in circuits.</p>
        </div>
        </div>
    </div>
  )
}
