import { useState, useEffect } from "react";
import { getEndpoint, postEndpoint } from "../../../Controller/endpoint";
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

export const DailyQuestionRecords = () => {
  const [JSONData, _] = useState({
    year: 2023,
    month: 2,
  });

  const { year, month } = JSONData;

  const [data, setData] = useState("");
  useEffect(() => {
    const data = { year, month };
    postEndpoint("dailyQuestionRecords", data).then((items) =>
      setData(items.data.dailyCodingChallengeV2.challenges)
    );
  }, [JSONData]);
  return { data };
};
