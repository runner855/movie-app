import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";
import getMovies from "../api/getMovies";
import { couldStartTrivia } from "typescript";

export const Popular = () => {
  const [movies, setMovies] = useState([]);


  useEffect() => {
    
    getMovies.get("/search/photos", {
      params: { query: searchBarValue },
    }).then((res) => {
      setImages(res.data.results);
    });
  };
  return <div className="popular_page">Popular</div>;
};
