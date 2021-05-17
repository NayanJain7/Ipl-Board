import { React } from "react";
import { Link } from "react-router-dom";
import  './MatchSmallCards.scss';

export const MatchSmallCards = ({ teamName, match }) => {
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;

  const isMatchWon = teamName === match.matchWinner;

  return (
    <div className={isMatchWon ? 'MatchSmallCards won-card' : 'MatchSmallCards loss-card'}>
      <h2 className="vs">vs</h2>
      <h3 className="opponent-team">
        <Link to = {`/teams/${otherTeam}`}> {otherTeam}</Link>
        </h3>
      <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
      <p className="match-date">Date : &nbsp;{match.date}</p>
      <p className="match-venue">Venue : &nbsp;&nbsp;{match.venue}</p> 
    </div>
  );
};
