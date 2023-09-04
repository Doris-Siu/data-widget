import React, { useState, useEffect } from "react";
import getData from "../getData";
import Results from "./Results";

export default function Databoard() {
  // set KEYS to indicate diff. time sections
  const FIRST_HALF_KEY = "fh";
  const SECOND_HALF_KEY = "sh";
  const FULL_KEY = "value";

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

    let matchData = data.match;
    let liveData = matchData.liveData;
    let lineupData = liveData.lineups;
    let homeData = lineupData.home.stats;
    let awayData = lineupData.away.stats;

    setHomePossessionData(
      parseFloat(
        homeData.filter((d) => {
          return d.type === "possessionPercentage";
        })[0][FIRST_HALF_KEY]
      )
    );
    setAwayPossessionData(
      parseFloat(
        awayData.filter((d) => {
          return d.type === "possessionPercentage";
        })[0][FIRST_HALF_KEY]
      )
    );

    setHomeShotData(
      parseFloat(
        homeData.filter((d) => {
          return d.type === "totalScoringAtt";
        })[0][FIRST_HALF_KEY]
      )
    );
    setAwayShotData(
      parseFloat(
        awayData.filter((d) => {
          return d.type === "totalScoringAtt";
        })[0][FIRST_HALF_KEY],
        0
      )
    );

    setHomeShotOnTargetData(
      parseFloat(
        homeData.filter((d) => {
          return d.type === "ontargetScoringAtt";
        })[0][FIRST_HALF_KEY]
      )
    );
    setAwayShotOnTargetData(
      parseFloat(
        awayData.filter((d) => {
          return d.type === "ontargetScoringAtt";
        })[0][FIRST_HALF_KEY]
      )
    );

    setHomeCornersData(
      parseFloat(
        homeData.filter((d) => {
          return d.type === "wonCorners";
        })[0][FIRST_HALF_KEY],
        0
      )
    );
    setAwayCornersData(
      parseFloat(
        awayData.filter((d) => {
          return d.type === "wonCorners";
        })[0][FIRST_HALF_KEY],
        0
      )
    );
  }, []);
 
  return <div>{data ? <Results /> : "Fetching.."}</div>;
}
