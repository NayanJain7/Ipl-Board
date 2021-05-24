import React, { useEffect, useState } from "react";
import "./TeamTable.scss";
import { Link } from "react-router-dom";

const TeamTable = ({teamName}) => {
  const [allteamdata, setAllTeamData] = useState([]);


  useEffect(() => {
    const fetchAllTeamsData = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATA_API_URL}/All-Team-History`);

      const data = await response.json();
      setAllTeamData(data);
    };

    fetchAllTeamsData();
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "0.52em" }}>
        <span className="blue">&lt;</span>
        {teamName}
        <span className="blue">&gt;</span>{" "}
        <span className="yellow">Performance</span>
      </h1>
      <div className="TeamTable">
        <table className="container">
          <thead>
            <tr >
              <th>
                <h1 style={{textAlign:"center"}}>Team Name</h1>
              </th>
              <th style={{textAlign:"center"}}>
                <h1>Total Matches</h1>
              </th>
              <th>
                <h1 style={{textAlign:"center"}}>Total Wins</h1>
              </th>
              <th style={{textAlign:"center"}}>
                <h1>Total Lose</h1>
              </th>
              <th>
                <h1>Last few Matches</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            {allteamdata.map((team) => (
              <tr style={{textAlign:"center"}}  key={team.id}>
                <td><Link className="team-link" to={`/teams/${team.teamName}`} >{team.teamName}</Link></td>
                <td >{team.totalMatch}</td>
                <td>{team.totalWins}</td>
                <td>{team.totalMatch - team.totalWins}</td>
                <td>
                {team.matches.map((match,index) => (
                  <span style={{padding:"5px 5px"}} key={index}>{team.teamName === match.matchWinner?<i className="fa fa-trophy" style={{color:"#5cb85c"}} aria-hidden="true" ></i>:<i className="fa fa-trophy" style={{color:"#d9534f"}} aria-hidden="true" ></i>}</span>
                ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TeamTable;
