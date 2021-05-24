import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import BarChart from "../components/BarChart";
import TeamButton from "../components/TeamButton";
import TeamTable from "../components/TeamTable";
import "./TeamPerformancePage.scss";

const TeamPerformPage = () => {
  const [allteam, setAllTeam] = useState([]);

  const  {teamName}  = useParams();


  useEffect(() => {
    const fetchTeamNames = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATA_API_URL}/team/all-teamname`);

      const data = await response.json();
      setAllTeam(data);
    };

    fetchTeamNames();
  }, []);
  return (
    <div className="TeamPerformPage">
      <TeamButton allteam={allteam}/>
      <div className="bar-chart">
        <BarChart />
      </div>
      <div className="team-table">
        <TeamTable  teamName = {teamName} />
      </div>
    </div>
  );
};

export default TeamPerformPage;
