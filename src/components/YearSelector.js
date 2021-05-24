import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./YearSelector.scss";

export const YearSelector = ({ teamName }) => {
  let playedYear = [];

  const [teamYear, setTeamYear] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DATA_API_URL}/team/all-wins/${teamName}`
      );

      const data = await response.json();
      setTeamYear(data);
    };

    fetchMatches();
  }, [teamName]);


  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = endYear; i >= startYear; i--) {
    if (teamYear[i] !== 0) playedYear.push(i);
  }

  return (
    <ol className="YearSelector">
      {playedYear.map((year) => (
        <li key={year}>
          <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
        </li>
      ))}
    </ol>
  );
};
