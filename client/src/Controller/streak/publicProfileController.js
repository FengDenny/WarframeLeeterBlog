import axios from "axios";

export const publicProfileController = async (data) =>
  await axios.post(
    "https://warframeleeter.onrender.com/userProfileCalendar",
    data
  );
