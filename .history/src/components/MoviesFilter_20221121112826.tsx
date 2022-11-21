import React, { useState } from "react";
import "../styles/MoviesFilter.css";

type MovieFilterProps = {
  value: string;
  setValue: (text: string) => void;
};

export const MoviesFilter = ({ value, setValue }: MoviesFilterProps) => {
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
