import axios from "axios";
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-type": "application/json"
  }
});
export const baseURL="https://jsonplaceholder.typicode.com/"