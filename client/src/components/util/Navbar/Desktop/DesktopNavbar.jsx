import React from "react";
import navbarStyles from "../../../../scss/Navbar/navbar.module.scss";
import globalStyles from "../../../../scss/global/global.module.scss";
import NavLinks from "../NavLeft/NavLinks";
import NavLogo from "../NavLeft/NavLogo";
import Searchbar from "../NavRight/Searchbar";
import ThemeToggler from "../NavRight/ThemeToggler";
import StreakCount from "../NavRight/StreakCount";

export default function DesktopNavbar() {
  return (
    <div
      className={`${globalStyles.container} ${globalStyles.dFlexRow} ${globalStyles.spaceBetween} ${navbarStyles.desktopNav}`}
    >
      <div className={`${navbarStyles.left} ${globalStyles.dFlexRow}`}>
        <NavLogo />
        <NavLinks />
      </div>
      <div className={`${navbarStyles.right} ${globalStyles.dFlexRow}`}>
        <Searchbar />
        <ThemeToggler />
        <StreakCount />
      </div>
    </div>
  );
}
