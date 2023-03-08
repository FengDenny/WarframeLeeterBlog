import React from "react";
import navbarStyles from "../../../../scss/util/Navbar/navbar.module.scss";
import { FaFire } from "react-icons/fa";

import { ShowPromisesData } from "../../../../Controller/queries/QueriesTemplate";

export default function StreakCount() {
  const { userCalendar } = ShowPromisesData();
  return (
    <>
      <div className={navbarStyles.streakIcon}>
        <FaFire />
        <span className={navbarStyles.streakData}>
          {userCalendar !== undefined &&
            userCalendar.matchedUser.userCalendar.streak}
        </span>
      </div>
    </>
  );
}
