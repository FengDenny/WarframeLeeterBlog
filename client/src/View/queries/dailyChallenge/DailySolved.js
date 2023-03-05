import {
  postDailySolvedResource,
  postDailyRecordsResource,
} from "../../../View/queries/QueriesTemplate";

export const solutionTopicData = () => {
  const { data } = postDailySolvedResource.post.read();

  const solutionTopic =
    data.userSolutionTopics && data.userSolutionTopics.edges;

  return { solutionTopic };
};

export const recentDailyQuestionData = () => {
  const { data } = postDailyRecordsResource.post.read();

  const dailysQuestionRecord = data && data.dailyCodingChallengeV2.challenges;

  return { dailysQuestionRecord };
};

export const dailysRecordMatchedByTitle = () => {
  const { dailysQuestionRecord } = recentDailyQuestionData();

  console.log(dailysQuestionRecord);

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
