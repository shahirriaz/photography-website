import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/photography-5b191/us-central1/api",
  baseURL: "https://us-central1-photography-5b191.cloudfunctions.net/api",
  // "http://localhost:5001/photography-5b191/us-central1/api",
  // "http://localhost:3002"
});

export default instance;
