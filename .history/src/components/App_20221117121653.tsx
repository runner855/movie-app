import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Outlet, useRoutes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { TopRated } from "../components/TopRated";
import { Upcoming } from "./Upcoming";
import { Popular } from "./Popular";
import { MoviesFilter } from "./MoviesFilter";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>

      <NavBar />
      <MoviesFilter />

      <Routes>
        <Route path="/" element={<div>Upcoming</div>} />

        <Route path="/top-rated" element={<div>TopRated</div>} />
        <Route path="/popular" element={<div>Popular</div>} />
      </Routes>
    </div>
  );
};
