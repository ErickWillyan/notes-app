import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.3.10:3000",
  // Mude para o localhost do seu PC
});

export { api };
