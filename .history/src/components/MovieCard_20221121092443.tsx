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
        <div classNameName="movie_card">
          <div classNameName="movie_card_container"></div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="image_details"
          />
          <p>{movieDetails.overview}</p>
        </div>
      )} */}

      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
            />
            <h1>Bright</h1>
            <h4>2017, David Ayer</h4>
            <span className="minutes">117 min</span>
            <p className="type">Action, Crime, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              Set in a world where fantasy creatures live side by side with
              humans. A human cop is forced to work with an Orc to find a weapon
              everyone is prepared to kill for.
            </p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back bright_back"></div>
      </div>
      <div className="movie_card" id="tomb">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
            />
            <h1>Tomb Raider</h1>
            <h4>2018, Roar Uthaug</h4>
            <span className="minutes">125 min</span>
            <p className="type">Action, Fantasy</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              Lara Croft, the fiercely independent daughter of a missing
              adventurer, must push herself beyond her limits when she finds
              herself on the island where her father disappeared.
            </p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back tomb_back"></div>
      </div>
      <div className="movie_card" id="ave">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"
            />
            <h1>Black Panther</h1>
            <h4>2018, Ryan Coogler</h4>
            <span className="minutes">134 min</span>
            <p className="type">Action, Adventure, Sci-Fi</p>
          </div>
          <div className="movie_desc">
            <p className="text">
              T'Challa, the King of Wakanda, rises to the throne in the
              isolated, technologically advanced African nation, but his claim
              is challenged by a vengeful outsider who was a childhood victim of
              T'Challa's father's mistake.
            </p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons"></i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div className="blur_back ave_back"></div>
      </div>
    </>
  );
};
