import React from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";
import dailysStyles from "../../scss/Section/SectionLayout.module.scss";
import globalStyle from "../../scss/global/global.module.scss";
import { dailysRecordMatchedByTitle } from "../../View/queries/dailyChallenge/DailySolved";

import { lcWebURL } from "../../Controller/endpoint";
import Card from "../../components/util/Card/Card";
import cardStyles from "../../scss/util/Card/Card.module.scss";

export default function DailysSolved() {
  const { search } = dailysRecordMatchedByTitle();

  console.log(search);

  return (
    <SolutionLayout
      style={dailysStyles.dailysSolvedSection}
      title=' Daily Coding Challenges  Solved '
    >
      <div className={dailysStyles.cardContainer}>
        <div className={globalStyle.gridContainer3}>
          {search &&
            search
              .map((item) => {
                return (
                  item.matches.node && (
                    <Card
                      styling={dailysStyles.card}
                      key={item.matches.node.id}
                    >
                      <h2>{item.matches.node.questionTitle}</h2>
                      <p>{item.date}</p>
                      <ul className={cardStyles.lists}>
                        <li>
                          <a
                            href={lcWebURL(item.link)}
                            target='_blank'
                            rel='noreferrer'
                          >
                            Problem
                          </a>
                        </li>
                        <li>
                          <a
                            href={lcWebURL(item.matches.node.url)}
                            target='_blank'
                            rel='noreferrer'
                          >
                            Solution
                          </a>
                        </li>
                      </ul>
                    </Card>
                  )
                );
              })
              .reverse()
              .slice(0, 6)}
        </div>
      </div>
    </SolutionLayout>
  );
}
