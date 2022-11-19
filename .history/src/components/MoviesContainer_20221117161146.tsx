import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const [movies, setMovies] = useState();
  const params = useParams();

  useEffect(() => {
    params &&
      MoviesCall.get(
        `${params.page}?api_key=${process.env.REACT_APP_API_KEY}`,
        {}
      ).then((res) => {
        setMovies(res.data.results);
      });
    console.log(params);
  }, []);

  return <div>hello</div>;
};
