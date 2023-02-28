import React, { useRef } from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";

import profileStyles from "../../scss/Section/SectionLayout.module.scss";

import { yearEndpoints } from "../../View/queries/profile/userProfile";
import { FaFire, FaRegSadCry } from "react-icons/fa";

import { lcWebURL } from "../../Controller/endpoint";

import { AnimateOnScroll } from "../../components/animations/AnimateOnScroll";

export default function Profile() {
  const YearlyEndpoints = yearEndpoints();

  const ref = useRef(null);

  const items = ref.current && ref.current.querySelectorAll("li");

  AnimateOnScroll(items, profileStyles.inView);

  return (
    <SolutionLayout
      style={profileStyles.profileSection}
      title={"LeetCode Journey Profile"}
      description={
        "My never ending journey to succeed in data structure and algorithm world"
      }
    >
      <div className={profileStyles.timeline} ref={ref}>
        <ul>
          {YearlyEndpoints &&
            YearlyEndpoints.map((items, i) => {
              const { year, streak, totalActiveDays, dccBadges } =
                items.yearlyData && items.yearlyData.matchedUser.userCalendar;

              return (
                <li key={i}>
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
                        No badge earned
                        <span>
                          <FaRegSadCry />
                        </span>
                      </p>
                    ) : (
                      dccBadges &&
                      dccBadges.map((items, index) => (
                        <p className={profileStyles.badgesEarned} key={index}>
                          {items.badge.name} badge earned
                          <img
                            src={lcWebURL(items.badge.icon)}
                            alt={items.name}
                          />
                        </p>
                      ))
                    )}
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </SolutionLayout>
  );
}
