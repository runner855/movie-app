import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { MovieProps } from "../types/ApiTypes";
import { useParams } from "react-router-dom";
import { MoviesLayout } from "./MoviesLayout";

type MoviesContainerProps = {
  movies: MovieProps[];
};

export const MoviesContainer = ({ movies }: MoviesContainerProps) => {
  // const [movies, setMovies] = useState<MovieProps[]>();

  return (
    <>
      <MoviesLayout movies={movies} />
    </>
  );
};
