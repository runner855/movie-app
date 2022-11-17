import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />
    </div>
  );
};
