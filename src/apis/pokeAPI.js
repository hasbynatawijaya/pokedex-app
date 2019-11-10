import axios from "axios";

export default axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  // params: {
  //   offset: 0,
  //   limit: 200
  // }
});
