import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";
import { MovieProps } from "../../.history/src/types/ApiTypes_20221117170811";

export const MovieCard = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};
