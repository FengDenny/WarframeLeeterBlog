import React from "react";
import ToggleMobileNav from "./ToggleMobileNav";
import NavLogo from "../NavLeft/NavLogo";
import ThemeToggler from "../NavRight/ThemeToggler";
import StreakCount from "../NavRight/StreakCount";
import navbarStyles from "../../../../scss/util/Navbar/navbar.module.scss";
import globalStyles from "../../../../scss/global/global.module.scss";
import Loader from "../../../suspense/Loader";

export default function MobileNavbar({ toggle, show, close }) {
  return (
    <div
      className={`${globalStyles.container} ${globalStyles.dFlexRow} ${globalStyles.spaceBetween}`}
    >
      <div className={navbarStyles.toggleBtn}>
        <ToggleMobileNav toggle={toggle} show={show} close={close} />
      </div>
      <div className={`${navbarStyles.left} ${navbarStyles.mobileNav}`}>
        <NavLogo />
      </div>
      <div
        className={`${navbarStyles.right} ${globalStyles.dFlexRow} ${navbarStyles.mobileNav}`}
      >
        <ThemeToggler />
        <Loader>
          <StreakCount />
        </Loader>
      </div>
    </div>
  );
}
