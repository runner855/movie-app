import React, { useState, useEffect } from "react";
import "../styles/Popular.css";
import Types from "../types/ApiTypes";
import MoviesCall from "../api/MoviesCall";

export const Popular = () => {
  const [movies, setMovies] = useState<Types>();

  useEffect(() => {
    MoviesCall.get(`popular?api_key=${process.env.REACT_APP_API_KEY}`).then(
      (res) => {
        setMovies(res.data);
      }
    );
  }, []);

  console.log("here", movies);

  <div className="movies-container">
    {movies.map((item, index) => {
      return (
        <div className={`movies-results`} key={`${item}-${index}`}>
          {item}
        </div>
      );
    })}
  </div>;
};
