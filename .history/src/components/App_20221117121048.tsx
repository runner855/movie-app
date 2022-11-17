import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { TopRated } from "../components/TopRated";
import { Upcoming } from "./Upcoming";
import { Popular } from "./Popular";
import { MoviesFilter } from "./MoviesFilter";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>

      <NavBar />
      <MoviesFilter />

      <Routes>
        <Route path="/" element={<Upcoming />} />

        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/popular" element={<Popular />} />
      </Routes>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
