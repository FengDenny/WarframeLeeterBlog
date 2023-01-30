import { useState, useEffect } from "react";
import { postEndpoint } from "../../../../Controller/streak/endpoint";

export const useGetRecentSubmission = (userID) => {
  const [username, _] = useState(userID);
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    postEndpoint("recentSolutions", data).then((items) =>
      setData(items.data.recentSubmissionList)
    );
  }, [username]);

  return { data };
};
