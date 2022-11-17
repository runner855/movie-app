import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: { Authorization: `Api_KEY ${process.env.REACT_APP_API_KEY}` },
});
