import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";
import MoviesCall from "../api/MoviesCall";
import { MovieDetailsProps } from "../../.history/src/types/ApiTypes_20221118175849";
import { url } from "inspector";

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
      {/* {movieDetails && (
        <div
          className=""NameName="movie_card"
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`})`,
          }}
        >
          <div className=""NameName="movie_card_container"></div>

          <p>{movieDetails.overview}</p>
        </div>
      )} */}

      {movieDetails && (
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              />
              <h1>{movieDetails.title}</h1>
              <h4>{movieDetails.release_date}</h4>
              <span className="minutes">
                {movieDetails.original_language.toUpperCase()}
              </span>
              <p className="type">Action, Crime, Fantasy</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                Set in a world where fantasy creatures live side by side with
                humans. A human cop is forced to work with an Orc to find a
                weapon everyone is prepared to kill for.
              </p>
            </div>
          </div>
          <div className="blur_back bright_back"></div>
        </div>
      )}
    </>
  );
};
