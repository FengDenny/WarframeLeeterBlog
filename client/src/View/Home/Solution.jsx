import React, { Fragment } from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";
import layoutStyles from "../../scss/Section/SectionLayout.module.scss";

import Card from "../../components/util/Card/Card";
import cardStyles from "../../scss/util/Card/Card.module.scss";

import { useNavigate } from "react-router-dom";
import { threeRecentSolutionData } from "../../Controller/queries/solution/SolutionTopic";
import { lcWebURL } from "../../Controller/endpoint";

export default function Solution() {
  const navigate = useNavigate();

  const { solutionsData } = threeRecentSolutionData();

  const recentCardSolution = () => {
    const solution =
      solutionsData &&
      solutionsData.map((item) => {
        const { title, url, viewCount, questionTitle, id, voteCount } = item;

        return (
          <Card styling={cardStyles.solutionCard} key={id}>
            <div className={cardStyles.solutionCardContainer}>
              <div
                className={`${cardStyles.header} ${cardStyles.solutionHeader}`}
              >
                <h2 className={cardStyles.heading}>{questionTitle}</h2>
              </div>
              <ul className={`${cardStyles.lists} ${cardStyles.solutionLists}`}>
                <li>
                  <a href={lcWebURL(url)} target='_blank' rel='noreferrer'>
                    {title}
                  </a>
                </li>
              </ul>

              <div className={cardStyles.solutionCount}>
                <h4 className={cardStyles.voteHeading}>
                  <span>{voteCount} </span> vote count
                </h4>
                <h4 className={cardStyles.viewHeading}>
                  <span>{viewCount} </span> views
                </h4>
              </div>
            </div>
          </Card>
        );
      });
    return solution;
  };

  return (
    <SolutionLayout
      style={layoutStyles.solutionSection}
      layout
      title='LeetCode Solutions'
      innerHtmlDescription
      description={
        <Fragment>
          For all problems solved, each solution had been explained thoroughly,
          solved with
          <span className={layoutStyles.spanDescription}> Python</span> and
          showing their efficiency analysis.
        </Fragment>
      }
      button={
        <Fragment>
          <button
            className={layoutStyles.button}
            onClick={() => navigate("/solutions")}
          >
            Search Solution
          </button>
        </Fragment>
      }
    >
      {recentCardSolution()}
    </SolutionLayout>
  );
}
