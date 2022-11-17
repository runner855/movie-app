import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { TopRated } from "../../.history/src/components/TopRated_20221116163606";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Upcoming />} />

        <Route path="/create-tasks" element={<TopRated />} />
        <Route
          path="/tasks-list"
          element={
            <TasksList
              tasks={tasks}
              setTasks={(array: TodosProps[]) => setTasks(array)}
            />
          }
        />
      </Routes>
    </div>
  );
};
