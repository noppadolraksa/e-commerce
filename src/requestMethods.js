import axios from "axios";

const BASE_URL = "http://localhost:8080/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc4ZmNlZDUwMTZlNzgxYTJiYTM0NDAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzYxMDUyMzAsImV4cCI6MTYzNjE5MTYzMH0.e9ig-7u0x176TzQXpTUuW0wa9sDEAnAP2PEzl0zuHfw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
