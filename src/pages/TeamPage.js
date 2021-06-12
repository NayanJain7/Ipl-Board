import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCards } from "../components/MatchSmallCards";
import "./TeamPage.scss";
import { PieChart } from "../components/PieChart";
import { Link } from "react-router-dom";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`${process.env.REACT_APP_DATA_API_URL}/team/${teamName}`);

      const data = await response.json();

      setTeam(data);
    };

    fetchMatches();
  }, [teamName]);

  if (!team.teamName) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "14%"}}><b>Team Not Found</b></h1>
    );
  }

  return (
    <>
      <div className="TeamPage">
        <div className="team-name-section">
          <h1 className="team-name">{team.teamName}</h1>
         
        </div>

        <PieChart team={team} />

        <div className="match-detailed-section">
          <h2>Latest Matches</h2>
          <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
        </div>
        {team.matches.slice(1).map((match) => (
          <MatchSmallCards
            key={match.id}
            teamName={team.teamName}
            match={match}
          />
        ))}
        <div className="more-link">
          <Link
            to={`/teams/${teamName}/matches/${Number.parseInt(
              team.matches[0].date.substr(0, 4)
            )}`}
          >
            More &gt;
          </Link>
        </div>
      </div>
    </>
  );
};
