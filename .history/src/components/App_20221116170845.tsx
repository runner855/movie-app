import React from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export const App = () => {
  return (
    <div className="App">
      <div className="title">Movies App</div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/create-tasks"
          element={
            <CreateTasks
              value={value}
              setValue={(text: string) => setValue(text)}
              tasks={tasks}
              setTasks={(array: TodosProps[]) => setTasks(array)}
            />
          }
        />
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
