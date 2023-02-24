import React from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";

import profileStyles from "../../scss/Section/SectionLayout.module.scss";

import { yearEndpoints } from "../../View/queries/profile/userProfile";
import { FaFire, FaRegSadCry } from "react-icons/fa";

import { lcWebURL } from "../../Controller/endpoint";

export default function Profile() {
  const YearlyEndpoints = yearEndpoints();
  console.log(YearlyEndpoints);
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
            YearlyEndpoints.map((items, index) => {
              const { year, streak, totalActiveDays, dccBadges } =
                items.yearlyData && items.yearlyData.matchedUser.userCalendar;

              return (
                <li key={index}>
                  <div>
                    <time>{year}</time>
                    <p>
                      Yearly streak:
                      <span>
                        {" "}
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
                      dccBadges.map((items) => (
                        <p className={profileStyles.badgesEarned}>
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
