import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");

export const backendAPI = axios.create({
  baseURL: "http://localhost:5005",
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export const pokeAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

export const fetchCards = async () => {
  try {
    const response = await backendAPI.get("/api/cards");
    return response.data;
  } catch (error) {
    console.error("Error fetching cards", error);
    throw error;
  }
};
