import { DailyQuestionRecords } from "../../../View/queries/dailyChallenge/DailyChallenge";

import { SolutionTopic } from "../../../View/queries/solution/SolutionTopic";

export const solutionTopicData = () => {
  const { data } = SolutionTopic();
  const solutionTopic = data && data.slice(0, 4).map((item) => item);

  return { solutionTopic };
};

export const recentDailyQuestionData = () => {
  const { data } = DailyQuestionRecords();
  const dailysQuestionRecord = data && data.map((item) => item);

  return { dailysQuestionRecord };
};

export const dailysRecordMatchedByTitle = () => {
  const { dailysQuestionRecord } = recentDailyQuestionData();
  const { solutionTopic } = solutionTopicData();

  let search =
    dailysQuestionRecord &&
    dailysQuestionRecord.reduce((acc, record) => {
      // retrieve objects from the dailysQuestionRecord array that match
      const matches =
        solutionTopic &&
        solutionTopic.find(
          (item) =>
            item.node && item.node.questionTitle === record.question.title
        );

      if (matches) {
        // if matches were found concat the returned array with the accumulator
        acc = acc.concat({ matches, link: record.link, date: record.date });
      }

      // return the accumulator to be used in the next iteration
      return acc;
    }, []);

  return { search };
};
