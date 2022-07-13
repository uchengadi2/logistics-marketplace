import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:5000/api/v1", //for the localhost
  baseURL: "https://api.brightwayafrica.com/api/v1", // for production
});
