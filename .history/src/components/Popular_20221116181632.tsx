import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import getMovies from "../api/getMovies";

export const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios("https://jsonplaceholder.typicode.com/posts");
      setMovies(results.data);
    }
    getResults();
  }, []);
  console.log(movies);
  return <div className="popular_page">Popular</div>;
};
