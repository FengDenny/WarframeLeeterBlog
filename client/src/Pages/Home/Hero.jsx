import React from "react";
import HeroLayout from "../../components/layouts/section/SectionLayout";
import layoutStyles from "../../scss/Section/SectionLayout.module.scss";
import cardStyles from "../../scss/util/Card/Card.module.scss";
import Card from "../../components/util/Card/Card";
import { Link } from "react-router-dom";
import globalStyle from "../../scss/global/global.module.scss";
import { DailyQuestionRequest } from "../../View/queries/dailyChallenge/DailyChallenge";

import { lcWebURL } from "../../Controller/streak/endpoint";

import Banner from "../../components/util/Banner/Banner";

import { useRemoveDuplicatedSubmissions } from "../../View/queries/dailyChallenge/hooks/useRemoveDuplicates";
import { useGetRecentSubmission } from "../../View/queries/dailyChallenge/hooks/useGetRecentSubmission";

export default function Hero() {
  const { data } = DailyQuestionRequest();

  const { date, link, question } = data;

  const day = date && date.split("-").slice(-1);

  const RecentSubmissions = () => {
    const { data } = useGetRecentSubmission("warframeleeter");
    const { submissions } = useRemoveDuplicatedSubmissions(data);

    console.log(submissions);
  };

  RecentSubmissions();

  return (
    <HeroLayout
      style={layoutStyles.heroSection}
      title='Question of the Day'
      description={`Day ${day && day.toString()} of daily coding challenge`}
    >
      <Card styling={cardStyles.heroCard}>
        <Banner title={`Completed`} />
        <div className={cardStyles.cardContainer}>
          <div className={cardStyles.header}>
            <h2 className={cardStyles.heading}>
              {question && question.frontendQuestionId + ". " + question.title}
            </h2>
            <p className={cardStyles.date}>{date && date}</p>
          </div>
          <div className={cardStyles.links}>
            <ul className={cardStyles.lists}>
              <li>
                <a href={lcWebURL(link)} target='_blank' rel='noreferrer'>
                  Problem
                </a>
              </li>
              <li>
                <Link to='/'>Solution</Link>
              </li>
            </ul>
          </div>

          <div className={cardStyles.tag}>
            <div className={globalStyle.gridContainer2}>
              {question &&
                question.topicTags.map((tags) => (
                  <>
                    <div className={cardStyles.tags} key={tags.id}>
                      <h6>{tags.name}</h6>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </Card>
    </HeroLayout>
  );
}
