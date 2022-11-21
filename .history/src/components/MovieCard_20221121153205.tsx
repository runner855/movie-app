import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";
import MoviesCall from "../api/MoviesCall";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState<MovieProps | undefined>();
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
                alt="locandina"
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              />
              <h1>{movieDetails.title}</h1>
              <h4>{moment(movieDetails.release_date).format("YYYY")}</h4>
              <span className="language">
                {movieDetails.original_language.toUpperCase()}
              </span>
              <p className="ratings_avg">
                {(
                  Math.round(
                    (movieDetails.vote_average + Number.EPSILON) * 100
                  ) / 100
                ).toFixed(1)}
              </p>
              

<div class="Stars" style={{"--rating: 2.3;" aria-label="Rating of this product is 2.3 out of 5."}}>


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
