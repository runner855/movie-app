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

<div class="wrapper">
  <div class="main_card">
    <div class="card_left">
      <div class="card_datails">
        <h1>Mission: Impossible – Fallout</h1>
        <div class="card_cat">
          <p class="PG">PG - 13</p>
          <p class="year">2018</p>
          <p class="genre">Action | Adventure </p>
          <p class="time">2h 28m</p>
        </div>
        <p class="disc">Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.</p>
        <a href="https://www.imdb.com/title/tt4912910/" target="_blank">Read More</a>
      <div class="social-btn">
        <!-- WATCH TRAILER-->
        <button>
          <i class="fas fa-play"></i> SEE TRAILER
        </button>
        <!-- GET-->
        <button>
          <i class="fas fa-download"></i> DOWNLOAD
        </button>
        <!--USERS RATINGS-->
        <button>
          <i class="fas fa-thumbs-up"></i> 97%
        </button>
        <!--BOOKMARK-->
        <button>
          <i class="fas fa-star"></i>
        </button>
      </div>  
      </div>
    </div>
    <div class="card_right">
      <div class="img_container">
        <img src="https://upload.wikimedia.org/wikipedia/en/f/ff/MI_%E2%80%93_Fallout.jpg" alt="">
        </div>
        <div class="play_btn">
          <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
            <i class="fas fa-play-circle"></i>
          </a>
        </div>
      </div>
    </div>
  </div>



<!-- FOLLOW -->
<a class="Follow" href="https://codepen.io/ZaynAlaoudi/" target="blank_"></a>

    </>
  );
};
