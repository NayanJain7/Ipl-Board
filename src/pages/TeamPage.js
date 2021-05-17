import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCards } from "../components/MatchSmallCards";
import "./TeamPage.scss";
import { PieChart } from "../components/PieChart";
import Loder from "../components/Loder";
import { Link } from "react-router-dom";

export const TeamPage = () => {
  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();

  let isLoaded = true;

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`http://localhost:8080/team/${teamName}`);

      const data = await response.json();
      isLoaded = true;
      setTeam(data);
    };

    fetchMatches();
  }, [teamName]);

  if (!isLoaded) {
    return <Loder />;
    // <h1>Team Not Found</h1>
  }
  if (!team.teamName) {
    return <h1>Team Not Found</h1>;
  }

  return (
    <>
      <div className="TeamPage">
        <div className="team-name-section">
          <h1 className="team-name">{team.teamName}</h1>
          <h2 className="latest-matches">Latest Matches</h2>
        </div>

        <PieChart team={team} />

        <div className="match-detailed-section">
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
            to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}
          >
            More &gt;
          </Link>
        </div>
      </div>
    </>
  );
};
