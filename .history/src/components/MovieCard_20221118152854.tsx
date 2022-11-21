import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesCall from "../api/MoviesCall";
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        // setMovieDetails(res.data.results);
        console.log(res.data.results);
      });
  }, [params]);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};