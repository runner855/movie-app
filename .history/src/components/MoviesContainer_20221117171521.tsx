import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { MovieProps } from "../types/ApiTypes";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const [movies, setMovies] = useState<MovieProps[]>();
  const params = useParams();

  useEffect(() => {
    params.page &&
      MoviesCall.get(
        `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovies(res.data.results);
      });
  }, [params]);

  console.log(movies);

  return (
    <div className="container">
      {movies &&
        movies.map((item, index) => {
          return (
            <div
              className={`rendered-movies`}
              key={`${item.title}-${index}${item.backdrop_path}-${index}`}
            >
              <img src={item.backdrop_path} alt="poster">
                {item.backdrop_path}
              </img>
              <h1>{item.title}</h1>
            </div>
          );
        })}
    </div>
  );
};
