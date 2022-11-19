import * as React from "react";
import "../styles/MoviesLayout.css";
import { MovieProps } from "../types/ApiTypes";

export const MoviesLayout = ({ movies }: any) => {
  return (
    <div className="container" onClick={() => console.log("button")}>
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
  );
};
