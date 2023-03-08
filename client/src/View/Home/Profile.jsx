import React from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";

import profileStyles from "../../scss/Section/SectionLayout.module.scss";

import { yearEndpoints } from "../../Controller/queries/profile/userProfile";
import { FaFire, FaRegSadCry } from "react-icons/fa";

import { lcWebURL } from "../../Controller/endpoint";

import {
  AnimateOnScrollObserver,
  AnimateSpanOnScrollObserver,
} from "../../components/animations/AnimateOnScroll";

export default function Profile() {
  const YearlyEndpoints = yearEndpoints();

  return (
    <SolutionLayout
      style={profileStyles.profileSection}
      title={"LeetCode Journey Profile"}
      description={
        "My never ending journey to succeed in data structure and algorithm world"
      }
    >
      <div className={profileStyles.timeline}>
        <ul>
          {YearlyEndpoints &&
            YearlyEndpoints.map((items, i) => {
              return (
                items.dateData !== undefined &&
                items.dateData.map((items) => {
                  const { year, streak, totalActiveDays, dccBadges } =
                    items !== undefined && items.matchedUser.userCalendar;
                  return (
                    <AnimateOnScrollObserver
                      style={profileStyles.inView}
                      key={i}
                    >
                      <div>
                        <time>{year}</time>
                        <p>
                          Yearly streak:
                          <span>
                            <FaFire />
                            {streak}
                          </span>
                        </p>
                        <p>
                          Total active days:
                          <span>{totalActiveDays}</span>
                        </p>
                        {dccBadges && dccBadges.length === 0 ? (
                          <p className={profileStyles.badgesEarned}>
                            No monthly badge earned
                            <span>
                              <FaRegSadCry />
                            </span>
                          </p>
                        ) : (
                          <>
                            <p className={profileStyles.badgesEarned}>
                              Monthly badge earned
                            </p>
                            <AnimateSpanOnScrollObserver
                              style={`${profileStyles.spanBadge} ${profileStyles.badge}`}
                              notVisible={profileStyles.notVisible}
                            >
                              {dccBadges &&
                                dccBadges.map((items, index) => (
                                  <img
                                    key={index}
                                    className={profileStyles.badges}
                                    src={lcWebURL(items.badge.icon)}
                                    alt={items.name}
                                  />
                                ))}
                            </AnimateSpanOnScrollObserver>
                          </>
                        )}
                      </div>
                    </AnimateOnScrollObserver>
                  );
                })
              );
            })}
        </ul>
      </div>
    </SolutionLayout>
  );
}
