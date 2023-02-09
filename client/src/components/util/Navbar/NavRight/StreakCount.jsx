import React from "react";
import navbarStyles from "../../../../scss/util/Navbar/navbar.module.scss";
import { FaFire } from "react-icons/fa";

import { POSTQueries } from "../../../../View/queries/QueriesTemplate";

export default function StreakCount() {
  const { data } = POSTQueries("userProfileCalendar", "warframeleeter");

  return (
    <>
      <div className={navbarStyles.streakIcon}>
        <FaFire />
        <span className={navbarStyles.streakData}>
          {data && data.matchedUser.userCalendar.streak}
        </span>
      </div>
    </>
  );
}
