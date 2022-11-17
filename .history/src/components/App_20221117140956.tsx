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

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>

      <NavBar />
      <MoviesFilter />

      <Routes>
        <Route path="/" element={<Upcoming />} />

        <Route path="/top-rated/:id/:slug" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

export const Upcoming = () => {
  return <div></div>;
};

export const TopRated = () => {
  return <div>TopRated</div>;
};

export const Popular = () => {
  return <div>Popular</div>;
};
