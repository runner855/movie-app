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
      {/* {movieDetails && (
        <div classNameNameName="movie_card">
          <div classNameNameName="movie_card_container"></div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="image_details"
          />
          <p>{movieDetails.overview}</p>
        </div>
      )} */}

      <div id="card_container" data-offset="2">
        <div className="pg">
          <img src="https://pluspng.com/img-png/aquaman-png-aquaman-png-clipart-666.png" />
        </div>
        <div id="card">
          <div className="shine"></div>
          <div className="text-block">
            <h1>
              Aquaman <small>(2018)</small>
            </h1>
            <h3>Action | Adventure</h3>
            <p>{movieDetails.overview}</p>
            <button>Watch Trailer</button>
          </div>
        </div>
      </div>
    </>
  );
};
