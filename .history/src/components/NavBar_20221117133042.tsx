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
              One
            </Link>
          </li>
          <li>
            <Link className="item" to="/two">
              Two
            </Link>
          </li>
          <li>
            <Link className="item" to="/three">
              Three
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
