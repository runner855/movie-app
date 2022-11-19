import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/MovieCard.css";

export const MovieCard = () => {
  const params = useParams().process.env.REACT_APP_API_KEY;
  console.log(params.id);

  return (
    <div className="movie_card_container">
      <h1>Movie</h1>
    </div>
  );
};
