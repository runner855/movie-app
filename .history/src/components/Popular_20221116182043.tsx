import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import getMovies from "../api/getMovies";
import { couldStartTrivia } from "typescript";

export const Popular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      // const results = await axios("https://jsonplaceholder.typicode.com/posts");
      getMovies
        .get("/3/movie/popular", {
          params: { query: movies },
        })
        .then((res: any) => {
          console.log(res);
        });
    }
    getMovies();
  }, []);
  console.log(movies);
  return <div className="popular_page">Popular</div>;
};
