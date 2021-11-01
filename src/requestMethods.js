import axios from "axios";

const BASE_URL = "http://localhost:8080";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc4ZmNlZDUwMTZlNzgxYTJiYTM0NDAiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MzU2NzE4NTAsImV4cCI6MTYzNTc1ODI1MH0.DPKGE4WgR5VHYXjev3MBHfyEicDENL-vvZ1Ms02o8ys";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
