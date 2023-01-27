import React from "react";
import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";
import { FaFire } from "react-icons/fa";
import { PublicProfile } from "../../../../View/utils/Navbar/profile/PublicProfile";

export default function StreakCount() {
  const { data } = PublicProfile();

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
