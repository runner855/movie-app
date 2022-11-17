import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: { Authorization: `Client_ID ${process.env.REACT_APP_CLIENT_ID}` },
});
