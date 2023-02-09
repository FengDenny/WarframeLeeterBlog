import { POSTQueries } from "../../../View/queries/QueriesTemplate";

export const showThreeRecentSolution = () => {
  const { data } = POSTQueries("solutionTopic", "warframeleeter");

  const threeRecentSolutions =
    data.userSolutionTopics &&
    data.userSolutionTopics.edges.map((item) => item).slice(0, 3);

  return { threeRecentSolutions };
};

export const threeRecentSolutionData = () => {
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
