import { POSTQueries } from "../../../View/queries/QueriesTemplate";

export const LanguageStats = () => {
  const { data } = POSTQueries("languageStats", "warframeleeter");

  const languageData =
    data.matchedUser && data.matchedUser.languageProblemCount;

  return { languageData };
};

export const ProblemSolved = () => {
  const { data } = POSTQueries("problemSolvedRating", "warframeLeeter");

  const allQsCount = data.allQuestionsCount && data.allQuestionsCount;

  const usersSolved =
    data.matchedUser && data.matchedUser.submitStatsGlobal.acSubmissionNum;

  return { allQsCount, usersSolved };
};

export const TopicStats = () => {
  const { data } = POSTQueries("skillStats", "warframeleeter");

  const advanceTopic =
    data.matchedUser && data.matchedUser.tagProblemCounts.advanced;
  const intermediateTopic =
    data.matchedUser && data.matchedUser.tagProblemCounts.intermediate;

  const fundamentalTopic =
    data.matchedUser && data.matchedUser.tagProblemCounts.fundamental;

  return { advanceTopic, intermediateTopic, fundamentalTopic };
};
