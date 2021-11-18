import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTRiZTgwYWJkNDcwY2JmMjlmMWNlMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzIyNzQ0NiwiZXhwIjoxNjM3NDg2NjQ2fQ.Mbxr_M_v6pY7e1Xbz9F6gmOyR4IdH6B15pm5ID3whGA";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
