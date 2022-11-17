import React, { useState } from "react";
import "../styles/MoviesFilter.css";

export const MoviesFilter = () => {
  const [input, setInput] = useState<string>("");
  return (
    <div className="movie_search">
      <input
        className="search-input"
        type="search"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        placeholder={"Find Your Movie"}
      />
    </div>
  );
};
