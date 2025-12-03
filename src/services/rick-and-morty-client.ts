import axios from "axios";

export const rickAndMortyClient = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
  headers: {
    "Content-Type": "application/json",
  }
})