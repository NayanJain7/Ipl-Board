import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./SearchBar.scss";

const SearchBar = () => {
  const [allteam, setAllTeam] = useState([]);

  const [text, setText] = useState("");

  const param = useParams();

  useEffect(() => {
    const fetchTeamNames = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_DATA_API_URL}/team/all-teamname`
      );

      const data = await response.json();
      setAllTeam(data);
    };

    fetchTeamNames();
  }, [allteam]);

  return (
    <div className="SearchBar">
      <div className="Card">
        <div className="CardInner">
          <label>Search for your favourite team</label>
          <div className="container">
            <div className="Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="InputContainer">
              <input
                type="text"
                placeholder="It just can't be CSK..."
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div hidden={!text} className="suggestions">
        {allteam.map((team, index) =>
          team.teamName.toLowerCase().includes(text.toLowerCase().trim()) ? (
            <Link
              to={
                param.year === undefined
                  ? `/teams/${team.teamName}`
                  : `/teams/${team.teamName}/matches/${Number(
                      team.latestPlayedYear.substr(0, 4)
                    )}`
              }
              key={index}
            >
              <p className="item" onClick={() => setText("")}>
                {team.teamName}
              </p>
            </Link>
          ) : null
        )}
      </div>
    </div>
  );
};

export default SearchBar;
