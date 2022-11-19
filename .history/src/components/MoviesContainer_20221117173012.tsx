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

  return (
    <div className="container" onClick={() => console.log("button")}>
      {movies &&
        movies.map((item, index) => {
          return (
            <div className={`rendered-movies`} key={`${item.title}-${index}`}>
              <img alt="poster" src={item.poster_path} />
              <h1>{item.title}</h1>
            </div>
          );
        })}
    </div>
  );
};
