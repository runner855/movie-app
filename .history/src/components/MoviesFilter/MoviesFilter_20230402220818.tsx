import React from "react";
import "./MoviesFilter.css";

type MovieFilterProps = {
  value: string;
  setValue: (value: string) => void;
};

export const MoviesFilter = ({ value, setValue }: MovieFilterProps) => {
  return (
    <div className="movie_search">
      <input
        className="search-input"
        type="search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Find Your Movie"
      />
    </div>
  );
};
