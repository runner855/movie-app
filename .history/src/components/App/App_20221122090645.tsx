import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../NavBar";

import { MoviesContainer } from "../MoviesContainer/MoviesContainer";

import { MovieCard } from "../MovieCard/MovieCard";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/upcoming" />} />
        <Route path="/:page" element={<MoviesContainer />} />
        <Route path="/MovieCard/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
};
