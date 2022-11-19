import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const MoviesContainer = () => {
  const params = useParams();

  useEffect(() => {}, []);

  return (
    <div>
      <h1>MoviesContainer</h1>
    </div>
  );
};
