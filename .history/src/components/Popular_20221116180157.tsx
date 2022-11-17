import React, { useEffect } from "react";
import axios from "axios";
import "../styles/Popular.css";

export const Popular = () => {
  useEffect((e: React.EffectCallback) => {
    e.preventDefault();
  }, []);
  return <div className="popular_page">Popular</div>;
};
