import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTg2ZTBlMjE1MzZiYzAxN2MzOGNkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTQ4MjU4OCwiZXhwIjoxNjU5NzQxNzg4fQ.ZZYW27N1pcP8QW_MuWyiAPdpKo_6P8SdU3jgM6D7FlU";

// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
// console.log(
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
// );


//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
//JSON.parse(JSON.parse(localStorage.getItem("persist:root")).currentUser).accessToken
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTg2ZTBlMjE1MzZiYzAxN2MzOGNkMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1OTQ4MjU4OCwiZXhwIjoxNjU5NzQxNzg4fQ.ZZYW27N1pcP8QW_MuWyiAPdpKo_6P8SdU3jgM6D7FlU";


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});