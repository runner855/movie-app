import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";
import MoviesCall from "../api/MoviesCall";
import { MovieDetailsProps } from "../../.history/src/types/ApiTypes_20221118175849";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsProps>();
  const params = useParams();

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovieDetails(res.data);
      });
  }, [params]);

  return (
    <>
      {movieDetails && (
        <div className="movie_card">
          <div className="movie_card_container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
              alt="cover"
              className="cover"
            />
            <div className="hero" style={{backround:{movieDetails.backdrop_path}}}>
              <div className="details">
                <div className="title1">{movieDetails.title}</div>
                <div className="title2">The Battle of the Five Armies</div>
              </div>
            </div>
            <div className="description">
              <div className="column2">
                <p>{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
