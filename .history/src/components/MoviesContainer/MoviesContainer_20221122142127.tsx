import React, { useEffect, useState } from "react";
import MoviesCall from "../../api/MoviesCall";
import { MovieProps } from "../../types/ApiTypes";
import { useParams } from "react-router-dom";
import { MoviesLayout } from "../MoviesLayout/MoviesLayout";
import { MoviesFilter } from "../MoviesFilter/MoviesFilter";
import { useAppDispatch } from "../../hook/Store";
import { getMovies } from "../../actions";

export const MoviesContainer = () => {
  const [value, setValue] = useState<string>("");
  const [movies, setMovies] = useState<MovieProps[] | undefined>();
  const [results, setResults] = useState<MovieProps[] | undefined>();
  const params = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies()).then((movies: any) => console.log(movies));
    // params.page &&
    //   MoviesCall.get(
    //     `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
    //     {}
    //   ).then((res) => {
    //     setMovies(res.data.results);
    //   });
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
