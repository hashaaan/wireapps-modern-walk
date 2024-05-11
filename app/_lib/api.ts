import ky from "ky";

export const api = ky.create({
  prefixUrl: process.env.NEXT_API_URL,
  timeout: 20000,
  retry: 0,
});
