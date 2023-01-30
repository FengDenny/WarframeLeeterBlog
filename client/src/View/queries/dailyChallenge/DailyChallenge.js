import { useState, useEffect } from "react";
import { getEndpoint } from "../../../Controller/streak/endpoint";
export const DailyQuestionRequest = () => {
  const [username, _] = useState("warframeleeter");
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    getEndpoint("dailyQuestion", data).then((items) =>
      setData(items.data.activeDailyCodingChallengeQuestion)
    );
  }, [username]);
  return { data };
};
