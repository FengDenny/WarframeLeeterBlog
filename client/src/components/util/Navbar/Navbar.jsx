import React from "react";
import navbarStyles from "../../../scss/util/Navbar/navbar.module.scss";

import DesktopNavbar from "./Desktop/DesktopNavbar";
import MobileNavbar from "./Mobile/MobileNavbar";
import { MobileMenuToggler } from "../../../View/utils/Navbar/NavbarView";
export default function Navbar() {
  const { mobileMenuOpen, toggleOpen, closeMobileMenu } = MobileMenuToggler();
  return (
    <div className={navbarStyles.container}>
      <nav className={navbarStyles.nav}>
        <DesktopNavbar />
        <MobileNavbar
          show={mobileMenuOpen}
          toggle={toggleOpen}
          close={closeMobileMenu}
        />
      </nav>
    </div>
  );
}
