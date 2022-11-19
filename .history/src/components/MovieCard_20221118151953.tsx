import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesCall from "../api/MoviesCall";
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState();
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovieDetails(res.data.results);
      });
  }, [params]);

  console.log(movieDetails);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};
