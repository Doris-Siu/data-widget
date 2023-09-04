import React, { useState, useEffect } from "react";
import getData from "../getData";
import Results from "./Results";

export default function Databoard() {
  // set KEYS to indicate diff. time sections
  const FIRST_HALF_KEY = 'fh';
  const SECOND_HALF_KEY = 'sh';
  const FULL_KEY = 'value';

  // set state variables to store data to be displayed
  const [data, setData] = useState(null);

  const [homePossessionData, setHomePossessionData] = useState([]);
  const [awayPossessionData, setAwayPossessionData] = useState([]);
  
  const [homeShotData, setHomeShotData] = useState([]);
  const [awayShotData, setAwayShotData] = useState([]);
  
  const [homeShotOnTargetData, setHomeShotOnTargetData] = useState([]);
  const [awayShotOnTargetData, setAwayShotOnTargetData] = useState([]);
  
  const [homeCornersData, setHomeCornersData] = useState([]);
  const [awayCornersData, setAwayCornersData] = useState([]);


  useEffect(() => {
    console.log("Fetching data");
    setData(getData());
  }, []);
  return <div>{data ? <Results /> : "Fetching.."}</div>;
}
