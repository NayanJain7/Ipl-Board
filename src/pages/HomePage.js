import React, { useEffect, useState } from "react";
import TeamTile from "../components/TeamTile";
import TextType from "../components/TextType";
import "./HomePage.scss";

const HomePage = () => {
 const [allteam, setAllTeam] = useState([]);

  useEffect(() => {
    const fetchTeamNames = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATA_API_URL}/team/all-teamname`);

      const data = await response.json();
      setAllTeam(data);
    };

    fetchTeamNames();
  }, [allteam]);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1>IPL Dashboard</h1>
      </div>
        <div className="typing-text">
          <TextType/>
        </div>
      <div className="team-grid">
        {allteam.map((team,index) => (
          <TeamTile teamName={team.teamName} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
