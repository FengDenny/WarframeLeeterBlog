import React, { Fragment } from "react";
import statsStyles from "../../../scss/Section/SectionLayout.module.scss";
import Card from "../../../components/util/Card/Card";
import {
  LanguageStats,
  ProblemSolved,
  TopicStats,
} from "../../../View/queries/statistics/Statistics";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export const AllProblemsSolved = () => {
  const { allQsCount, usersSolved } = ProblemSolved();
  return (
    <Card styling={statsStyles.allProblemsContainer}>
      <div className={statsStyles.problemsTitle}>
        <h2>Difficulty</h2>
        <h2>Solved</h2>
        <h2>Total</h2>
      </div>
      <div className={statsStyles.problemsHeader}>
        <div className={statsStyles.problemsHeading}>
          {allQsCount &&
            allQsCount.map((items) => {
              return (
                <div key={items.difficulty}>
                  <h4 className={statsStyles.difficultyHeaderFour}>
                    {items.difficulty}
                  </h4>
                  <div className={statsStyles.totalContainer}>
                    <h4 className={statsStyles.totalHeaderFour}>
                      {items.count}
                    </h4>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className={statsStyles.countHeader}>
        <div className={statsStyles.countHeading}>
          {usersSolved &&
            usersSolved.map((items) => {
              return (
                <div key={items.count}>
                  <h4 className={statsStyles.countHeaderFour}>{items.count}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </Card>
  );
};

export const languageStats = () => {
  const { languageData } = LanguageStats();

  return (
    <Card styling={statsStyles.langCardContainer}>
      <div className={statsStyles.langInnerContainer}>
        <div className={statsStyles.langTitle}>
          <h2>Languages</h2>
          <h2>Solved</h2>
        </div>
        <div className={statsStyles.langHeader}>
          <div className={statsStyles.langHeading}>
            {languageData &&
              languageData.map((items) => {
                return (
                  <div key={items.languageName}>
                    {items.languageName === "JavaScript" ? (
                      <Fragment>
                        <h4 className={statsStyles.langHeaderFour}>
                          <span className={statsStyles.langJS}>
                            <SiJavascript />
                          </span>
                          {items.languageName}
                        </h4>
                        <div className={statsStyles.solvedJSContainer}>
                          <p className={statsStyles.solvedJS}>
                            {items.problemsSolved}
                          </p>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <h4 className={statsStyles.langHeaderFour}>
                          <span className={statsStyles.langPY}>
                            <FaPython />
                          </span>
                          {items.languageName}
                        </h4>
                        <div className={statsStyles.solvedPYContainer}>
                          <p className={statsStyles.solvedPY}>
                            {items.problemsSolved}
                          </p>
                        </div>
                      </Fragment>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export const topicStats = () => {
  const { advanceTopic, intermediateTopic, fundamentalTopic } = TopicStats();
  return (
    <Fragment>
      <Card styling={statsStyles.advancedTopicContainer}>
        <div className={statsStyles.topicTitle}>
          <h2>Advanced Topic</h2>
          <h2>Solved</h2>
        </div>
        <div className={statsStyles.advancedHeaders}>
          {advanceTopic &&
            advanceTopic
              .map((items) => {
                return (
                  <div key={items.tagSlug}>
                    <Fragment>
                      <h4 className={statsStyles.advancedHeaderFour}>
                        {items.tagName}
                      </h4>
                      <div className={statsStyles.advancedSolved}>
                        <p>{items.problemsSolved}</p>
                      </div>
                    </Fragment>
                  </div>
                );
              })
              .slice(0, 6)}
        </div>
      </Card>
      <Card styling={statsStyles.intermediateTopicContainer}>
        <div className={statsStyles.topicTitle}>
          <h2>Intermediate Topic</h2>
          <h2>Solved</h2>
        </div>

        <div className={statsStyles.intermediateHeaders}>
          {intermediateTopic &&
            intermediateTopic
              .map((items) => {
                return (
                  <div key={items.tagSlug}>
                    <Fragment>
                      <h4 className={statsStyles.intermediateHeaderFour}>
                        {items.tagName}
                      </h4>
                      <div className={statsStyles.intermediateSolved}>
                        <p>{items.problemsSolved}</p>
                      </div>
                    </Fragment>
                  </div>
                );
              })
              .slice(0, 6)}
        </div>
      </Card>
      <Card styling={statsStyles.fundamentalTopicContainer}>
        <div className={statsStyles.topicTitle}>
          <h2>Fundamental Topic</h2>
          <h2>Solved</h2>
        </div>
        <div className={statsStyles.fundamentalHeaders}>
          {fundamentalTopic &&
            fundamentalTopic
              .map((items) => {
                return (
                  <div key={items.tagSlug}>
                    <Fragment>
                      <h4 className={statsStyles.fundamentalHeaderFour}>
                        {items.tagName}
                      </h4>
                      <div className={statsStyles.fundamentalSolved}>
                        <p>{items.problemsSolved}</p>
                      </div>
                    </Fragment>
                  </div>
                );
              })
              .slice(0, 6)}
        </div>
      </Card>
    </Fragment>
  );
};
