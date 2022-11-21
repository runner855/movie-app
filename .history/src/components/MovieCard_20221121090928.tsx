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
            <div className="hero">
              <div className="details">
                <div className="title1">{movieDetails.title}</div>
              </div>
            </div>
            <div className="description">
              <div className="column2">
                <p>{movieDetails.overview}</p>
                <div class="avatars">
                  <a href="#" data-tooltip="Person 1" data-placement="top">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png"
                      alt="avatar1"
                    />
                  </a>

                  <a href="#" data-tooltip="Person 2" data-placement="top">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png"
                      alt="avatar2"
                    />
                  </a>

                  <a href="#" data-tooltip="Person 3" data-placement="top">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png"
                      alt="avatar3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
