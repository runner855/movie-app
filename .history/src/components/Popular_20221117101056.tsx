import React, { useState, useEffect } from "react";
import "../styles/Popular.css";
import MoviesCall from "../api/MoviesCall";

type PopularProps = {
  data: resultsProps[];
};

type resultsProps = {
  adult: boolean;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const Popular = () => {
  const [movies, setMovies] = useState<PopularProps[]>();

  useEffect(() => {
    MoviesCall.get(`popular?api_key=${process.env.REACT_APP_API_KEY}`).then(
      (res) => {
        console.log(res);
        setMovies(res.data.results);
      }
    );
  }, []);

  console.log(movies);

  return (
    
      <div className="images-container">
        {movies.map((item, index) => {
          return (
            <div
              className={`single-image `}
              key={`${item.urls.regular}-${index}`}
            >
              <img src={item.urls.regular} />
            </div>
          
  )
};
