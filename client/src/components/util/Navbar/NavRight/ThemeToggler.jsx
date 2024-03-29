import React from "react";
import navbarStyles from "../../../../scss/util/Navbar/navbar.module.scss";
import { FaSun } from "react-icons/fa";
import { useLightTheme } from "../../../../Controller/utils/Navbar/useLightTheme";

export default function ThemeToggler() {
  const { toggleLightMode } = useLightTheme();

  return (
    <button
      className={navbarStyles.themeSwitcherIcon}
      onClick={toggleLightMode}
    >
      <FaSun />
    </button>
  );
}
