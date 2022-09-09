import axios from "axios";

export const API = axios.create({
  baseURL: "https://taraus-nft-api.herokuapp.com/",
});
