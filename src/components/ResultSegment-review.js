import React from "react";

const ResultSegment = ({ type, homeValue, homeMax, awayValue, awayMax }) => {
  return (
    <div className="segment-display">
      <div>{type}</div>

      <div className="bar-display">
        <div>
          <div>{type === "Possession" ? homeValue + "%" : homeValue}</div>
          <progress
            className="rtl-progressbar"
            value={homeValue}
            max={homeMax}
          />
        </div>
        <div>
          <div>{type === "Possession" ? awayValue + "%" : awayValue}</div>
          <progress className="colored" value={awayValue} max={awayMax} />
        </div>
      </div>
    </div>
  );
};

export default ResultSegment;
