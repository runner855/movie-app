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
        <Route path="/Upcoming" element={<Upcoming />} />

        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

export const Upcoming = () => {
  return (
    <div style={{ padding: 30 }}>
      <p>
        <Link to={`/top-rated`}>Top Rated</Link>
      </p>
    </div>
  );
};

export const TopRated = () => {
  const params = useParams();
  return (
    <div style={{ padding: 30 }}>
      <h1>ID: {params.id}</h1>
      <h2>Slug: {params.slug}</h2>
    </div>
  );
};

export const Popular = () => {
  return <div>Popular</div>;
};
