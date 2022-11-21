import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const [movies, setMovies] = useState();
  const params = useParams();

  useEffect(() => {
    MoviesCall.get(
      `upcoming?api_key=${process.env.REACT_APP_API_KEY}`,
      {}
    ).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div>
      <h1>MoviesContainer</h1>
    </div>
  );
};