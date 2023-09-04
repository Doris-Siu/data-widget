import React from 'react'
import asllogo from "../assets/arsenal.png";
import fhlogo from "../assets/ffc.png";

export default function Banner() {
  return (
    <div>
    <h1>Premier League</h1>
    <div>
      <img src={asllogo} alt="Arsenal logo" />
      <span>Arsenal</span>
    </div>
    <div>
      <img src={fhlogo} alt="Fulham logo" />
      <span>Fulham</span>
    </div>
  </div>  )
}
