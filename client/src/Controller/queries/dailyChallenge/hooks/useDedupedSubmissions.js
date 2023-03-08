import { useRemoveDuplicatedSubmissions } from "./useRemoveDuplicates";

import { ShowPromisesData } from "../../../queries/QueriesTemplate";

export const useDeDupedRecentSubmissions = () => {
  const { recentSolution } = ShowPromisesData();

  const { submissions } = useRemoveDuplicatedSubmissions(
    recentSolution?.recentSubmissionList
  );

  const deDupedValues = [...submissions];

  return { deDupedValues };
};
