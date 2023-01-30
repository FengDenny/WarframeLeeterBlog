import axios from "axios";

export const postEndpoint = async (url, data) => {
  return await axios.post(`https://warframeleeter.onrender.com/${url}`, data);
};
export const getEndpoint = async (url, data) => {
  return await axios.get(`https://warframeleeter.onrender.com/${url}`, data);
};

export const lcWebURL = (link) => `https://leetcode.com${link}`;
