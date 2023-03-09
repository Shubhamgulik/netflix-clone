import axios from "axios";
import { requests } from "./requests";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// console.log(instance.get(requests.fetchNetflixOriginals));
export default instance;
