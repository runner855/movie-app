import React from "react";
import Provider from "@reduxjs/toolkit";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";
import { App } from "./components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
       
      <Provider store={store}>
         
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
