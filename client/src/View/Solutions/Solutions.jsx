import React, { useState } from "react";

import { lcWebURL } from "../../Controller/endpoint";

import solutionStyles from "../../scss/Section/SectionLayout.module.scss";

import globalStyle from "../../scss/global/global.module.scss";

import Card from "../../components/util/Card/Card";
import Searchbar from "../../components/util/Searchbar/Searchbar";

import MergeSolutionJSON from "../../Controller/queries/solution/MergeSolutionJSON";

import { MergeJSON } from "../../Controller/utils/helper/MergeJSON";

import SkillTags from "../../Controller/queries/statistics/SkillTags";

import FilterData from "../../Controller/utils/helper/FilterData";
import { useSelector } from "react-redux";

export default function Search() {
  const { advanced, fundamental, intermediate } = SkillTags();

  const { solution, qDetails } = MergeSolutionJSON();

  const [searchTitle, setSearchTitle] = useState("");
  const { mergedArr } = MergeJSON(solution, qDetails);
  const [tags, setTags] = useState("All");

  const { SearchTitleData } = useSelector((state) => ({ ...state }));

  return (
    <section className={`${solutionStyles.cardContainer}`}>
      <div className={solutionStyles.solutionHero}>
        <div className={globalStyle.container}>
          <div className={solutionStyles.heroContainer}>
            <div className={solutionStyles.heroDescription}>
              <h3>Looking for a solution?</h3>
              <span>Find your solution by searching the title</span>
            </div>
            <Searchbar
              style={solutionStyles.solutionSearchBar}
              btnStyle={solutionStyles.btnContainer}
              setSearchTitle={setSearchTitle}
              searchTitle={searchTitle}
            />
          </div>
        </div>
      </div>

      <div className={solutionStyles.layoutContainer}>
        <div>
          <aside className={solutionStyles.tagsFilters}>
            <h2 className={solutionStyles.tagTitle}>Filter by tags</h2>
            <div className={solutionStyles.tagsFilterContainer}>
              <button onClick={() => setTags("All")}>
                <span>All</span>
              </button>
            </div>
          </aside>
          <aside className={solutionStyles.tagsFilters}>
            <h2 className={solutionStyles.tagTitle}>Advanced</h2>

            <div className={solutionStyles.tagsFilterContainer}>
              {advanced &&
                advanced.map((tags) => (
                  <button
                    onClick={() => setTags(tags.tagName)}
                    key={JSON.stringify(tags.tagName)}
                  >
                    <span>{tags.tagName}</span>
                  </button>
                ))}
            </div>
          </aside>
          <aside className={solutionStyles.tagsFilters}>
            <h2 className={solutionStyles.tagTitle}>Fundamental</h2>
            <div className={solutionStyles.tagsFilterContainer}>
              {fundamental &&
                fundamental.map((tags) => (
                  <button
                    onClick={() => setTags(tags.tagName)}
                    key={JSON.stringify(tags.tagName)}
                  >
                    <span>{tags.tagName}</span>
                  </button>
                ))}
            </div>
          </aside>
          <aside className={solutionStyles.tagsFilters}>
            <h2 className={solutionStyles.tagTitle}>Intermediate</h2>
            <div className={solutionStyles.tagsFilterContainer}>
              {intermediate &&
                intermediate.map((tags) => (
                  <button
                    onClick={() => setTags(tags.tagName)}
                    key={JSON.stringify(tags.tagName)}
                  >
                    <span>{tags.tagName}</span>
                  </button>
                ))}
            </div>
          </aside>
        </div>
        <div>
          {SearchTitleData.title
            ? FilterData(mergedArr, SearchTitleData.title).map((items) => {
                const {
                  questionTitle,
                  url,
                  post,
                  title,
                  topicTags,
                  id,
                  viewCount,
                } = items;

                const { voteCount } = post;

                return (
                  <Card
                    styling={`${solutionStyles.solutionsContainer} ${globalStyle.container}`}
                    key={id}
                  >
                    <div className={solutionStyles.details}>
                      <h2>{questionTitle}</h2>
                      <a href={lcWebURL(url)} rel='noreferrer' target='_blank'>
                        {title}
                      </a>
                    </div>
                    <div className={solutionStyles.tags}>
                      {topicTags &&
                        topicTags.map((tags) => (
                          <span key={JSON.stringify(tags.name)}>
                            {tags.name}
                          </span>
                        ))}
                    </div>

                    <div className={solutionStyles.status}>
                      {voteCount > 1 ? (
                        <h4>
                          <span>{voteCount}</span>
                          votes
                        </h4>
                      ) : (
                        <h4>
                          <span>{voteCount}</span> vote
                        </h4>
                      )}

                      {viewCount > 1 ? (
                        <h4>
                          <span>{viewCount}</span> views
                        </h4>
                      ) : (
                        <h4>
                          <span>{viewCount}</span> view
                        </h4>
                      )}
                    </div>
                  </Card>
                );
              })
            : FilterData(mergedArr, tags).map((items) => {
                const {
                  questionTitle,
                  url,
                  post,
                  title,
                  topicTags,
                  id,
                  viewCount,
                } = items;

                const { voteCount } = post;

                return (
                  <Card
                    styling={`${solutionStyles.solutionsContainer} ${globalStyle.container}`}
                    key={id}
                  >
                    <div className={solutionStyles.details}>
                      <h2>{questionTitle}</h2>
                      <a href={lcWebURL(url)} rel='noreferrer' target='_blank'>
                        {title}
                      </a>
                    </div>
                    <div className={solutionStyles.tags}>
                      {topicTags &&
                        topicTags.map((tags) => (
                          <span key={JSON.stringify(tags.name)}>
                            {tags.name}
                          </span>
                        ))}
                    </div>

                    <div className={solutionStyles.status}>
                      {voteCount > 1 ? (
                        <h4>
                          <span>{voteCount}</span> votes
                        </h4>
                      ) : (
                        <h4>
                          <span>{voteCount}</span> vote
                        </h4>
                      )}

                      {viewCount > 1 ? (
                        <h4>
                          <span>{viewCount}</span> views
                        </h4>
                      ) : (
                        <h4>
                          <span>{viewCount}</span> view
                        </h4>
                      )}
                    </div>
                  </Card>
                );
              })}
        </div>
      </div>
    </section>
  );
}
