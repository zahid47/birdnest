import axios from "axios";

export const instance = axios.create({
  baseURL: "https://assignments.reaktor.com/birdnest",
});

export default instance;
