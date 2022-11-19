import * as React from "react";
import "../styles/MoviesLayout.css";
import { MovieProps } from "../types/ApiTypes";

type MoviesLayoutProps = {
  movies: MovieProps[] | undefined;
};

export const MoviesLayout = ({ movies }: MoviesLayoutProps) => {
  return (
    <button>
      <div className="container">
        {movies &&
          movies.map((item, index) => {
            return (
              <div className={`rendered-movies`} key={`${item.title}-${index}`}>
                <img
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
                <h1>{item.title}</h1>
              </div>
            );
          })}
      </div>
    </button>
  );
};
