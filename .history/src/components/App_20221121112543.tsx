import React, { useState, useEffect } from "react";
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
import { MoviesContainer } from "./MoviesContainer";
import { MovieProps } from "../types/ApiTypes";
import { MovieCard } from "./MovieCard";

export const App = () => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />
      <MoviesFilter
        value={value}
        setValue={(inputValue: string) => setValue(inputValue)}
      />
      //tasks={tasks}
      setTasks={(array: TodosProps[]) => setTasks(array)}
      <Routes>
        <Route path="/:page" element={<MoviesContainer />} />
        <Route path="/MovieCard/:id" element={<MovieCard />} />
      </Routes>
    </div>
  );
};
