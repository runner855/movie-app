import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";
import MoviesCall from "../api/MoviesCall";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState();
  const params = useParams();

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        console.log(res.data);
      });
  }, [params]);

  console.log(movieDetails);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};
