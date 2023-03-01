import React, { useState } from "react";
import SolutionLayout from "../../components/layouts/section/SectionLayout";

import profileStyles from "../../scss/Section/SectionLayout.module.scss";

import { yearEndpoints } from "../../View/queries/profile/userProfile";
import { FaFire, FaRegSadCry } from "react-icons/fa";

import { lcWebURL } from "../../Controller/endpoint";

import { AnimateOnScrollObserver } from "../../components/animations/AnimateOnScroll";

export default function Profile() {
  const YearlyEndpoints = yearEndpoints();
  const [visible, setVisible] = useState();

  // console.log(YearlyEndpoints);

  // const ref = useRef(null);

  // const items = ref.current && ref.current.querySelectorAll("li");

  // AnimateOnScroll(items, profileStyles.inView);

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
              const { year, streak, totalActiveDays, dccBadges } =
                items.yearlyData && items.yearlyData.matchedUser.userCalendar;

              return (
                <AnimateOnScrollObserver style={profileStyles.inView} key={i}>
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
                      <>
                        <p className={profileStyles.badgesEarned}>
                          badge earned
                        </p>
                        <span className={profileStyles.spanBadge}>
                          {dccBadges &&
                            dccBadges.map((items, index) => (
                              <img
                                key={index}
                                className={profileStyles.badges}
                                src={lcWebURL(items.badge.icon)}
                                alt={items.name}
                              />
                            ))}
                        </span>
                      </>
                    )}
                  </div>
                </AnimateOnScrollObserver>
              );
            })}
        </ul>
      </div>
    </SolutionLayout>
  );
}
