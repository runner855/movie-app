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
import { One } from "./One";
import { Two } from "./Two";
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

const First = () => {
  let pass = "hello";
  return (
    <div>
      <Link to={"/two/" + pass}>Click me to pass "pass"</Link>
    </div>
  );
};

const Second = () => {
  const { movie } = useParams();
  return (
    <div>
      <h2>The data is: {movie}</h2>
    </div>
  );
};
