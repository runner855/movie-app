import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: { Authorization: `Api-KEY ${process.env.REACT_APP_API_KEY}` },
});
