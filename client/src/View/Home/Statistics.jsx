import React from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";
import statsStyles from "../../scss/Section/SectionLayout.module.scss";

import {
  AllProblemsSolved,
  languageStats,
  topicStats,
} from "../../Controller/queries/statistics/StatsView";

export default function Statistics() {
  return (
    <SolutionLayout
      style={statsStyles.statsSection}
      title={" WarframeLeeter Statistics"}
      description={
        "My real time statistic data based on past and future problems"
      }
    >
      <div className={statsStyles.cardContainer}>
        {languageStats()}
        {AllProblemsSolved()}
      </div>
      <div className={statsStyles.cardContainer}>{topicStats()}</div>
    </SolutionLayout>
  );
}
