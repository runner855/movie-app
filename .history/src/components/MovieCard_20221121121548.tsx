import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";
import MoviesCall from "../api/MoviesCall";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState<MovieProps>();
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
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              />
              <h1>{movieDetails.title}</h1>
              <h4>{moment(movieDetails.release_date).format("YYYY")}</h4>
              <span className="minutes">
                {movieDetails.original_language.toUpperCase()}
              </span>
            </div>
            <div className="movie_desc">
              <p className="text">{movieDetails.overview}</p>
              <p className="ratings">{movieDetails.vote_average}</p>
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{
              backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`})`,
            }}
          ></div>
        </div>
      )}
    </>
  );
};
