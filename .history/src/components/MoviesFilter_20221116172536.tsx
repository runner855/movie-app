import * as React from "react";
import "../styles/MoviesFilter.css";

export const MoviesFilter = () => {
  return (
    <div className="movie_search">
      <input
        className="search-input"
        type="search"
        // onChange={(e) => setValue(e.target.value)}
        // value={value}
        placeholder={"Find Your Tasks"}
      />
    </div>
  );
};
