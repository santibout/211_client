import React, { useState, useEffect } from "react";
import MissionCard from "./MissionCard";
import axios from "axios";

function SpaceX() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.spacexdata.com/v3/launches").then((response) => {
      setData(response.data);
    });
  }, []);
  const handleClick = (id) => {
    let launch = data.filter((x) => {
      return `${x.flight_number}${x.mission_name}` === id;
    });
    launch = launch[0];
    const launchSite = launch.launch_site;
    for (let x in launchSite) {
      console.log(`${x}: ${launchSite[x]}`);
    }
  };

  const displayCards = data.map((launch) => {
    return (
      <MissionCard
        key={`${launch.flight_number}${launch.mission_name}`}
        id={`${launch.flight_number}${launch.mission_name}`}
        flightNum={launch.flight_number}
        missionName={launch.mission_name}
        getId={handleClick}
      />
    );
  });

  return <div className="spacex">{displayCards}</div>;
}

export default SpaceX;
