import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <ul className="nav-type">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="active" to="/teams/Mumbai%20Indians">
              Teams
            </Link>
          </li>
          <li>
            <Link className="active" to="/teams/Mumbai%20Indians/matches/2020">
                Matches
            </Link>
          </li>
          <li>
            <Link className="active" to="/teams/performance/Mumbai%20Indians/">
                Performance
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
