import React, { useState, useEffect } from "react";
import "../styles/Popular.css";
import { MovieProps } from "../types/ApiTypes";
import MoviesCall from "../api/MoviesCall";

export const Popular = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    MoviesCall.get(`popular?api_key=${process.env.REACT_APP_API_KEY}`).then(
      (res) => {
        setMovies(res.data.results);
      }
    );
  }, []);

  console.log("here", movies);

return (
  
)
};
