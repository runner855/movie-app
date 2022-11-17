import React, { useState,useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import getMovies from "../api/getMovies";

export const Popular = () => {

  const [movieSearchValue, setMovieSearchValue] = useState([])
  useEffect(() => {
    getMovies.get("/3/movie/popular") , {
      params: { query: movieSearchValue},
    }).then((res) => {
      console.log(res);
    })

    }
    
  }, []);
  return <div className="popular_page">Popular</div>;
};
