import React from "react";
import "../styles/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { MoviesFilter } from "./MoviesFilter";
import { Three } from "./Three";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>

      <NavBar />
      <MoviesFilter />

      <Routes>
        <Route path="/" element={<One />} />

        <Route path="/two/:movie" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </div>
  );
};

const One = () => {
  const { movie } = useParams();
  console.log(movie);
  let pass = "hello";
  return (
    <div>
      <Link to={"/two/:movie" + pass}>Click me to pass "pass"</Link>
    </div>
  );
};

const Two = () => {
  const { movie } = useParams();
  console.log(movie);
  return (
    <div>
      <h2>The data is: {movie}</h2>
    </div>
  );
};
