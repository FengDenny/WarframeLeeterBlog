import React from "react";
import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";
import { FaSun } from "react-icons/fa";
import { useLightTheme } from "../../../../View/utils/Navbar/useLightTheme";

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
