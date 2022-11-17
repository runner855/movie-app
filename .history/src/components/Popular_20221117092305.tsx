import React, { useState, useEffect } from "react";
import "../styles/Popular.css";
import MoviesCall from "../api/MoviesCall";

export const Popular = () => {
  const [movies, setMovies] = useState<string>("");

  useEffect(() => {
    MoviesCall.get("/3/movie/popular", {
      params: { query: movies },
    }).then((res) => {
      setMovies(res.data.results);
    });
  });

  return <div className="popular_page">Popular</div>;
};
