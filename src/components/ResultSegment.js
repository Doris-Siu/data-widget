import React from "react";

const ResultSegment = ({ type, homeValue, homeMax, awayValue, awayMax }) => {
  return (
    <div className="segment-display">
      <div>{type}</div>

      <div className="bar-display">
        <div>
          <div>{homeValue}</div>
          <progress
            className="rtl-progressbar"
            value={homeValue}
            max={homeMax}
          />
        </div>
        <div>
          <div>{awayValue}</div>
          <progress value={awayValue} max={awayMax} />
        </div>
      </div>
    </div>
  );
};

export default ResultSegment;
