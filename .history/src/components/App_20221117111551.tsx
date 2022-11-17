import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet, useRoutes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { TopRated } from "../components/TopRated";
import { Upcoming } from "./Upcoming";
import { Popular } from "./Popular";
import { MoviesFilter } from "./MoviesFilter";
import path from "path";
import { Popular } from "../../.history/src/components/Popular_20221117105303";

const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Popular />,
    },
    {
      path: "games",
      element: <Games />,
      children: [
        {
          path: "",
          element: <div>Games Index</div>,
        },
        {
          path: ":id",
          element: <div>Game Details</div>,
        },
      ],
    },
  ]);
  return routes;
};

const Games = () => {
  return (
    <div className="Games">
      <div>This is the Games page</div>
      <Outlet />
    </div>
  );
};

export default App;
