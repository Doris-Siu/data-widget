import React, { useState, useEffect } from "react";
// import getData from "../getData";
import ResultSegment from "./ResultSegment";

export default function Results() {
  const FIRST_HALF_KEY = "fh";

  // set state variables to store data to be displayed
  const [dataLoaded, setDataLoaded] = useState(false);

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
    fetch(process.env.REACT_APP_API_URL)
      .then((res) => res.json())
      .then((data) => {
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
            })[0][FIRST_HALF_KEY]
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
        setDataLoaded(true);
      });
  }, []);
  return dataLoaded ? (
    <div className="board-display">
      <ResultSegment
        type="Possession"
        homeMax={homePossessionData + awayPossessionData}
        homeValue={homePossessionData}
        awayMax={homePossessionData + awayPossessionData}
        awayValue={awayPossessionData}
      ></ResultSegment>

      <ResultSegment
        type="Shots"
        homeMax={homeShotData + awayShotData}
        homeValue={homeShotData}
        awayMax={homeShotData + awayShotData}
        awayValue={awayShotData}
      ></ResultSegment>

      <ResultSegment
        type="Shots on Target"
        homeMax={homeShotOnTargetData + awayShotOnTargetData}
        homeValue={homeShotOnTargetData}
        awayMax={homeShotOnTargetData + awayShotOnTargetData}
        awayValue={awayShotOnTargetData}
      ></ResultSegment>

      <ResultSegment
        type="Corners"
        homeMax={homeCornersData + awayCornersData}
        homeValue={homeCornersData}
        awayMax={homeCornersData + awayCornersData}
        awayValue={awayCornersData}
      ></ResultSegment>
    </div>
  ) : (
    "fetching..."
  );
}
