import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { MovieProps } from "../types/ApiTypes";
import { useParams } from "react-router-dom";
import { MoviesLayout } from "./MoviesLayout";
import { MoviesFilter } from "./MoviesFilter";

export const MoviesContainer = () => {
  const [value, setValue] = useState<string>("");
  const [movies, setMovies] = useState<MovieProps[] | undefined>();
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

  useEffect(() => {
    const filteredMovies = movies.filter(() => {});
  });

  // item.task.toLowerCase().includes(value.toLowerCase())
  //);
  //setResult(filteredArray || tasks);
  //}, [value]);

  return (
    <>
      <MoviesFilter
        value={value}
        setValue={(inputValue: string) => setValue(inputValue)}
      />
      <MoviesLayout movies={movies} />
    </>
  );
};
