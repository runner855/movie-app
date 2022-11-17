import * as React from "react";
import { useParams } from "react-router-dom";

export const Upcoming = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      <h1>Upcoming</h1>
    </div>
  );
};
