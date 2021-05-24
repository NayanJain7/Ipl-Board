import React from "react";
import "./TeamButton.scss";
import { Link } from "react-router-dom";

const TeamButton = ({ allteam }) => {
  const TeamNameChange = (teamName) => {
    let t = "";
    if (teamName === "Sunrisers Hyderabad") {
      t = "SRH";
    } else {
      for (const c of teamName) {
        if (c === c.toUpperCase() && c !== " ") {
          t += c;
        }
      }
    }
    return t;
  };

  return (
    <div className="TeamButton">
      {allteam.map((team,index) => (
        <Link to={`/teams/performance/${team.teamName}`} key={index}>
          <button className="big-button">
            {TeamNameChange(team.teamName)}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default TeamButton;
