import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { MovieProps } from "../types/ApiTypes";
import { useParams } from "react-router-dom";
import { MoviesLayout } from "./MoviesLayout";

type MoviesContainerProps = {
  moviesCollection: MovieProps[];
};

export const MoviesContainer = ({ movies }: MoviesContainerProps) => {
  // const [movies, setMovies] = useState<MovieProps[]>();
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
    <>
      <MoviesLayout movies={movies} />
    </>
  );
};
