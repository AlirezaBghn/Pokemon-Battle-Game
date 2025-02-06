import axios from "axios";

export const backendAPI = axios.create({
  baseURL: "http://localhost:3000",
});

export const pokeAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
