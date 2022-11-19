import React, { useEffect } from "react";
import MoviesCall from "../api/MoviesCall";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const params = useParams();

  useEffect(() => {
    MoviesCall.get("/params?api_key=63cce6cf085f07533c65787732f436aa");
  }, []);

  return (
    <div>
      <h1>MoviesContainer</h1>
    </div>
  );
};
