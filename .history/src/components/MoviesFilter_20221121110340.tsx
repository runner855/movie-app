import React, { useState, useEffect } from "react";
import "../styles/MoviesFilter.css";

export const MoviesFilter = () => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {});
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
