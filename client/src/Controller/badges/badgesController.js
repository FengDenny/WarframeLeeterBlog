import axios from "axios";

export const allBadgesController = async (data) =>
  await axios.post("https://warframeleeter.onrender.com/badges", data);
