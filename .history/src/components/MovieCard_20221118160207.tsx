import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";

type MovieCardProps = {
  movies: MovieProps[];
};

export const MovieCard = ({ movies }: any) => {
  const params = useParams();
  console.log(params.id);
  console.log(movies);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};
