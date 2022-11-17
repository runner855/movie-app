import * as React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="item" to="/">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
              />
            </Link>
          </li>
          <li>
            <Link className="item" to="/">
              Upcoming
            </Link>
          </li>
          <li>
            <Link className="item" to="/top-rated">
              Top Rated
            </Link>
          </li>
          <li>
            <Link className="item" to="/popular">
              Popular
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
