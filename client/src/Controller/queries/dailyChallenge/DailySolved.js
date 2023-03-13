import { useState, useEffect } from "react";

import { PostByDateData } from "../../../Controller/queries/QueriesTemplate";

import { PostQuantityData } from "../../../Controller/queries/QueriesTemplate";

export const RecentDailyQuestionData = () => {
  const [dataItem, setDataItem] = useState();

  const { dateData } = PostByDateData();

  useEffect(() => {
    dateData !== undefined && dateData.map((item) => setDataItem(item));
  }, [dateData]);

  const dailysQuestionRecord =
    dataItem && dataItem.dailyCodingChallengeV2.challenges;

  return { dailysQuestionRecord };
};

export const dailysRecordMatchedByTitle = () => {
  const { dailysQuestionRecord } = RecentDailyQuestionData();

  const { solutions } = PostQuantityData();

  let search =
    dailysQuestionRecord &&
    dailysQuestionRecord.reduce((acc, record) => {
      // retrieve objects from the dailysQuestionRecord array that match
      const matches =
        solutions !== undefined &&
        solutions.find(
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
