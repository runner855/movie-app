import * as React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { MoviesFilter } from "./MoviesFilter";

export const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li className="logo">Netflix</li>
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
          <li>
            <MoviesFilter />
          </li>
        </ul>
      </nav>
    </header>
  );
};
