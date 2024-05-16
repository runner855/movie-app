import React from "react";
import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

import { MoviesContainer } from "../MoviesContainer/MoviesContainer";

import { MovieCard } from "../MovieCard/MovieCard";

export const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="title" onClick={() => navigate(`/upcoming`)}>
        Movies App
      </div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/upcoming" />} />
        <Route path="/:page" element={<MoviesContainer />} />
        <Route path="/MovieCard/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
};
