import React from "react";
import ProgressBar from "./ProgressBar";

const ResultSegment = ({ type, homeValue, homeMax, awayValue, awayMax }) => {
  return (
    <div>
      {homeValue}
      {type}
      {awayValue}
      <br />
      <progress className="rtlProgressBar" value={homeValue} max={homeMax} />

      <progress value={awayValue} max={awayMax} />
    </div>
  );
};

export default ResultSegment;
