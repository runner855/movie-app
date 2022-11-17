import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import getMovies from "../api/getMovies";
import { couldStartTrivia } from "typescript";

export const Popular = () => {
  const [movies, setMovies] = useState([]);

  return <div className="popular_page">Popular</div>;
};
