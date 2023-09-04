import React, { useState, useEffect } from "react";
import getData from "../getData";

export default function Databoard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Fetching data");
    setData(getData());
  }, []);
  return <div>{data ? data.match.id : "Fetching.."}</div>;
}
