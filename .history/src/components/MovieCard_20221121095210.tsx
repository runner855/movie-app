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
        <div classNameNameNameName="movie_card">
          <div classNameNameNameName="movie_card_container"></div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt="image_details"
          />
          <p>{movieDetails.overview}</p>
        </div>
      )} */}

<div className="wrapper">
  <div className="main_card">
    <div className="card_left">
      <div className="card_datails">
        <h1>Mission: Impossible – Fallout</h1>
        <div className="card_cat">
          <p className="PG">PG - 13</p>
          <p className="year">2018</p>
          <p className="genre">Action | Adventure </p>
          <p className="time">2h 28m</p>
        </div>
        <p className="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
        <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
      <div className="social-btn">
        <!-- WATCH TRAILER-->
        <button>
          <i className="fas fa-play"></i> SEE TRAILER
        </button>
        <!-- GET-->
        <button>
          <i className="fas fa-download"></i> DOWNLOAD
        </button>
        <!--USERS RATINGS-->
        <button>
          <i className="fas fa-thumbs-up"></i> 97%
        </button>
        <!--BOOKMARK-->
        <button>
          <i className="fas fa-star"></i>
        </button>
      </div>  
      </div>
    </div>
    <div className="card_right">
      <div className="img_container">
        <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt=""/>
        </div>
        <div className="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i className="fas fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  </div>




<a className="Follow" href="https://codepen.io/ZaynAlaoudi/" target="blank_"></a>

    </>
  );
};
