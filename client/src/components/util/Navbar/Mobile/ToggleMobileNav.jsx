import React from "react";
import mobileStyles from "../../../../scss/util/Navbar/mobileNavbar.module.scss";

import MobileMenu from "./MobileMenu";
export default function ToggleMobileNav({ toggle, show, close }) {
  return (
    <>
      <button
        aria-label='Toggle mobile menu'
        className={`${mobileStyles.buttonToggler} ${
          show ? mobileStyles.open : null
        } `}
        onClick={toggle}
      >
        <div className={mobileStyles.toggleBtnLine} />
        <div className={mobileStyles.toggleBtnLine} />
        <div className={mobileStyles.toggleBtnLine} />
      </button>

      <MobileMenu show={show} close={close} />
    </>
  );
}
