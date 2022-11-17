import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { TopRated } from "../../.history/src/components/TopRated_20221116163606";
import { Upcoming } from "./Upcoming";
import { Popular } from "../components/Populara";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Upcoming />} />

        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};
