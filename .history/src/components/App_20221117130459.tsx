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
        <Route path="/ " element={<Upcoming />} />

        <Route path="/top-rated/:data " element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

const Popular = () => {
  let pass = "hello";
  return (
    <div>
      <Link to={"/popular/" + pass}>Click me to pass "pass"</Link>
    </div>
  );
};

const TopRated = () => {
  const { data } = useParams();
  return (
    <div>
      <h2>The data is: {data}</h2>
    </div>
  );
};
