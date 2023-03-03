import { useState, useEffect } from "react";
import { postEndpoint } from "../../../Controller/endpoint";

export const DailyQuestionRecords = () => {
  const [JSONData, _] = useState({
    year: 2023,
    month: 3,
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
