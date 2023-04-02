import * as React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AppUrls } from '../../../.history/src/types/ApiTypes_20230402220059';

export const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="item" to="/upcoming">
              {AppUrls.UPCOMING}
            </Link>
          </li>
          <li>
            <Link className="item" to="/top_rated">
              {AppUrls.TOP_RATED}
            </Link>
          </li>
          <li>
            <Link className="item" to="/popular">
              {AppUrls.POPULAR}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
