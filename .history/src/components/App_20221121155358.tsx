import React from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "../components/NavBar";

import { MoviesContainer } from "./MoviesContainer";

import { MovieCard } from "./MovieCard";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Redirect to="/upcoming" />} />
        <Route path="/:page" element={<MoviesContainer />} />
        <Route path="/MovieCard/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
};
