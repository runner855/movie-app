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
          classNameName="movie_card"
          style={{
            backgroundImage: `url(${`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`})`,
          }}
        >
          <div classNameName="movie_card_container"></div>

          <p>{movieDetails.overview}</p>
        </div>
      )} */}

      <div className="card-movie-wrapper card-movie-wrapper--centered">
        <div className="card-movie-carousel">
          <div className="card-movie card-movie--light card-movie--looper card-movie--active">
            <div className="card-movie__content">
              <div className="card-movie__title">Looper</div>

              <div className="card-movie__details">
                <span className="card-movie__details-item">2012</span>

                <span className="card-movie__details-item">119 mins</span>

                <ul className="card-movie__details-item card-movie__details-list">
                  <li>Action</li>
                  <li>Crime</li>
                  <li>Sci-fi</li>
                </ul>
              </div>

              <div className="card-movie__description">
                <p>
                  In 2074, when the mob wants to get rid of someone, the target
                  is sent into the past, where a hired gun
                  awaits&nbsp;-&nbsp;someone like Joe.
                </p>
              </div>
            </div>

            <div className="card-movie__rating">7.5</div>

            <div
              className="card-movie__player"
              data-trailer="5kGFyVKmqA0"
            ></div>
          </div>

          <div className="card-movie card-movie--dark card-movie--tron">
            <div className="card-movie__content">
              <div className="card-movie__title">Tron: Legacy</div>

              <div className="card-movie__details">
                <span className="card-movie__details-item">2010</span>

                <span className="card-movie__details-item">125 mins</span>

                <ul className="card-movie__details-item card-movie__details-list">
                  <li>Action</li>
                  <li>Adventure</li>
                  <li>Fantasy</li>
                  <li>Sci-fi</li>
                </ul>
              </div>

              <div className="card-movie__description">
                <p>
                  The son of a virtual world designer goes looking for his
                  father and ends up inside the digital world that his father
                  designed. He meets his father's corrupted creation and a
                  unique ally who was born inside the digital world.
                </p>
              </div>
            </div>

            <div className="card-movie__rating">6.8</div>

            <div
              className="card-movie__player"
              data-trailer="L9szn1QQfas"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
