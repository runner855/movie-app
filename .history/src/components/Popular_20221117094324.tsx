import React, { useState, useEffect } from "react";
import "../styles/Popular.css";
import MoviesCall from "../api/MoviesCall";

export const Popular = () => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    MoviesCall.get(`popular?api_key=${process.env.REACT_APP_API_KEY}`, {}).then(
      (res) => {
        console.log(res);
        setMovies(res.data.results);
      }
    );
  }, []);

  return <div className="popular_page">Popular</div>;
};
