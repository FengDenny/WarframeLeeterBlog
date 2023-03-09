import React, { Fragment } from "react";

import achievedStyles from "../../scss/Section/SectionLayout.module.scss";

import SwitchButton from "../../components/util/Button/SwitchBtn";

import globalStyle from "../../scss/global/global.module.scss";

import ActiveBtn from "../../Controller/utils/Active";

import { badgesData } from "../../Controller/queries/badges/Badges";

import { GroupByName } from "../../Controller/utils/helper/GroupByName";

import Card from "../../components/util/Card/Card";

import { lcWebURL } from "../../Controller/endpoint";

export default function Achievements() {
  const { active, handleActiveClicked } = ActiveBtn();

  const { badges, upcoming } = badgesData();

  const badgesGrouped = GroupByName(badges);

  console.log(upcoming);

  return (
    <section className={achievedStyles.achievementsContainer}>
      <div className={achievedStyles.hero}>
        <h2>WarframeLeeter's Achievements' Showcase</h2>
        <h4>
          All my dailys, explore, annual, and contest badges will be shown here
        </h4>
      </div>
      <div className={achievedStyles.bottomBorder} />
      <div className={achievedStyles.content}>
        <div className={globalStyle.container}>
          <div className={achievedStyles.contentBtn}>
            <SwitchButton
              active={active}
              handleActiveClicked={handleActiveClicked}
            />
          </div>

          <div className={`${achievedStyles.contentItem} `}>
            <div
              className={`${
                active === 1
                  ? globalStyle.switchGridStyling
                  : globalStyle.switchFlexStyling
              }`}
            >
              {upcoming !== undefined &&
                upcoming.map((items) => {
                  const { name, icon } = items;

                  return (
                    <div key={name}>
                      <h2>Upcoming</h2>
                      <div
                        className={
                          active === 2 ? globalStyle.displayFlexRow : null
                        }
                      >
                        <Card styling={achievedStyles.card} key={name}>
                          <h4>{name}</h4>

                          <img src={lcWebURL(icon)} alt={name} />
                        </Card>
                      </div>
                    </div>
                  );
                })}

              {badgesGrouped.map((items) => {
                const { name, icon } = items;
                return (
                  <Fragment key={name}>
                    <div>
                      <h2>{name}</h2>
                      <div
                        className={
                          active === 2 ? globalStyle.displayFlexRow : null
                        }
                      >
                        {icon.map((badges) => {
                          const { displayName, icon, id } = badges;
                          return (
                            <Card styling={achievedStyles.card} key={id}>
                              <h4>{displayName}</h4>
                              {name === "Daily Coding Challenge" ? (
                                <img src={lcWebURL(icon)} alt={displayName} />
                              ) : (
                                <img src={icon} alt={displayName} />
                              )}
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
