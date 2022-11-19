import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    params.page &&
      MoviesCall.get(
        `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovies(res.data.results);
      });
  }, [params]);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};
