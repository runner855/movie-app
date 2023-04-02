import * as React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AppUrls } from "../../types/ApiTypes";

export const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="item" to={AppUrls.UPCOMING}>
              Upcoming
            </Link>
          </li>
          <li>
            <Link className="item" to={AppUrls.TOP_RATED}>
              Top Rated
            </Link>
          </li>
          <li>
            <Link className="item" to={AppUrls.POPULAR}>
              Popular
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
