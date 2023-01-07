import axios from "axios";

export const birdnestInstance = axios.create({
  baseURL: "https://assignments.reaktor.com/birdnest",
});

export const serverInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
