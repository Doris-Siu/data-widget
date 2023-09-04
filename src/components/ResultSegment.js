import React from "react";
import ProgressBar from "./ProgressBar";

export default function ResultSegment() {
  return (
    <div className="segment-display">
      <span>Title</span>
      <div className="bar-display">
        <ProgressBar />
        <ProgressBar />
      </div>
    </div>
  );
}
