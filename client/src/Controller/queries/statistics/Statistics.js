import { ShowPromisesData } from "../../../Controller/queries/QueriesTemplate";
export const LanguageStats = () => {
  // const { data } = PostData();

  const { language } = ShowPromisesData();

  const languageData =
    language !== undefined && language.matchedUser.languageProblemCount;

  return { languageData };
};

export const ProblemSolved = () => {
  const { solvedRating } = ShowPromisesData();

  const allQsCount =
    solvedRating !== undefined && solvedRating.allQuestionsCount;

  const usersSolved =
    solvedRating !== undefined &&
    solvedRating.matchedUser.submitStatsGlobal.acSubmissionNum;

  return { allQsCount, usersSolved };
};

export const TopicStats = () => {
  const { skillsRating } = ShowPromisesData();

  const advanceTopic =
    skillsRating !== undefined &&
    skillsRating.matchedUser.tagProblemCounts.advanced;
  const intermediateTopic =
    skillsRating !== undefined &&
    skillsRating.matchedUser.tagProblemCounts.intermediate;

  const fundamentalTopic =
    skillsRating !== undefined &&
    skillsRating.matchedUser.tagProblemCounts.fundamental;

  return { advanceTopic, intermediateTopic, fundamentalTopic };
};
