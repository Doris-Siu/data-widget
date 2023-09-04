import React from "react";

export default function ProgressBar() {
  return (
    <div>
      <label for="result">71.4%</label>
      <progress id="result" value="71.4" max="100">
        71.4%
      </progress>
    </div>
  );
}
