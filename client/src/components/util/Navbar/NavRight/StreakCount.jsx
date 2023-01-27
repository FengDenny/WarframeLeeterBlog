import React from "react";
import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";
import { FaFire } from "react-icons/fa";

export default function StreakCount() {
  return (
    <div className={navbarStyles.streakIcon}>
      <FaFire />
    </div>
  );
}
