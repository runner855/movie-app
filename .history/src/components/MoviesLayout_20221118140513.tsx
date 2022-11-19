import * as React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MoviesLayout.css";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";
import { MovieProps } from "../types/ApiTypes";

type MoviesLayoutProps = {
  movies: MovieProps[] | undefined;
};

export const MoviesLayout = ({ movies }: MoviesLayoutProps) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      {movies &&
        movies.map((item, index) => {
          return (
            
              <div className={`rendered-movies`} key={`${item.title}-${index}`}>
                <button onClick={() => navigate("/MovieCard")}></button>
                <img
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                />
                  </button>
                <h1>{item.title}</h1>
              </div>
          
          );
        })}
    </div>
  );
};
