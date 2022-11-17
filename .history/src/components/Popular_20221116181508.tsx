import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import getMovies from "../api/getMovies";

export const Popular = () => {
  const [movies, setMovieS] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(results.data);
    }
    getResults();
  }, []);
  console.log(posts);
  return <div className="popular_page">Popular</div>;
};
