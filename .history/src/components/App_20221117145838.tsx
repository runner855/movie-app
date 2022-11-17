import React from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { MoviesFilter } from "./MoviesFilter";
import { Upcoming } from "./Upcoming";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>

      <MoviesFilter />

      <Routes>
        <NavBar />
        <Route path="/:page" element={<Upcoming />} />
      </Routes>
    </div>
  );
};
