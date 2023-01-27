import React from "react";
import mobileStyles from "../../../../scss/Navbar/mobileNavbar.module.scss";
import Searchbar from "../NavRight/Searchbar";
import NavLinks from "../NavLeft/NavLinks";
export default function MobileMenu({ show, close }) {
  return (
    <div
      className={`${mobileStyles.mobileNavContainer} ${
        show ? mobileStyles.open : null
      }`}
    >
      <div className={mobileStyles.mobileSearchbar}>
        <Searchbar mobile />
      </div>
      <NavLinks mobile />
    </div>
  );
}