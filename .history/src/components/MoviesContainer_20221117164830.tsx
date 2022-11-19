import React, { useEffect, useState } from "react";
import MoviesCall from "../api/MoviesCall";
import { MovieProps } from "../types/ApiTypes";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const [movies, setMovies] = useState();
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

  <div className="container">
    {movies &&
      movies.map((item, index) => {
        return (
          <div
            className={`rendered-movies`}
            key={`${item.urls.regular}-${index}`}
          >
            <img src={item.urls.regular} />
          </div>
        );
      })}
  </div>;
};
