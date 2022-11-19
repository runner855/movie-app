import React, { useEffect } from "react";
import MoviesCall from "../api/MoviesCall";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const params = useParams();
  console.log("first", params);

  useEffect(() => {
    console.log("second", params);
    MoviesCall.get(`params?api_key=${process.env.REACT_APP_API_KEY}`, {}).then(
      (res) => {
        console.log(res.data.results);
      }
    );
  }, []);

  return (
    <div>
      <h1>MoviesContainer</h1>
    </div>
  );
};
