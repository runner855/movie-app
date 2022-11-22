import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "./MovieCard.css";
import { MovieProps } from "../../../.history/src/types/ApiTypes_20221117170811";
import { useAppDispatch, useAppSelector } from "../../hook/Store";
import MoviesCall from "../../api/MoviesCall";
import { getMoviesDetails } from "../../actions/MoviesDetails";

export const MovieCard = () => {
  const dispatch = useAppDispatch();
  const params = useParams();

  const movieDetails = useAppSelector((state) => state.movies.MovieList);

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        dispatch(getMovies(res.data.results));
      });
  }, [params]);

  return (
    <>
      {movieDetails && (
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
                alt="locandina"
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              />
              <h1>{movieDetails.title}</h1>
              <h4>{moment(movieDetails.release_date).format("YYYY")}</h4>
              <span className="language">
                {movieDetails.original_language.toUpperCase()}
              </span>
              <span className="ratings_avg">
                {(Math.round(movieDetails.vote_average * 100) / 100).toFixed(1)}
              </span>

              <div className="Stars"></div>
            </div>
            <div className="movie_desc">
              <p className="text">{movieDetails.overview}</p>
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
