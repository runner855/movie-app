import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: { Authorization: `api_key ${process.env.REACT_APP_API_KEY}` },
});
