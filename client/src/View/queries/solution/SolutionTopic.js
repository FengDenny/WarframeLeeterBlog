import { useState, useEffect } from "react";
import { postEndpoint } from "../../../Controller/endpoint";
export const SolutionTopic = () => {
  const [username, _] = useState("warframeleeter");
  const [data, setData] = useState("");
  useEffect(() => {
    const data = { username };
    postEndpoint("solutionTopic", data).then((items) =>
      setData(items.data.userSolutionTopics.edges)
    );
  }, [username]);
  return { data };
};

export const showThreeRecentSolution = () => {
  const { data } = SolutionTopic();
  const threeRecentSolutions = data && data.map((item) => item).slice(0, 3);

  return { threeRecentSolutions };
};

export const threeRecentSolutionData = (checkTitle) => {
  const { threeRecentSolutions } = showThreeRecentSolution();
  const solutionsData =
    threeRecentSolutions &&
    threeRecentSolutions.map((item) => {
      const { title, url, viewCount, questionTitle, id } = item.node;
      const { voteCount } = item.node.post;

      return { title, url, viewCount, questionTitle, id, voteCount };
    });

  return { solutionsData };
};
