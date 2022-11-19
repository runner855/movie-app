import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesCall from "../api/MoviesCall";
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const [movieDetails, setMovieDetails] = useState();
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
    params.id &&
      MoviesCall.get(
        `${params.id}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        // setMovieDetails(res.data.results);
        console.log(res.data.results);
      });
  }, [params]);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
      {movieDetails &&
        movieDetails.map(
          (
            item: {
              title:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
              poster_path: any;
              id: any;
            },
            index: any
          ) => {
            return (
              <div className={`rendered-movies`} key={`${item.title}-${index}`}>
                <h1 className="movie-title">{item.title}</h1>
              </div>
            );
          }
        )}
    </div>
  );
};
