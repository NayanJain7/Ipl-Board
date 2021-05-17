import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
  const [allteam, setAllTeam] = useState([]);

  const [text, setText] = useState("");

  const param = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch("http://localhost:8080/team/all-teamname");

      const data = await response.json();
      setAllTeam(data);
    };

    fetchMatches();
  }, [allteam]);

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="search team"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />

      <div hidden={!text} className="suggestions">
        {allteam.map((team, index) =>
          team.toLowerCase().includes(text.toLowerCase().trim()) ? (
            <Link
              to={
                param.year === undefined
                  ? `/teams/${team}`
                  : `/teams/${team}/matches/${param.year}`
              }
            >
              <p className="item" onClick={() => setText("")} key={index}>
                {team}
              </p>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchBar;
