import React from "react";
import "../styles/App.css";

export const App = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div className="App">
      <h1>Movies App</h1>
    </div>
  );
};
