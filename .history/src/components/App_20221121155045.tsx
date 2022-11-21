import React from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
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
        <Route exact path="/">
          <Redirect to="/upcoming" />
        </Route>
        <Route path="/:page" element={<MoviesContainer />} />
        <Route path="/MovieCard/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
};
