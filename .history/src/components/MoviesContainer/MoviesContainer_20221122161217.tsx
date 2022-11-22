import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { MovieProps } from "../../types/ApiTypes";
import { useParams } from "react-router-dom";
import { MoviesLayout } from "../MoviesLayout/MoviesLayout";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import { useAppDispatch, useAppSelector } from "../../hook/Store";
import { getMovies } from "../../actions/MoviesList";

export const MoviesContainer = () => {
  const [value, setValue] = useState<string>("");

  const [results, setResults] = useState<MovieProps[] | undefined>();
  const params = useParams();
  const dispatch = useAppDispatch();

  const movies = useAppSelector((state) => state.movies.MovieList);

  useEffect(() => {
    params.page &&
      MoviesCall.get(
        `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        dispatch(getMovies(res.data.results));
      });
  }, [params]);

  useEffect(() => {
    const filteredMovies =
      movies &&
      movies.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );

    setResults(filteredMovies);
  }, [value, movies]);

  return (
    <>
      <MoviesFilter
        value={value}
        setValue={(inputValue: string) => setValue(inputValue)}
      />
      <MoviesLayout movies={value ? results : movies} />
    </>
  );
};
