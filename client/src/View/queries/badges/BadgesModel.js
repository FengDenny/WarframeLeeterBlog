import { useState, useEffect } from "react";
import { allBadges } from "../../../Controllers/badges/badgesController";
export const HandleAllBadgesRequest = () => {
  const [username, _] = useState("warframeleeter");
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    allBadges(data).then((items) => setData(items.data.matchedUser));
  }, [username]);
  return { data };
};
