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
                src="http://www.stickpng.com/img/download/580b57fcd9996e24bc43c529/image"
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
