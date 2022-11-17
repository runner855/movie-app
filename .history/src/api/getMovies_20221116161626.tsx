import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers:any: { Authorization: `Api-KEY ${process.env.REACT_APP_API - KEY}` },
});
