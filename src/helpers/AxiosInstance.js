import axios from "axios";

export const get = async (url) => {
  const res = await axios.get(url);
  return res;
};

export const post = async (url, payload, token) => {
  const res = await axios.post(url, payload, token);
  return res;
};
