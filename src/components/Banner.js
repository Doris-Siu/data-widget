import React from "react";
import asllogo from "../assets/arsenal.png";
import fhlogo from "../assets/ffc.png";

export default function Banner() {
  return (
    <div className="banner-display">
      <h1 className="logo-display">Premier League</h1>
      <div className="logo-display">
        <div>
          <img className="logo" src={asllogo} alt="Arsenal logo" />
          <span>
            <b>Arsenal</b>
          </span>
        </div>
        <div>
          <img className="logo" src={fhlogo} alt="Fulham logo" />
          <span>
            <b>Fulham</b>
          </span>
        </div>
      </div>
    </div>
  );
}
