import { ShowPromisesData } from "../../../Controller/queries/QueriesTemplate";

const ShowThreeRecentSolution = () => {
  const { solutions } = ShowPromisesData();

  const threeRecentSolutions =
    solutions !== undefined && solutions.map((item) => item).slice(0, 3);

  return { threeRecentSolutions };
};

export const threeRecentSolutionData = () => {
  const { threeRecentSolutions } = ShowThreeRecentSolution();
  const solutionsData =
    threeRecentSolutions &&
    threeRecentSolutions.map((item) => {
      const { title, url, viewCount, questionTitle, id } = item.node;
      const { voteCount } = item.node.post;

      return { title, url, viewCount, questionTitle, id, voteCount };
    });

  return { solutionsData };
};
