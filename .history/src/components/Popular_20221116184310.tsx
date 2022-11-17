import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import MoviesCall from "../api/MoviesCall";
import { couldStartTrivia } from "typescript";

export const Popular = () => {
  const [movies, setMovies] = useState<string>("");

  useEffect(() => {
    MoviesCall.get(
      "/3/movie/popular?api_key=63cce6cf085f07533c65787732f436aa",
      {
        params: { query: movies },
      }
    ).then((res) => {
      console.log("here", res.data.results);
    });
  });

  return <div className="popular_page">Popular</div>;
};
