import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api/v1",//for the localhost
  baseURL: "http://34.195.85.38/api/v1", // for production
});
