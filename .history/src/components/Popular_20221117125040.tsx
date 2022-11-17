import React, { useState, useEffect } from "react";
import "../styles/Popular.css";
import { MovieProps } from "../types/ApiTypes";
import { useParams } from "react-router-dom";
import MoviesCall from "../api/MoviesCall";

export const Popular = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    MoviesCall.get(`popular?api_key=${process.env.REACT_APP_API_KEY}`).then(
      (res) => {
        setMovies(res.data.results);
      }
    );
  }, []);

  return <div className="popular_page">Popular id is {id}</div>;
};
