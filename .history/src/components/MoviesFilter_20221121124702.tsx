import React, { useState } from "react";
import { MovieProps } from "../types/ApiTypes";
import "../styles/MoviesFilter.css";

export const MoviesFilter = () => {
  return (
    <div className="movie_search">
      <input
        className="search-input"
        type="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder={"Find Your Movie"}
      />
    </div>
  );
};
